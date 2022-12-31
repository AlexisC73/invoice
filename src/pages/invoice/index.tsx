import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import data from '../../data/invoices.json'
import BaseLayout from '../../layout/BaseLayout'
import ArrowLeft from '../../components/icons/arrow-left'
import {
  CustomButton,
  FullInvoiceForm,
  GoBackButton,
  InvoiceDetails,
  InvoiceHeaderBar,
} from '../../components'

export default function Invoice() {
  const { id } = useParams()
  const invoice = data.find((item) => item.id === id)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditItem, setShowEditItem] = useState(false)

  if (invoice) {
    return (
      <BaseLayout
        lockedToScreenSize={showEditItem}
        showOverlay={showEditItem}
        actionOverlay={() => setShowEditItem(false)}
      >
        <div className='lg:max-w-[730px] w-full max-lg:px-5 mx-auto mt-10 flex flex-col max-sm:pb-20'>
          <GoBackButton href='/' />
          <div className='shadow-md mt-8 rounded-lg'>
            <InvoiceHeaderBar
              onDeleteAction={() => setShowDeleteModal(true)}
              onEditAction={() => setShowEditItem(true)}
              invoice={invoice}
            />
          </div>

          <div className='mt-6 rounded-lg'>
            <InvoiceDetails invoice={invoice} />
          </div>
        </div>
        {showDeleteModal && (
          <div className='absolute inset-0 flex items-center justify-center'>
            <div
              onClick={() => setShowDeleteModal(false)}
              className='flex-1 absolute inset-0 bg-black opacity-60 z-10'
            ></div>
            <div className='bg-white dark:bg-[#1E2139] flex flex-col w-full mx-5 sm:h-[249px] sm:w-[480px] z-20 rounded-lg p-10'>
              <p className='font-bold text-2xl dark:text-white'>
                Confirm Deletion
              </p>
              <p className='text-[#888EB0] dark:text-[#DFE3FA] text-sm my-5'>
                Are you sure you want to delete invoice #${invoice.id}? This
                action cannot be undone.
              </p>
              <div className='flex self-end gap-3'>
                <CustomButton
                  action={() => setShowDeleteModal(false)}
                  type='tertiary'
                >
                  Cancel
                </CustomButton>
                <CustomButton action={() => console.log('ok')} type='danger'>
                  Delete
                </CustomButton>
              </div>
            </div>
          </div>
        )}
        {showEditItem && (
          <div className='absolute left-0 right-0 top-0 sm:bottom-0 w-full mt-[70px] lg:mt-0 sm:w-5/6 lg:w-[719px] flex flex-col lg:pl-[101px] bg-white dark:bg-[#141625]'>
            <div className='sm:hidden px-5 mt-5'>
              <GoBackButton action={() => setShowEditItem(false)} />
            </div>
            <p className='px-5 sm:px-10 font-bold text-3xl pt-8 dark:text-white'>
              New Invoice
            </p>
            <FullInvoiceForm
              defaultInvoice={invoice}
              hideAddItem={() => setShowEditItem(false)}
            />
          </div>
        )}
      </BaseLayout>
    )
  } else {
    return (
      <BaseLayout>
        <div className='lg:max-w-[730px] w-full max-lg:px-5 mx-auto mt-10 flex flex-1 flex-col max-sm:pb-20'>
          <div className='flex items-center gap-2 text-xs font-bold dark:text-white'>
            <ArrowLeft />
            <GoBackButton action={() => setShowEditItem(false)} />
          </div>
          <div className='flex flex-col flex-1 items-center justify-center dark:text-white'>
            <p className=''>L'id {id} n'existe pas.</p>
            <div>
              <span className='text-purple hover:text-purple-600'>
                <Link to='/'>Revenir à la page d'accueil</Link>
              </span>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

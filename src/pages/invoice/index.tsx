import { Link, useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import BaseLayout from '../../layout/BaseLayout'
import ArrowLeft from '../../components/icons/arrow-left'
import {
  CustomButton,
  FullInvoiceForm,
  GoBackButton,
  InvoiceDetails,
  InvoiceHeaderBar,
} from '../../components'
import { api } from '../../utils/var'

export default function Invoice() {
  const { id } = useParams()
  const [invoice, setInvoice] = useState<Invoice | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [needReload, setNeedReload] = useState(true)

  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [showEditItem, setShowEditItem] = useState(false)

  const onSave = async (toUpdateInvoice: Invoice) => {
    try {
      const res = await fetch(api + '/invoice/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ invoice: toUpdateInvoice }),
      })
      if (res.ok) {
        setShowEditItem(false)
        setIsLoading(false)
        setNeedReload(true)
      }
    } catch (error) {
      console.log(error)
      //TODO : Make a notification for can't reach the server
      //TODO : Disable the button on submit time to have response
    }
  }

  const onMarkAsPaid = async (id: string | undefined, invoice: Invoice) => {
    try {
      if (!id) {
        return
      }
      const res = await fetch(api + '/invoice/status/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          status: invoice.status === 'paid' ? 'pending' : 'paid',
        }),
      })
      if (res.ok) {
        setShowEditItem(false)
        setIsLoading(false)
        setNeedReload(true)
      }
    } catch (error) {
      console.log(error)
      //TODO : Make a notification for can't reach the server
      //TODO : Disable the button on submit time to have response
    }
  }

  const deleteInvoice = () => {
    fetch(api + '/invoice/' + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    }).then((res) => {
      if (res.ok) {
        setShowDeleteModal(false)
        window.location.href = '/'
      }
    })
  }

  const reloadInvoice = useCallback(async () => {
    return await fetch(api + '/invoice/' + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setInvoice(data)
        setIsLoading(false)
        setNeedReload(false)
      })
  }, [id])

  useEffect(() => {
    if (needReload) {
      reloadInvoice()
    }
  }, [needReload, reloadInvoice])

  if (isLoading) {
    return (
      <BaseLayout title='chargement ...'>
        <div>Chargement</div>
      </BaseLayout>
    )
  }
  if (invoice) {
    return (
      <BaseLayout
        lockedToScreenSize={showEditItem}
        showOverlay={showEditItem}
        actionOverlay={() => setShowEditItem(false)}
        title='Invoice'
      >
        <div className='lg:max-w-[730px] w-full max-lg:px-5 mx-auto mt-10 flex flex-col max-sm:pb-20'>
          <GoBackButton href='/' />
          <div className='shadow-md mt-8 rounded-lg'>
            <InvoiceHeaderBar
              onDeleteAction={() => setShowDeleteModal(true)}
              onEditAction={() => setShowEditItem(true)}
              onMarkAsPaid={() => onMarkAsPaid(id, invoice)}
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
                <CustomButton action={() => setShowDeleteModal(false)}>
                  Cancel
                </CustomButton>
                <CustomButton action={() => deleteInvoice()} type='danger'>
                  Delete
                </CustomButton>
              </div>
            </div>
          </div>
        )}
        {showEditItem && (
          <FullInvoiceForm
            defaultInvoice={invoice}
            hideForm={() => setShowEditItem(false)}
            onSend={onSave}
            onSaveAsDraft={() => console.log('This button should not be here')}
          />
        )}
      </BaseLayout>
    )
  } else {
    return (
      <BaseLayout title='Erreur ..'>
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

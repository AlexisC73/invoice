import { CustomButton } from '..'
import { emptyInvoice } from '../../utils/emptyData'
import GoBack from '../ui/GoBack'
import { useState } from 'react'
import BillFrom from './BillFrom'
import BillTo from './BillTo'
import InvoiceDetails from './InvoiceDetails'
import ItemList from './ItemsList'

export default function FullInvoiceForm({
  hideAddItem,
  defaultInvoice,
}: {
  hideAddItem: () => void
  defaultInvoice?: Invoice
}) {
  const [invoice, setInvoice] = useState<Invoice>(
    !defaultInvoice ? emptyInvoice : defaultInvoice
  )
  return (
    <div className='absolute left-0 right-0 top-0 sm:bottom-0 w-full mt-[70px] lg:mt-0 sm:w-5/6 lg:w-[719px] flex flex-col lg:pl-[101px] bg-white dark:bg-[#141625]'>
      <div className='sm:hidden px-5 mt-5'>
        <GoBack action={() => console.log('ok')} />
      </div>
      <div className='px-5 sm:px-10 font-bold text-3xl pt-8 dark:text-white'>
        {!defaultInvoice ? (
          <p>New Invoice</p>
        ) : (
          <p>
            Edit <span className='text-[#888eb0]'>#</span>
            {defaultInvoice.id}
          </p>
        )}
      </div>
      <div className='flex-1 sm:overflow-y-scroll px-5 sm:px-10 my-10 flex flex-col gap-10'>
        <BillFrom invoice={invoice} setInvoice={setInvoice} />
        <BillTo invoice={invoice} setInvoice={setInvoice} />
        <InvoiceDetails invoice={invoice} setInvoice={setInvoice} />
        <ItemList invoice={invoice} setInvoice={setInvoice} />
      </div>
      <div className='h-28 flex items-center justify-end gap-4 p-5'>
        <div
          className={`flex flex-1 ${
            !defaultInvoice ? 'justify-start' : ' justify-end'
          }`}
        >
          <CustomButton
            customClass={
              !defaultInvoice ? 'justify-self-start' : ' justify-self-end'
            }
            action={hideAddItem}
          >
            {!defaultInvoice ? 'Discard' : 'Cancel'}
          </CustomButton>
        </div>

        {!defaultInvoice && (
          <CustomButton
            type='tertiary'
            action={() => console.log('save as draft')}
          >
            Save as Draft
          </CustomButton>
        )}
        <CustomButton type='primary' action={() => console.log('Save')}>
          {!defaultInvoice ? 'Save & Send' : 'Save Changes'}
        </CustomButton>
      </div>
    </div>
  )
}

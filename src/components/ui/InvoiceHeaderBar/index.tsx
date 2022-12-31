import CustomButton from '../CustomButton'
import PaymentStatus from '../PaymentStatus'

export default function InvoiceHeaderBar({
  invoice,
  onDeleteAction,
  onEditAction,
}: {
  invoice: Invoice
  onDeleteAction: () => void
  onEditAction: () => void
}) {
  return (
    <>
      <div className='h-20 w-full bg-white rounded-lg flex items-center px-8 justify-between dark:bg-[#1E2139]'>
        <div className='flex items-center gap-4 max-sm:flex-1 max-sm:justify-between'>
          <p className='text-[#858BB2] dark:text-[#DFE3FA] text-sm'>Status</p>
          <PaymentStatus status={invoice.status} />
        </div>
        <div className='max-sm:hidden flex gap-2'>
          <CustomButton action={onEditAction}>Edit</CustomButton>
          <CustomButton action={onDeleteAction} type='danger'>
            Delete
          </CustomButton>
          <CustomButton
            type='primary'
            action={() => console.log('click mark as paid')}
          >
            Mark as Paid
          </CustomButton>
        </div>
      </div>
      <div className='fixed bottom-0 right-0 left-0 w-full justify-between bg-white h-20 items-center px-5 sm:hidden flex gap-2 dark:bg-[#1E2139]'>
        <CustomButton action={onEditAction}>Edit</CustomButton>
        <CustomButton action={onDeleteAction} type='danger'>
          Delete
        </CustomButton>
        <CustomButton
          type='primary'
          action={() => console.log('click mark as paid')}
        >
          Mark as Paid
        </CustomButton>
      </div>
    </>
  )
}

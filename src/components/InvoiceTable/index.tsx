import IllustrationEmpty from '../icons/illustration-empty'

interface InvoiceTableProps {
  invoices: Invoice[]
}

export default function InvoiceTable({ invoices }: InvoiceTableProps) {
  return (
    <div className='flex flex-col flex-1 items-center justify-center'>
      <div>
        <IllustrationEmpty />
        <p className='text-[#0C0E16] dark:text-white text-xl text-center mt-6'>
          There is nothing here
        </p>
        <p className='text-[#888EB0] dark:text-[#DFE3FA] text-xs max-w-[220px] text-center mx-auto mt-3'>
          Create an invoice by clicking the <strong>New Invoice</strong> button
          and get started
        </p>
      </div>
    </div>
  )
}

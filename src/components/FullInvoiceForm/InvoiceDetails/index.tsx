import InputElement from '../../Form/InputElement'

export default function InvoiceDetails({
  invoice,
  setInvoice,
}: {
  invoice: Invoice
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>
}) {
  const handleUpdateInvoiceInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: string
  ) => {
    setInvoice((prev) => ({
      ...prev,
      [index]: e.target.value,
    }))
  }
  return (
    <div className='grid grid-cols-4 col-span-2 sm:col-span-3 gap-5'>
      <InputElement
        label='Invoice Date'
        customClassName='sm:col-span-2 col-span-4'
        value={invoice.date}
        onChangeEvent={(e) => handleUpdateInvoiceInfo(e, 'date')}
      />
      <InputElement
        label='Payment Terms'
        customClassName='sm:col-span-2 col-span-4'
        value={invoice.dueDate}
        onChangeEvent={(e) => handleUpdateInvoiceInfo(e, 'dueDate')}
      />
      <InputElement
        label='Project Description'
        customClassName='col-span-4'
        value={invoice.description}
        onChangeEvent={(e) => handleUpdateInvoiceInfo(e, 'description')}
      />
    </div>
  )
}

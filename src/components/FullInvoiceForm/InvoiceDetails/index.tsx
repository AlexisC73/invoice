import DateInput from '../../DateInput'
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
  const handleUpdateDateInfo = (inputName: string) => (date: Date) => {
    setInvoice((prev) => ({
      ...prev,
      [inputName]: date.toISOString(),
    }))
  }
  return (
    <div className='grid grid-cols-4 col-span-2 sm:col-span-3 gap-5'>
      <DateInput
        customClassName='sm:col-span-2 col-span-4'
        label='Invoice Date'
        value={invoice.date}
        onChangeEvent={handleUpdateDateInfo('date')}
      />
      <DateInput
        customClassName='sm:col-span-2 col-span-4'
        label='Payment Terms'
        value={invoice.dueDate}
        onChangeEvent={handleUpdateDateInfo('dueDate')}
      />
      <InputElement
        label='Project Description'
        customClassName='col-span-4'
        value={invoice.description}
        onChangeEvent={(e) => handleUpdateInvoiceInfo(e, 'description')}
        canBeEmpty={true}
      />
    </div>
  )
}

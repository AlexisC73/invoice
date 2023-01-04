import { allInvoiceSchema } from '../../../joi/schema/invoice'
import InputElement from '../../Form/InputElement'
import FormTitle from '../FormTitle'

export default function BillFrom({
  invoice,
  setInvoice,
}: {
  invoice: Invoice
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>
}) {
  const handleUpdateSenderInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: string
  ) => {
    setInvoice((prev) => ({
      ...prev,
      sender: {
        ...prev.sender,
        [index]: e.target.value,
      },
    }))
  }

  return (
    <div id='bill-from'>
      <FormTitle title='Bill From' />
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
        <InputElement
          label='Street Address'
          customClassName='col-span-2 sm:col-span-3'
          value={invoice.sender.street}
          onChangeEvent={(e) => {
            handleUpdateSenderInfo(e, 'street')
          }}
        />
        <InputElement
          label='City'
          value={invoice.sender.city}
          onChangeEvent={(e) => handleUpdateSenderInfo(e, 'city')}
        />
        <InputElement
          label='Post Code'
          value={invoice.sender.zip}
          onChangeEvent={(e) => handleUpdateSenderInfo(e, 'zip')}
        />
        <InputElement
          label='Country'
          customClassName='max-sm:col-span-2'
          value={invoice.sender.country}
          onChangeEvent={(e) => handleUpdateSenderInfo(e, 'country')}
        />
      </div>
    </div>
  )
}

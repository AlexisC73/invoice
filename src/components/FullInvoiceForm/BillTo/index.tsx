import InputElement from '../../Form/InputElement'
import FormTitle from '../FormTitle'

export default function BillTo({
  invoice,
  setInvoice,
}: {
  invoice: Invoice
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>
}) {
  const handleUpdateBuyerAdressInfo = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: string
  ) => {
    setInvoice((prev) => ({
      ...prev,
      buyer: {
        ...prev.buyer,
        address: {
          ...prev.buyer.address,
          [index]: e.target.value,
        },
      },
    }))
  }
  return (
    <div id='bill-to'>
      <FormTitle title='Bill To' />
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
        <InputElement
          label="Client's Name"
          customClassName='sm:col-span-3 col-span-2'
          value={invoice.buyer.name}
          onChangeEvent={(e) =>
            setInvoice((prev) => ({
              ...prev,
              buyer: { ...prev.buyer, name: e.target.value },
            }))
          }
          canBeEmpty={false}
        />
        <InputElement
          label="Client's Email"
          customClassName='sm:col-span-3 col-span-2'
          value={invoice.contact}
          onChangeEvent={(e) =>
            setInvoice((prev) => ({
              ...prev,
              contact: e.target.value,
            }))
          }
          canBeEmpty={false}
        />
        <InputElement
          label='Street Address'
          customClassName='sm:col-span-3 col-span-2'
          value={invoice.buyer.address.street}
          onChangeEvent={(e) => handleUpdateBuyerAdressInfo(e, 'street')}
          canBeEmpty={false}
        />
        <InputElement
          label='City'
          value={invoice.buyer.address.city}
          onChangeEvent={(e) => handleUpdateBuyerAdressInfo(e, 'city')}
          canBeEmpty={false}
        />
        <InputElement
          label='Post Code'
          value={invoice.buyer.address.zip}
          onChangeEvent={(e) => handleUpdateBuyerAdressInfo(e, 'zip')}
          canBeEmpty={false}
        />
        <InputElement
          label='Country'
          customClassName='max-sm:col-span-2'
          value={invoice.buyer.address.country}
          onChangeEvent={(e) => handleUpdateBuyerAdressInfo(e, 'country')}
          canBeEmpty={false}
        />
      </div>
    </div>
  )
}

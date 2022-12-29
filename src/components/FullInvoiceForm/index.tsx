import { useState } from 'react'
import CustomButton from '../CustomButton'
import CustomInput from '../CustomInput'
import InputElement from '../InputElement'
import { DeleteIcon } from '../icons'

export default function FullInvoiceForm({
  hideAddItem,
  defaultInvoice,
}: {
  hideAddItem: () => void
  defaultInvoice?: Invoice
}) {
  const [invoice, setInvoice] = useState<Invoice>(
    defaultInvoice
      ? { ...defaultInvoice }
      : {
          buyer: {
            address: {
              city: '',
              country: '',
              state: '',
              street: '',
              zip: '',
            },
            name: '',
          },
          contact: '',
          currency: 'usd',
          date: '',
          description: '',
          dueDate: '',
          id: '',
          items: [],
          sender: {
            city: '',
            country: '',
            state: '',
            street: '',
            zip: '',
          },
          status: 'pending',
        }
  )

  return (
    <>
      <div className='mt-10 flex-1 sm:overflow-y-scroll px-5 sm:px-10'>
        <div id='bill-from' className='mb-10'>
          <FormTitle title='Bill From' />
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
            <InputElement
              label='Street Address'
              customClassName='col-span-2 sm:col-span-3'
              value={invoice.sender.street}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  sender: { ...prev.sender, street: e.target.value },
                }))
              }
            />
            <InputElement label='City' value={invoice.sender.city} />
            <InputElement label='Post Code' value={invoice.sender.zip} />
            <InputElement
              label='Country'
              customClassName='max-sm:col-span-2'
              value={invoice.sender.country}
            />
          </div>
        </div>
        <div id='bill-to'>
          <FormTitle title='Bill To' />
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
            <InputElement
              label="Client's Name"
              customClassName='sm:col-span-3 col-span-2'
              value={invoice.buyer.name}
            />
            <InputElement
              label="Client's Email"
              customClassName='sm:col-span-3 col-span-2'
              value={invoice.contact}
            />
            <InputElement
              label='Street Address'
              customClassName='sm:col-span-3 col-span-2'
              value={invoice.buyer.address.street}
            />
            <InputElement label='City' value={invoice.buyer.address.city} />
            <InputElement label='Post Code' value={invoice.buyer.address.zip} />
            <InputElement
              label='Country'
              customClassName='max-sm:col-span-2'
              value={invoice.buyer.address.country}
            />
            <div className='grid grid-cols-4 max-sm:mt-10 col-span-2 sm:col-span-3 gap-5'>
              <InputElement
                label='Invoice Date'
                customClassName='sm:col-span-2 col-span-4'
                value={invoice.date}
              />
              <InputElement
                label='Payment Terms'
                customClassName='sm:col-span-2 col-span-4'
                value={invoice.dueDate}
              />
              <InputElement
                label='Project Description'
                customClassName='col-span-4'
                value={invoice.description}
              />
            </div>

            <div id='item-list' className='col-span-2 sm:col-span-3'>
              <p className='text-[#777F98] text-xl font-bold mb-5'>Item List</p>
              <table className='w-full table-auto hidden sm:block'>
                <thead>
                  <tr className='grid grid-cols-19 gap-2 text-[#7E88C3] text-sm'>
                    <th className='text-left col-span-8 font-normal'>
                      Item Name
                    </th>
                    <th className='text-left col-span-2 font-normal'>QTY.</th>
                    <th className='text-left col-span-4 font-normal'>Price</th>
                    <th className='col-span-4 font-normal'>Total</th>
                    <th className='col-span-1'></th>
                  </tr>
                </thead>
                <tbody>
                  {invoice.items.map((item) => (
                    <tr className='grid grid-cols-19 gap-2'>
                      <td className='text-left col-span-8'>
                        <CustomInput value={item.name} />
                      </td>
                      <td className='text-left col-span-2'>
                        <CustomInput
                          type='number'
                          customClassName='text-center'
                          value={item.quantity.toString()}
                        />
                      </td>
                      <td className='text-left col-span-4'>
                        <CustomInput value={item.unitPrice.toString()} />
                      </td>
                      <td className='text-left col-span-4 flex items-center justify-center text-[#888EB0] font-bold text-base'>
                        {item.quantity * item.unitPrice} $
                      </td>
                      <td className='text-left col-span-1 flex items-center justify-center'>
                        <DeleteIcon />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='sm:hidden col-span-2 flex flex-col gap-10'>
                {invoice.items.map((item) => (
                  <div
                    key={item.name}
                    className='gap-3 grid grid-cols-11 text-base'
                  >
                    <div className='col-span-11'>
                      <InputElement label='Item Name' value={item.name} />
                    </div>
                    <div className='col-span-2'>
                      <InputElement
                        label='QTY.'
                        value={item.quantity.toString()}
                      />
                    </div>
                    <div className='col-span-4'>
                      <InputElement
                        label='Price'
                        value={item.unitPrice.toString()}
                      />
                    </div>
                    <div className='col-span-4 flex flex-col'>
                      <p className='mb-2 text-[#7E88C3]'>Total</p>
                      <p className='flex-1 flex items-center text-[#888EB0] font-bold text-base'>
                        {item.quantity * item.unitPrice} $
                      </p>
                    </div>
                    <div className='col-span-1 flex items-center justify-center mt-7'>
                      <DeleteIcon />
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-5'>
                <button className='p-5 bg-[#F9FAFE] text-[#7E88C3] dark:bg-[#252945] dark:text-[#888EB0] w-full rounded-full font-bold'>
                  + Add New Item
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='h-28 flex items-center gap-4 justify-end p-5'>
        <CustomButton action={hideAddItem} type='tertiary'>
          Cancel
        </CustomButton>
        <CustomButton action={() => console.log('cancel')}>
          Save Change
        </CustomButton>
      </div>
    </>
  )
}

const FormTitle = ({ title }: { title: string }) => (
  <p className='text-purple font-bold mb-3'>{title}</p>
)

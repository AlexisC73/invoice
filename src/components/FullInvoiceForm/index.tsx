import { useState } from 'react'
import CustomButton from '../CustomButton'
import CustomInput from '../CustomInput'
import InputElement from '../InputElement'
import { DeleteIcon } from '../icons'
import { v4 as uuid } from 'uuid'
import { emptyInvoice } from '../../utils/emptyData'

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

  const handleAddNewItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: uuid(),
          name: '',
          description: '',
          quantity: '',
          unitPrice: '',
        },
      ],
    }))
  }

  const handleDeleteItem = (id: string) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }))
  }

  const handleUpdateItemList = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    index: string
  ) => {
    setInvoice((prev) => {
      const newItems = [...prev.items].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            [index]: e.target.value,
          }
        }
        return item
      })
      return {
        ...prev,
        items: newItems,
      }
    })
  }

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
            <InputElement
              label='City'
              value={invoice.sender.city}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  sender: { ...prev.sender, city: e.target.value },
                }))
              }
            />
            <InputElement
              label='Post Code'
              value={invoice.sender.zip}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  sender: { ...prev.sender, zip: e.target.value },
                }))
              }
            />
            <InputElement
              label='Country'
              customClassName='max-sm:col-span-2'
              value={invoice.sender.country}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  sender: { ...prev.sender, country: e.target.value },
                }))
              }
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
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  buyer: { ...prev.buyer, name: e.target.value },
                }))
              }
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
            />
            <InputElement
              label='Street Address'
              customClassName='sm:col-span-3 col-span-2'
              value={invoice.buyer.address.street}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  buyer: {
                    ...prev.buyer,
                    address: {
                      ...prev.buyer.address,
                      street: e.target.value,
                    },
                  },
                }))
              }
            />
            <InputElement
              label='City'
              value={invoice.buyer.address.city}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  buyer: {
                    ...prev.buyer,
                    address: {
                      ...prev.buyer.address,
                      city: e.target.value,
                    },
                  },
                }))
              }
            />
            <InputElement
              label='Post Code'
              value={invoice.buyer.address.zip}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  buyer: {
                    ...prev.buyer,
                    address: {
                      ...prev.buyer.address,
                      zip: e.target.value,
                    },
                  },
                }))
              }
            />
            <InputElement
              label='Country'
              customClassName='max-sm:col-span-2'
              value={invoice.buyer.address.country}
              onChangeEvent={(e) =>
                setInvoice((prev) => ({
                  ...prev,
                  buyer: {
                    ...prev.buyer,
                    address: {
                      ...prev.buyer.address,
                      country: e.target.value,
                    },
                  },
                }))
              }
            />
            <div className='grid grid-cols-4 max-sm:mt-10 col-span-2 sm:col-span-3 gap-5'>
              <InputElement
                label='Invoice Date'
                customClassName='sm:col-span-2 col-span-4'
                value={invoice.date}
                onChangeEvent={(e) =>
                  setInvoice((prev) => ({
                    ...prev,
                    date: e.target.value,
                  }))
                }
              />
              <InputElement
                label='Payment Terms'
                customClassName='sm:col-span-2 col-span-4'
                value={invoice.dueDate}
                onChangeEvent={(e) =>
                  setInvoice((prev) => ({
                    ...prev,
                    dueDate: e.target.value,
                  }))
                }
              />
              <InputElement
                label='Project Description'
                customClassName='col-span-4'
                value={invoice.description}
                onChangeEvent={(e) =>
                  setInvoice((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }))
                }
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
                  {invoice.items.map((item, index) => (
                    <tr
                      key={'edit-form-' + item.id}
                      className='grid grid-cols-19 gap-2'
                    >
                      <td className='text-left col-span-8'>
                        <CustomInput
                          value={item.name}
                          onChangeEvent={(e) =>
                            handleUpdateItemList(e, item.id, 'name')
                          }
                        />
                      </td>
                      <td className='text-left col-span-2'>
                        <CustomInput
                          customClassName='text-center p-0'
                          value={item.quantity.toString()}
                          onChangeEvent={(e) =>
                            handleUpdateItemList(e, item.id, 'quantity')
                          }
                        />
                      </td>
                      <td className='text-left col-span-4'>
                        <CustomInput
                          value={item.unitPrice}
                          onChangeEvent={(e) =>
                            handleUpdateItemList(e, item.id, 'unitPrice')
                          }
                        />
                      </td>
                      <td className='text-left col-span-4 flex items-center justify-center text-[#888EB0] font-bold text-base'>
                        {(isNaN(parseInt(item.quantity))
                          ? 0
                          : parseInt(item.quantity)) *
                          (isNaN(parseInt(item.unitPrice))
                            ? 0
                            : parseInt(item.unitPrice))}{' '}
                        $
                      </td>
                      <td
                        onClick={() => handleDeleteItem(item.id)}
                        className='text-left col-span-1 flex items-center justify-center'
                      >
                        <DeleteIcon />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className='sm:hidden col-span-2 flex flex-col gap-10'>
                {invoice.items.map((item, index) => (
                  <div
                    key={'edit-form-' + item.id}
                    className='gap-3 grid grid-cols-11 text-base'
                  >
                    <div className='col-span-11'>
                      <InputElement
                        label='Item Name'
                        value={item.name}
                        onChangeEvent={(e) =>
                          handleUpdateItemList(e, item.id, 'name')
                        }
                      />
                    </div>
                    <div className='col-span-2'>
                      <InputElement
                        label='QTY.'
                        value={item.quantity.toString()}
                        customInputClass='px-0 text-center'
                        onChangeEvent={(e) =>
                          handleUpdateItemList(e, item.id, 'quantity')
                        }
                      />
                    </div>
                    <div className='col-span-4'>
                      <InputElement
                        label='Price'
                        value={item.unitPrice.toString()}
                        onChangeEvent={(e) =>
                          handleUpdateItemList(e, item.id, 'unitPrice')
                        }
                      />
                    </div>
                    <div className='col-span-4 flex flex-col'>
                      <p className='mb-2 text-[#7E88C3]'>Total</p>
                      <p className='flex-1 flex items-center text-[#888EB0] font-bold text-base'>
                        {(isNaN(parseInt(item.quantity))
                          ? 0
                          : parseInt(item.quantity)) *
                          (isNaN(parseInt(item.unitPrice))
                            ? 0
                            : parseInt(item.unitPrice))}{' '}
                        $
                      </p>
                    </div>
                    <div
                      onClick={() => handleDeleteItem(item.id)}
                      className='col-span-1 flex items-center justify-center mt-7'
                    >
                      <DeleteIcon />
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-5'>
                <button
                  onClick={handleAddNewItem}
                  className='p-5 bg-[#F9FAFE] text-[#7E88C3] dark:bg-[#252945] dark:text-[#888EB0] w-full rounded-full font-bold'
                >
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

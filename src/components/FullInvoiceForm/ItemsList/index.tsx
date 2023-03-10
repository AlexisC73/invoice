import { emptyItem } from '../../../utils/emptyData'
import { v4 as uuid } from 'uuid'
import ItemsTable from './ItemsTable'

export default function ItemList({
  invoice,
  setInvoice,
}: {
  invoice: Invoice
  setInvoice: React.Dispatch<React.SetStateAction<Invoice>>
}) {
  const handleAddNewItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: uuid(),
          ...emptyItem,
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
    <div id='item-list' className='col-span-2 sm:col-span-3'>
      <p className='text-[#777F98] text-xl font-bold mb-5'>Item List</p>

      <ItemsTable
        handleUpdateItemList={handleUpdateItemList}
        items={invoice.items}
        handleDeleteItem={handleDeleteItem}
      />

      <div className='mt-5'>
        <button
          onClick={handleAddNewItem}
          className='p-5 bg-[#F9FAFE] text-[#7E88C3] dark:bg-[#252945] dark:text-[#888EB0] w-full rounded-full font-bold'
        >
          + Add New Item
        </button>
      </div>
    </div>
  )
}

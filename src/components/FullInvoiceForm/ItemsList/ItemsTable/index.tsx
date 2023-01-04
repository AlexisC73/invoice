import MobileCard from './MobileCard'
import TableCard from './TableCard'

export default function ItemCard({
  items,
  handleUpdateItemList,
  handleDeleteItem,
}: {
  items: Product[]
  handleUpdateItemList: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    index: string
  ) => void
  handleDeleteItem: (id: string) => void
}) {
  return (
    <>
      <table className='w-full table-auto hidden sm:block'>
        <thead>
          <tr className='grid grid-cols-19 gap-2 text-[#7E88C3] text-sm'>
            <th className='text-left col-span-8 font-normal'>Item Name</th>
            <th className='text-left col-span-2 font-normal'>QTY.</th>
            <th className='text-left col-span-4 font-normal'>Price</th>
            <th className='col-span-4 font-normal'>Total</th>
            <th className='col-span-1'></th>
          </tr>
        </thead>
        <tbody className='flex flex-col gap-2'>
          {items.map((item, index) => (
            <TableCard
              key={item.id}
              handleDeleteItem={handleDeleteItem}
              handleUpdateItemList={handleUpdateItemList}
              item={item}
            />
          ))}
        </tbody>
      </table>
      <div className='sm:hidden col-span-2 flex flex-col gap-10'>
        {items.map((item) => (
          <MobileCard
            key={item.id}
            handleDeleteItem={handleDeleteItem}
            handleUpdateItemList={handleUpdateItemList}
            item={item}
          />
        ))}
      </div>
    </>
  )
}

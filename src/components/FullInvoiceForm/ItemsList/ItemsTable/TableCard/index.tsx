import CustomInput from '../../../../Form/CustomInput'
import { DeleteIcon } from '../../../../icons'

export default function TableCard({
  item,
  handleUpdateItemList,
  handleDeleteItem,
}: {
  item: Product
  handleUpdateItemList: (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string,
    index: string
  ) => void
  handleDeleteItem: (id: string) => void
}) {
  return (
    <tr key={'edit-form-' + item.id} className='grid grid-cols-19 gap-2'>
      <td className='text-left col-span-8'>
        <CustomInput
          value={item.name}
          onChangeEvent={(e) => handleUpdateItemList(e, item.id, 'name')}
        />
      </td>
      <td className='text-left col-span-2'>
        <CustomInput
          customClassName='text-center p-0'
          value={item.quantity.toString()}
          onChangeEvent={(e) => handleUpdateItemList(e, item.id, 'quantity')}
        />
      </td>
      <td className='text-left col-span-4'>
        <CustomInput
          value={item.unitPrice}
          onChangeEvent={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleUpdateItemList(e, item.id, 'unitPrice')
          }
        />
      </td>
      <td className='text-left col-span-4 flex items-center justify-center text-[#888EB0] font-bold text-base'>
        {(isNaN(parseInt(item.quantity)) ? 0 : parseInt(item.quantity)) *
          (isNaN(parseInt(item.unitPrice)) ? 0 : parseInt(item.unitPrice))}{' '}
        $
      </td>
      <td
        onClick={() => handleDeleteItem(item.id)}
        className='text-left col-span-1 flex items-center justify-center'
      >
        <DeleteIcon />
      </td>
    </tr>
  )
}

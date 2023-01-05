import InputElement from '../../../../Form/InputElement'
import { DeleteIcon } from '../../../../icons'

export default function MobileCard({
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
    <div
      key={'edit-form-' + item.id}
      className='gap-3 grid grid-cols-11 text-base'
    >
      <div className='col-span-11'>
        <InputElement
          label='Item Name'
          value={item.name}
          onChangeEvent={(e) => handleUpdateItemList(e, item.id, 'name')}
        />
      </div>
      <div className='col-span-2'>
        <InputElement
          label='QTY.'
          value={item.quantity.toString()}
          customInputClass='px-0 text-center'
          onChangeEvent={(e) => handleUpdateItemList(e, item.id, 'quantity')}
          placeholder='0'
        />
      </div>
      <div className='col-span-4'>
        <InputElement
          label='Price'
          value={item.unitPrice.toString()}
          onChangeEvent={(e) => handleUpdateItemList(e, item.id, 'unitPrice')}
          placeholder='0.00'
        />
      </div>
      <div className='col-span-4 flex flex-col'>
        <p className='mb-2 text-[#7E88C3]'>Total</p>
        <p className='flex-1 flex items-center text-[#888EB0] font-bold text-base'>
          {/* {(isNaN(parseFloat(item.quantity)) ? 0 : parseFloat(item.quantity)) *
            (isNaN(parseFloat(item.unitPrice))
              ? 0
              : parseFloat(item.unitPrice))}{' '}
          $ */}
          ${' '}
          {isNaN(parseFloat(item.quantity)) || isNaN(parseFloat(item.unitPrice))
            ? '0.00'
            : parseFloat(item.quantity) * parseFloat(item.unitPrice)}
        </p>
      </div>
      <div
        onClick={() => handleDeleteItem(item.id)}
        className='col-span-1 flex items-center justify-center mt-7'
      >
        <DeleteIcon />
      </div>
    </div>
  )
}

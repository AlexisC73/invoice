import CustomButton from '../CustomButton'
import InputElement from '../InputElement'

export default function FullInvoiceForm() {
  return (
    <>
      <div className='mt-10 flex-1 sm:overflow-y-scroll px-5 sm:px-10'>
        <div id='bill-from' className='mb-10'>
          <FormTitle title='Bill From' />
          <div className='grid grid-cols-3 gap-5'>
            <InputElement label='Street Address' customClassName='col-span-3' />
            <InputElement label='City' />
            <InputElement label='Post Code' />
            <InputElement label='Country' />
          </div>
        </div>
        <div id='bill-to'>
          <FormTitle title='Bill To' />
          <div className='grid grid-cols-3 gap-5'>
            <InputElement label="Client's Name" customClassName='col-span-3' />
            <InputElement label="Client's Email" customClassName='col-span-3' />
            <InputElement label='Street Address' customClassName='col-span-3' />
            <InputElement label='City' />
            <InputElement label='Post Code' />
            <InputElement label='Country' />
            <div className='grid grid-cols-4 col-span-3 gap-5'>
              <InputElement label='Invoice Date' customClassName='col-span-2' />
              <InputElement
                label='Payment Terms'
                customClassName='col-span-2'
              />
              <InputElement
                label='Project Description'
                customClassName='col-span-4'
              />
            </div>

            <div id='item-list'>
              <p>Item List</p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-28 flex items-center gap-4 justify-end p-5'>
        <CustomButton action={() => console.log('cancel')} type='tertiary'>
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

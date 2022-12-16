import { PlusIcon } from '../icons'
import ArrowDown from '../icons/arrow-down'

export default function InvoiceStatusBar() {
  return (
    <div className='flex lg:max-w-[730px] w-full mx-auto mt-8 lg:mt-16 max-lg:px-5'>
      <div className='flex flex-1 flex-col justify-between'>
        <h1 className='lg:text-3xl text-xl  font-bold text-[#0C0E16] dark:text-white'>
          Invoices
        </h1>
        <p className='text-[#888EB0] text-xs dark:text-[#DFE3FA]'>
          No invoices
        </p>
      </div>
      <div className='flex items-center gap-2 mr-4'>
        <p className='font-bold text-xs dark:text-white'>
          Filter <span className='max-sm:hidden'>by status</span>
        </p>
        <ArrowDown />
      </div>
      <div className='flex bg-purple rounded-full gap-4 items-center p-2'>
        <button className='bg-white w-8 h-8 flex items-center justify-center rounded-full'>
          <PlusIcon />
        </button>
        <p className='text-white text-xs font-bold pr-2 dark:text-white'>
          New <span className='max-sm:hidden'>Invoice</span>
        </p>
      </div>
    </div>
  )
}

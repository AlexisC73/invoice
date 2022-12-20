import { useState } from 'react'
import { PlusIcon } from '../icons'
import ArrowDown from '../icons/arrow-down'
import ArrowUp from '../icons/arrow-up'
import CustomCheckbox from '../CustomCheckbox'

const filter = ['draft', 'pending', 'paid']

export default function InvoiceStatusBar({
  invoices,
}: {
  invoices: Invoice[]
}) {
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterStatus, setFilterStatus] = useState<{ [key: string]: boolean }>({
    draft: false,
    pending: false,
    paid: false,
  })

  const handleToggleFilter = (key: string) => {
    setFilterStatus((prev) => ({ ...prev, [key]: !prev[key] }))
  }
  return (
    <div className='flex'>
      <div className='flex flex-1 flex-col justify-between'>
        <h1 className='lg:text-3xl text-xl  font-bold text-[#0C0E16] dark:text-white'>
          Invoices
        </h1>
        <p className='text-[#888EB0] text-xs dark:text-[#DFE3FA]'>
          {invoices.length > 1
            ? invoices.length + ' invoices'
            : invoices.length === 1
            ? invoices.length + ' invoice'
            : 'No invoices'}
        </p>
      </div>
      <div
        className='flex items-center gap-2 mr-4 relative cursor-pointer'
        onClick={() => setFilterOpen(!filterOpen)}
      >
        <p className='font-bold text-xs dark:text-white'>
          Filter<span className='max-sm:hidden'> by status</span>
        </p>
        <div className='text-purple text-xl'>
          {filterOpen ? <ArrowDown /> : <ArrowUp />}
        </div>
        {filterOpen && (
          <ul
            onClick={(e) => e.stopPropagation()}
            className='absolute bg-white dark:bg-[#252945] top-14 w-48 h-32 -right-12 rounded-lg px-7 flex flex-col gap-2 justify-center shadow-2xl'
          >
            {filter.map((item) => (
              <li className='flex items-center gap-4 dark:text-white'>
                <CustomCheckbox
                  checked={filterStatus[item]}
                  action={() => handleToggleFilter(item)}
                />
                {item.slice(0, 1).toUpperCase() + item.slice(1)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='flex bg-purple rounded-full gap-4 items-center p-2'>
        <button className='bg-white w-8 h-8 flex items-center justify-center rounded-full'>
          <PlusIcon />
        </button>
        <p className='text-white text-xs font-bold pr-2 dark:text-white'>
          New<span className='max-sm:hidden'> Invoice</span>
        </p>
      </div>
    </div>
  )
}

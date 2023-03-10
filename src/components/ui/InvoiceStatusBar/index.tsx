import { useState } from 'react'
import { PlusIcon } from '../../icons'
import ArrowDown from '../../icons/arrow-down'
import ArrowUp from '../../icons/arrow-up'
import CustomCheckbox from '../../Form/CustomCheckbox'

const filters: string[] = ['draft', 'pending', 'paid']

export default function InvoiceStatusBar({
  invoices,
  showAddItem,
  filterStatus,
  setFilterStatus,
}: {
  invoices: Invoice[]
  showAddItem: () => void
  filterStatus: string[]
  setFilterStatus: React.Dispatch<React.SetStateAction<string[]>>
}) {
  const [filterOpen, setFilterOpen] = useState(false)

  const handleToggleFilter = (k: string) => {
    const filterIsExist = filterStatus.findIndex((search) => search === k)
    if (filterIsExist >= 0) {
      const newFilterStatus = filterStatus.filter((filter) => filter !== k)
      setFilterStatus(newFilterStatus)
    } else {
      setFilterStatus([...filterStatus, k])
    }
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
            className='absolute bg-white dark:bg-[#252945] top-14 w-48 -right-12 rounded-lg p-7 flex flex-col gap-2 justify-center shadow-2xl'
          >
            {filters.map((filter) => (
              <li
                key={filter}
                className='flex items-center gap-4 dark:text-white'
              >
                <CustomCheckbox
                  checked={
                    filterStatus.findIndex((search) => search === filter) >= 0
                  }
                  action={() => handleToggleFilter(filter)}
                />
                {filter.slice(0, 1).toUpperCase() + filter.slice(1)}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='flex bg-purple rounded-full gap-4 items-center p-2'>
        <button
          onClick={showAddItem}
          className='bg-white w-8 h-8 flex items-center justify-center rounded-full'
        >
          <PlusIcon />
        </button>
        <p className='text-white text-xs font-bold pr-2 dark:text-white'>
          New<span className='max-sm:hidden'> Invoice</span>
        </p>
      </div>
    </div>
  )
}

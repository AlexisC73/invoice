import ArrowLeft from '../icons/arrow-left'
import ArrowRight from '../icons/arrow-right'
import DisplayDate from './DisplayDate'
import { MONTHS, getFirstMondayBeforeDate } from './utils'
import { useState, useEffect } from 'react'

export default function DatePicker({
  customClassName,
  action,
}: {
  customClassName?: string
  action: (date: Date) => void
}) {
  const finalClassName = `p-6 w-full bg-white dark:bg-[#252945] shadow-md rounded-xl flex flex-col gap-3 items-center ${customClassName}`
  const currentDate = new Date(Date.now())
  const [selectedDate, setSelectedDate] = useState({
    month: currentDate.getMonth(),
    year: currentDate.getFullYear(),
  })

  const [firstMondayBefore, setFirstMondayBefore] = useState(
    getFirstMondayBeforeDate(selectedDate)
  )

  const setMonth = (month: number) => {
    if (month < 0) {
      setSelectedDate({
        month: 11,
        year: selectedDate.year - 1,
      })
    } else if (month > 11) {
      setSelectedDate({
        month: 0,
        year: selectedDate.year + 1,
      })
    } else {
      setSelectedDate({
        ...selectedDate,
        month,
      })
    }
  }

  useEffect(() => {
    setFirstMondayBefore(getFirstMondayBeforeDate(selectedDate))
  }, [selectedDate])

  return (
    <div className={finalClassName}>
      <div className='flex w-full justify-between'>
        <div
          className='flex items-center cursor-pointer'
          onClick={() => setMonth(selectedDate.month - 1)}
        >
          <ArrowLeft />
        </div>

        <p className='font-bold dark:text-white'>
          {MONTHS[selectedDate.month].short} {selectedDate.year}
        </p>
        <div
          className='flex items-center cursor-pointer'
          onClick={() => setMonth(selectedDate.month + 1)}
        >
          <ArrowRight />
        </div>
      </div>
      <table className='table-auto w-full'>
        <tbody>
          <tr className='grid grid-cols-7 gap-1'>
            {Array.from({ length: 42 }).map((_, index) => (
              <DisplayDate
                key={index}
                date={new Date(firstMondayBefore.getTime() + index * 86400000)}
                selectedDate={selectedDate}
                action={action}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

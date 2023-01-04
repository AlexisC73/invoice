import { useState } from 'react'
import { CalendarIcon } from '../icons'
import DatePicker from '../DatePicker'

export default function DateInput({
  label,
  customClassName,
  value,
  onChangeEvent,
  customInputClass,
}: {
  label: string
  customClassName?: string
  value: string
  onChangeEvent: (date: Date) => void
  customInputClass?: string
}) {
  const [showDatePicker, setShowDatePicker] = useState(false)

  const dateString = new Date(value).toDateString()
  const isToday = dateString === new Date().toDateString()

  const handleShowDatePicker = () => {
    setShowDatePicker(!showDatePicker)
  }

  const action = (date: Date) => {
    onChangeEvent(date)
    setShowDatePicker(false)
  }

  const defaultClassName = 'flex flex-col flex-1 relative'
  const finalClassName = `w-full h-12 p-2 outline-none flex items-center dark:text-white ${customInputClass}`

  return (
    <>
      <div id='form-input' className={`${customClassName} ${defaultClassName}`}>
        <label className='mb-2 text-[#7E88C3] dark:[#888EB0]'>{label}</label>
        <div
          className={`flex items-center dark:bg-[#252945] border-2 border-[#DFE3FA] dark:border-[#1E2139] rounded-lg font-bold overflow-hidden flex-1 ${
            showDatePicker ? 'border-[#9277FF] dark:border-[#9277FF]' : ''
          }`}
        >
          <p className={finalClassName}>{isToday ? 'Today' : dateString}</p>
          <div
            onClick={handleShowDatePicker}
            className='w-12 flex items-center justify-center cursor-pointer dark:bg-[#252945]'
          >
            <CalendarIcon />
          </div>
        </div>
        {showDatePicker && (
          <DatePicker action={action} customClassName='z-20 absolute top-24' />
        )}
      </div>
      {showDatePicker && (
        <div
          onClick={handleShowDatePicker}
          className='overlay absolute inset-0 z-10'
        ></div>
      )}
    </>
  )
}

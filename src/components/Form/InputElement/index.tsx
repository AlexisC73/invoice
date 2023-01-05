import CustomInput from '../CustomInput'
import { useState } from 'react'

export default function InputElement({
  label,
  customClassName,
  value,
  onChangeEvent,
  customInputClass,
  canBeEmpty,
}: {
  label: string
  customClassName?: string
  value: string
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
  customInputClass?: string
  ifErrorText?: string
  canBeEmpty?: boolean
}) {
  const defaultClassName = 'flex flex-col flex-1'
  const [hasError, setHasError] = useState(false)

  return (
    <div id='form-input' className={`${customClassName} ${defaultClassName}`}>
      <div className='flex justify-between items-center'>
        <label className='mb-2 text-[#7E88C3] dark:[#888EB0]'>{label}</label>
        {hasError && <p className='text-[#ec5757] text-xs'>can't be empty</p>}
      </div>

      <CustomInput
        customClassName={customInputClass}
        onChangeEvent={onChangeEvent}
        value={value}
        hasErrorFunction={setHasError}
        canBeEmpty={canBeEmpty !== undefined ? canBeEmpty : true}
      />
    </div>
  )
}

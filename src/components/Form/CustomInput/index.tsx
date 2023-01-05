import { useEffect, useState } from 'react'

export default function CustomInput({
  type,
  customClassName,
  value,
  onChangeEvent,
  canBeEmpty,
  hasErrorFunction,
  placeholder,
}: {
  type?: string
  customClassName?: string
  value: string
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
  canBeEmpty?: boolean
  hasErrorFunction?: (hasError: boolean) => void
  placeholder?: string
}) {
  const [isFocused, setIsFocused] = useState(false)
  const [initialFocus, setInitialFocus] = useState(false)
  const [hasError, setHasError] = useState(false)

  const defaultClassName =
    'flex border-2 bg-white dark:bg-[#252945] border-[#DFE3FA] dark:border-[#1E2139] h-12 rounded-lg font-bold overflow-hidden flex-1 p-1'
  const addedClassName = `${
    hasError && !isFocused ? 'border-[#ec5757] dark:border-[#ec5757]' : ''
  }`

  useEffect(() => {
    if (!canBeEmpty && initialFocus && canBeEmpty !== undefined) {
      if (value === '') {
        setHasError(true)
      } else {
        setHasError(false)
      }
    }
  }, [value, initialFocus, canBeEmpty])

  useEffect(() => {
    if (hasErrorFunction) {
      hasErrorFunction(hasError)
    }
  }, [hasError, hasErrorFunction])

  const handleOnFocus = (isFocus: boolean) => {
    if (!initialFocus) {
      setInitialFocus(true)
    }
    setIsFocused(isFocus)
  }
  return (
    <>
      <div className={defaultClassName + ' ' + addedClassName}>
        <input
          type={!type ? 'text' : type}
          className='p-2 outline-none dark:text-white dark:bg-[#252945]'
          value={value}
          onChange={onChangeEvent}
          onFocus={(e) => handleOnFocus(true)}
          onBlur={(e) => handleOnFocus(false)}
          placeholder={placeholder !== undefined ? placeholder : ''}
        />
      </div>
    </>
  )
}

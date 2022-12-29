export default function CustomInput({
  type,
  customClassName,
  value,
  onChangeEvent,
}: {
  type?: string
  customClassName?: string
  value: string
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const finalClassName = `w-full outline-none ${
    type === 'number' ? '' : 'p-5'
  } dark:text-white dark:bg-[#252945] ${
    !customClassName ? '' : customClassName
  }`
  return (
    <div className='flex border-2 border-[#DFE3FA] dark:border-[#1E2139] h-12 rounded-lg font-bold overflow-hidden flex-1'>
      <input
        type={!type ? 'text' : type}
        className={finalClassName}
        value={type === 'number' ? parseInt(value) : value}
        onChange={onChangeEvent}
      />
    </div>
  )
}

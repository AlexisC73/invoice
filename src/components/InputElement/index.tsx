import CustomInput from '../CustomInput'

export default function InputElement({
  label,
  customClassName,
  value,
  onChangeEvent,
}: {
  label: string
  customClassName?: string
  value: string
  onChangeEvent?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  const defaultClassName = 'flex flex-col flex-1'

  return (
    <div id='form-input' className={`${customClassName} ${defaultClassName}`}>
      <label className='mb-2 text-[#7E88C3] dark:[#888EB0]'>{label}</label>
      <CustomInput onChangeEvent={onChangeEvent} value={value} />
    </div>
  )
}

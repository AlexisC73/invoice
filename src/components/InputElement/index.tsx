export default function InputElement({
  label,
  customClassName,
}: {
  label: string
  customClassName?: string
}) {
  const defaultClassName = 'flex flex-col'

  return (
    <div id='form-input' className={`${customClassName} ${defaultClassName}`}>
      <label className='mb-2 text-[#7E88C3]'>{label}</label>
      <div className='flex border border-[#DFE3FA] h-12 rounded-lg font-bold overflow-hidden'>
        <input type='text' className='flex-1 outline-none p-5' />
      </div>
    </div>
  )
}

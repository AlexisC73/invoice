export default function CustomButton({
  children,
  type,
  action,
}: {
  children: string
  type?: 'primary' | 'danger' | 'tertiary' | undefined
  action: () => void
}) {
  if (type === 'tertiary') {
    return (
      <button
        onClick={action}
        className='bg-[#F9FAFE] text-[#7E88C3] font-bold px-6 h-12 rounded-full text-sm dark:bg-[#252945] dark:text-[#DFE3FA]'
      >
        {children}
      </button>
    )
  } else if (type === 'danger') {
    return (
      <button
        onClick={action}
        className='bg-[#EC5757] text-white font-bold px-6 h-12 rounded-full text-sm'
      >
        {children}
      </button>
    )
  } else {
    return (
      <button
        onClick={action}
        className='bg-purple text-white font-bold px-6 h-12 rounded-full text-sm'
      >
        {children}
      </button>
    )
  }
}

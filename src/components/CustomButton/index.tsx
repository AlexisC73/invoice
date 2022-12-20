export default function CustomButton({
  children,
  type,
}: {
  children: string
  type?: 'primary' | 'danger' | 'tertiary' | undefined
}) {
  if (type === 'tertiary') {
    return (
      <button className='bg-[#F9FAFE] text-[#7E88C3] font-bold px-6 h-12 rounded-full text-sm dark:bg-[#252945] dark:text-[#DFE3FA]'>
        {children}
      </button>
    )
  } else if (type === 'danger') {
    return (
      <button className='bg-[#EC5757] text-white font-bold px-6 h-12 rounded-full text-sm'>
        {children}
      </button>
    )
  } else {
    return (
      <button className='bg-purple text-white font-bold px-6 h-12 rounded-full text-sm'>
        {children}
      </button>
    )
  }
}

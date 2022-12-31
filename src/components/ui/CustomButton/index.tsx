export default function MyCustomButton({
  children,
  type,
  action,
  customClass,
}: {
  children: string
  type?: 'primary' | 'danger' | 'tertiary' | undefined
  action: () => void
  customClass?: string
}) {
  const customClassName = `font-bold px-6 h-12 rounded-full text-sm ${customClass} ${
    type === 'primary'
      ? 'bg-purple text-white'
      : type === 'danger'
      ? 'bg-[#EC5757] text-white'
      : type === 'tertiary'
      ? 'bg-[#373b53] text-[#888eb0] dark:text-white'
      : 'bg-[#F9FAFE] text-[#7E88C3] dark:bg-[#252945] dark:text-[#DFE3FA]'
  }`

  return (
    <button onClick={action} className={customClassName}>
      {children}
    </button>
  )
}

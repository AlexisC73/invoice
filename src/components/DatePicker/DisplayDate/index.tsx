export default function DisplayDate({
  date,
  selectedDate,
  action,
}: {
  date: Date
  selectedDate: { month: number; year: number }
  action: (date: Date) => void
}) {
  const sameMonth = date.getMonth() === selectedDate.month
  const isToday = date.toDateString() === new Date(Date.now()).toDateString()
  const customClass = `flex items-center justify-center text-sm font-bold cursor-pointer  ${
    isToday
      ? 'text-[#7c5dfa]'
      : sameMonth
      ? 'text-black dark:text-[#dfe3fa]'
      : 'text-gray-300 dark:text-[#dfe3fa11]'
  }`

  return (
    <td onClick={() => action(date)} className={customClass}>
      {date.getDate()}
    </td>
  )
}

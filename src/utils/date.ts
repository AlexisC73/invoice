export const createInvoiceDate = (dateString: string) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ]
  const date = new Date(dateString)
  const month = months[date.getMonth()]
  const day = date.getDate()
  const year = date.getFullYear()
  return `${day} ${month} ${year}`
}

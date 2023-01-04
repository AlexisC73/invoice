export const MONTHS = [
  {
    month: 'January',
    short: 'Jan',
  },
  {
    month: 'February',
    short: 'Feb',
  },
  {
    month: 'March',
    short: 'Mar',
  },
  {
    month: 'April',
    short: 'Apr',
  },
  {
    month: 'May',
    short: 'May',
  },
  {
    month: 'June',
    short: 'Jun',
  },
  {
    month: 'July',
    short: 'Jul',
  },
  {
    month: 'August',
    short: 'Aug',
  },
  {
    month: 'September',
    short: 'Sep',
  },
  {
    month: 'October',
    short: 'Oct',
  },
  {
    month: 'November',
    short: 'Nov',
  },
  {
    month: 'December',
    short: 'Dec',
  },
]

export const getFirstMondayBeforeDate = (date: {
  month: number
  year: number
}) => {
  const day = new Date(date.year, date.month, 1).getDay()
  const diff = day !== 0 ? day - 1 : 6
  const firstMonday = new Date(date.year, date.month, 1 - diff)
  firstMonday.setHours(12, 0)
  return firstMonday
}

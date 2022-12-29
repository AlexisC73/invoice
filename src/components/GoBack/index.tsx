import { Link } from 'react-router-dom'
import ArrowLeft from '../icons/arrow-left'

export default function GoBack({
  href,
  action,
}: {
  href?: string
  action?: () => void
}) {
  return (
    <div className='flex items-center gap-2 text-xs font-bold dark:text-white'>
      <ArrowLeft />
      {action && <button onClick={action}>Go Back</button>}
      {href && <Link to='/'>Go Back</Link>}
    </div>
  )
}

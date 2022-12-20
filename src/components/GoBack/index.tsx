import { Link } from 'react-router-dom'
import ArrowLeft from '../icons/arrow-left'

export default function GoBack() {
  return (
    <div className='flex items-center gap-2 text-xs font-bold dark:text-white'>
      <ArrowLeft />
      <Link to='/'>Go Back</Link>
    </div>
  )
}

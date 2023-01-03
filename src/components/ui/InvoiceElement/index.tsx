import { Link } from 'react-router-dom'
import PaymentStatus from '../PaymentStatus'
import ArrowRight from '../../icons/arrow-right'
import { calculateBasketTotal } from '../../../utils/basket'
import { createInvoiceDate } from '../../../utils/date'

export default function InvoiceElement({ invoice }: { invoice: Invoice }) {
  const amount = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency: invoice.currency,
  }).format(calculateBasketTotal(invoice.items))

  return (
    <Link to={'/invoice/' + invoice.id}>
      <div
        id={invoice.id}
        className='max-sm:hidden w-full bg-white dark:bg-[#1E2139] h-[72px] flex items-center justify-between pl-7 pr-4 text-sm rounded-lg lg:hover:scale-105'
      >
        <div className='flex w-full gap-12 items-center pr-4'>
          <p className='font-bold dark:text-white'>
            <span className='text-[#7E88C3]'>#</span>
            ..{invoice.id.slice(invoice.id.length - 4)}
          </p>
          <p className='text-[#7E88C3] dark:text-[#DFE3FA]'>
            <span className='text-[#888EB0] dark:text-[#DFE3FA]'>Due</span>{' '}
            {createInvoiceDate(invoice.dueDate)}
          </p>
          <p className='text-[#848BB2] dark:text-white flex-1'>
            {invoice.buyer.name}
          </p>
          <p className='text-xl font-bold dark:text-white'>{amount}</p>
          <PaymentStatus status={invoice.status} />
        </div>
        <ArrowRight />
      </div>
      <div className='sm:hidden w-full bg-white dark:bg-[#1E2139] h-[134px] grid grid-cols-2 gap-1 items-center text-sm rounded-lg px-8'>
        <div className='flex items-center justify-start'>
          <div className='font-bold dark:text-white'>
            <span className='text-[#7E88C3]'>#</span>
            {invoice.id}
          </div>
        </div>
        <div className='flex items-center'>
          <p className='text-[#848BB2] text-right dark:text-white flex-1'>
            {invoice.buyer.name}
          </p>
        </div>
        <div className='flex flex-col'>
          <p className='text-[#7E88C3] dark:text-[#DFE3FA]'>
            <span className='text-[#888EB0] dark:text-[#DFE3FA]'>Due</span>{' '}
            {createInvoiceDate(invoice.date)}
          </p>
          <p className='text-lg font-bold dark:text-white'>{amount}</p>
        </div>
        <div className='flex items-center justify-end'>
          <PaymentStatus status={invoice.status} />
        </div>
      </div>
    </Link>
  )
}

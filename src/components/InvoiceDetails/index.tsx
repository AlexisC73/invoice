import { calculateBasketTotal } from '../../utils/basket'
import { createInvoiceDate } from '../../utils/date'

export default function InvoiceDetails({ invoice }: { invoice: Invoice }) {
  return (
    <div className='flex flex-col w-full bg-white dark:bg-[#1E2139] p-4 sm:p-10 rounded-lg'>
      <div
        id='sender'
        className='flex flex-col sm:flex-row w-full justify-between'
      >
        <div>
          <p className='font-bold text-lg dark:text-white'>
            <span className='text-[#888EB0]'>#</span>
            {invoice.id}
          </p>
          <p className='text-[#7E88C3] dark:text-[#DFE3FA]'>
            {invoice.description}
          </p>
        </div>
        <div className='text-left sm:text-right my-8 sm:mt-0 text-[#7E88C3] dark:text-[#DFE3FA] text-sm'>
          <p>{invoice.sender.street}</p>
          <p>{invoice.sender.city}</p>
          <p>
            {invoice.sender.zip} {invoice.sender.state}
          </p>
          <p>{invoice.sender.country}</p>
        </div>
      </div>
      <div id='receiver' className='flex flex-col sm:flex-row w-full gap-8'>
        <div className='flex-1 gap-2 flex sm:justify-between'>
          <div className='flex flex-1 flex-col justify-between'>
            <div className='flex-1'>
              <p className='text-[#7E88C3] dark:text-[#DFE3FA]'>Invoice Date</p>
              <p className='text-xl font-bold dark:text-white'>
                {createInvoiceDate(invoice.date)}
              </p>
            </div>
            <div className='flex-1'>
              <p className='text-[#7E88C3] dark:text-[#DFE3FA]'>Payment Due</p>
              <p className='text-xl font-bold dark:text-white'>
                {createInvoiceDate(invoice.dueDate)}
              </p>
            </div>
          </div>
          <div className='flex-1 sm:flex-none'>
            <p className='text-[#7E88C3] dark:text-[#DFE3FA]'>Bill to</p>
            <p className='text-xl font-bold py-2 dark:text-white'>
              {invoice.buyer.name}
            </p>
            <div className='text-[#7E88C3] dark:text-[#DFE3FA] text-left text-sm'>
              <p>{invoice.buyer.address.street}</p>
              <p>{invoice.buyer.address.city}</p>
              <p>
                {invoice.buyer.address.zip} {invoice.buyer.address.state}
              </p>
              <p>{invoice.buyer.address.country}</p>
            </div>
          </div>
        </div>
        <div className='flex-1 sm:pl-5'>
          <p className='text-[#7E88C3] dark:text-[#DFE3FA]'>Sent to</p>
          <p className='text-xl font-bold mt-2 dark:text-white'>
            {invoice.contact}
          </p>
        </div>
      </div>
      <div
        id='facture'
        className='w-full bg-[#F9FAFE] dark:bg-[#252945] rounded-lg overflow-hidden mt-10'
      >
        <div className='px-2 pb-4'>
          <div className='sm:hidden p-4 flex flex-col gap-4'>
            {invoice.items.map((item) => (
              <div key={item.id} className='flex items-center justify-between'>
                <div>
                  <p className='font-bold dark:text-white'>{item.name}</p>
                  <p className='text-[#7E88C3] font-bold dark:text-[#888EB0]'>
                    {item.quantity} x{' '}
                    {new Intl.NumberFormat('en-EN', {
                      style: 'currency',
                      currency: invoice.currency,
                    }).format(parseInt(item.unitPrice))}
                  </p>
                </div>
                <div>
                  <p className='font-bold dark:text-white'>
                    {new Intl.NumberFormat('en-EN', {
                      style: 'currency',
                      currency: invoice.currency,
                    }).format(
                      parseInt(item.unitPrice) * parseInt(item.quantity)
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <table className='hidden table-auto sm:block px-6'>
            <thead>
              <tr className='text-[#7E88C3] dark:text-[#DFE3FA] h-16'>
                <th className='text-left font-normal w-72'>Item Name</th>
                <th className='font-normal sm:max-lg:w-44 lg:w-32'>QTY.</th>
                <th className='text-right font-normal sm:max-lg:w-44 lg:w-32'>
                  Price
                </th>
                <th className='text-right font-normal sm:max-lg:w-44 lg:w-32'>
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {invoice.items.map((item) => (
                <tr key={item.id} className='h-16'>
                  <td className='font-bold dark:text-white'>{item.name}</td>
                  <td className='text-center font-bold text-[#7E88C3] dark:text-[#DFE3FA]'>
                    {item.quantity}
                  </td>
                  <td className='text-right font-bold text-[#7E88C3] dark:text-[#DFE3FA]'>
                    {new Intl.NumberFormat('en-EN', {
                      style: 'currency',
                      currency: invoice.currency,
                    }).format(parseInt(item.unitPrice))}
                  </td>
                  <td className='text-right font-bold text-black dark:text-white'>
                    {new Intl.NumberFormat('en-EN', {
                      style: 'currency',
                      currency: invoice.currency,
                    }).format(
                      parseInt(item.unitPrice) * parseInt(item.quantity)
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div
          id='table-footer'
          className='bg-[#373B53] dark:bg-[#0C0E16] flex items-center justify-between p-4 sm:p-8'
        >
          <p className='text-sm text-white'>
            <span className='hidden sm:block'>Amount Due</span>
            <span className='sm:hidden'>Grand Total</span>
          </p>
          <p className='text-3xl text-white font-bold'>
            {new Intl.NumberFormat('en-EN', {
              style: 'currency',
              currency: invoice.currency,
            }).format(calculateBasketTotal(invoice.items))}
          </p>
        </div>
      </div>
    </div>
  )
}

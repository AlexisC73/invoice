import { useState, useEffect } from 'react'
import {
  InvoiceStatusBar,
  InvoiceTable,
  FullInvoiceForm,
} from '../../components'
import BaseLayout from '../../layout/BaseLayout'
import data from '../../data/invoices.json'
import GoBack from '../../components/GoBack'

export default function Home() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setInvoices(data)
    setIsLoaded(true)
  }, [])

  if (!isLoaded) {
    return (
      <BaseLayout>
        <div className='flex flex-1 justify-center items-center'>
          <p>Loading...</p>
        </div>
      </BaseLayout>
    )
  }
  return (
    <BaseLayout>
      <div className='flex flex-col flex-1 lg:max-w-[730px] w-full mx-auto mt-8 lg:mt-16 max-lg:px-5'>
        <InvoiceStatusBar invoices={invoices} />
        <div className='mt-5 flex flex-col flex-1'>
          <InvoiceTable invoices={invoices} />
        </div>
      </div>
      <div className='absolute inset-0 w-full mt-[70px] lg:mt-0 sm:w-5/6 lg:w-[719px] flex flex-col left-0 lg:pl-[101px] bg-white'>
        <div className='sm:hidden px-5 mt-5'>
          <GoBack />
        </div>
        <p className='px-5 sm:px-10 font-bold text-3xl pt-8'>New Invoice</p>
        <FullInvoiceForm />
      </div>
    </BaseLayout>
  )
}

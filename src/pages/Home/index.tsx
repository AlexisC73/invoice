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
  const [showAddItem, setShowAddItem] = useState(false)

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
    <BaseLayout
      showOverlay={showAddItem}
      actionOverlay={() => setShowAddItem(false)}
    >
      <div className='flex flex-col flex-1 lg:max-w-[730px] w-full mx-auto mt-8 lg:mt-16 max-lg:px-5'>
        <InvoiceStatusBar
          showAddItem={() => setShowAddItem(true)}
          invoices={invoices}
        />
        <div className='mt-5 flex flex-col flex-1'>
          <InvoiceTable invoices={invoices} />
        </div>
      </div>

      {showAddItem && (
        <div className='absolute left-0 right-0 top-0 sm:bottom-0 w-full mt-[70px] lg:mt-0 sm:w-5/6 lg:w-[719px] flex flex-col lg:pl-[101px] bg-white dark:bg-[#141625]'>
          <div className='sm:hidden px-5 mt-5'>
            <GoBack action={() => setShowAddItem(false)} />
          </div>
          <p className='px-5 sm:px-10 font-bold text-3xl pt-8 dark:text-white'>
            New Invoice
          </p>
          <FullInvoiceForm hideAddItem={() => setShowAddItem(false)} />
        </div>
      )}
    </BaseLayout>
  )
}

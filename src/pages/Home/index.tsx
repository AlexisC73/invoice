import { useState, useEffect } from 'react'
import {
  InvoiceStatusBar,
  InvoiceTable,
  FullInvoiceForm,
} from '../../components'
import BaseLayout from '../../layout/BaseLayout'
import data from '../../data/invoices.json'
import GoBack from '../../components/ui/GoBack'

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
        <FullInvoiceForm hideAddItem={() => setShowAddItem(false)} />
      )}
    </BaseLayout>
  )
}

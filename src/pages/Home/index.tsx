import { useState, useEffect } from 'react'
import { InvoiceStatusBar, InvoiceTable } from '../../components'
import BaseLayout from '../../layout/BaseLayout'
import data from '../../data/invoices.json'

export default function Home() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  useEffect(() => {
    setInvoices(data)
  }, [])
  return (
    <BaseLayout>
      <div className='flex flex-col lg:max-w-[730px] w-full mx-auto mt-8 lg:mt-16 max-lg:px-5'>
        <InvoiceStatusBar invoices={invoices} />
        <div className='mt-5'>
          <InvoiceTable invoices={invoices} />
        </div>
      </div>
    </BaseLayout>
  )
}

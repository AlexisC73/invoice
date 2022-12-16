import { useState } from 'react'
import { InvoiceStatusBar, InvoiceTable } from '../../components'
import BaseLayout from '../../layout/BaseLayout'

export default function Home() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  console.log(invoices.length)
  return (
    <BaseLayout>
      <InvoiceStatusBar />
      <InvoiceTable invoices={invoices} />
    </BaseLayout>
  )
}

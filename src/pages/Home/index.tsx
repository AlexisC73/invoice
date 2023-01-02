import { useState, useEffect } from 'react'
import {
  InvoiceStatusBar,
  InvoiceTable,
  FullInvoiceForm,
} from '../../components'
import BaseLayout from '../../layout/BaseLayout'
import { api } from '../../utils/var'

export default function Home() {
  const [invoices, setInvoices] = useState<Invoice[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [showAddItem, setShowAddItem] = useState(false)
  const [needReload, setNeedReload] = useState(true)

  const reloadInvoices = async () => {
    await fetch(api + '/invoice', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res)
        if (res.ok) {
          return res.json()
        } else {
          //TODO: Send a notification for error
          return []
        }
      })
      .then((data) => {
        setInvoices(data)
      })
      .catch((error) => {
        setInvoices([])
        //TODO: Make a notification for no connection
      })
    setIsLoaded(true)
  }

  useEffect(() => {
    if (needReload) {
      reloadInvoices()
      setNeedReload(false)
    }
  }, [needReload])

  const onSave = async (invoice: Invoice) => {
    try {
      const res = await fetch(api + '/invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ invoice: invoice }),
      })
      if (res.ok) {
        setShowAddItem(false)
        setIsLoaded(false)
        setNeedReload(true)
      }
    } catch (error) {
      console.log(error)
      //TODO : Make a notification for can't reach the server
      //TODO : Disable the button on submit time to have response
    }
  }

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
        <FullInvoiceForm
          hideForm={() => setShowAddItem(false)}
          onSend={onSave}
          onSaveAsDraft={onSave}
        />
      )}
    </BaseLayout>
  )
}

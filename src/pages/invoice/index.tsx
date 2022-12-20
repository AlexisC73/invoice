import { Link, useParams } from 'react-router-dom'
import data from '../../data/invoices.json'
import BaseLayout from '../../layout/BaseLayout'
import ArrowLeft from '../../components/icons/arrow-left'
import { InvoiceDetails, InvoiceHeaderBar } from '../../components'
import GoBack from '../../components/GoBack'

export default function Invoice() {
  const { id } = useParams()
  const invoice = data.find((item) => item.id === id)

  if (invoice) {
    return (
      <BaseLayout>
        <div className='lg:max-w-[730px] w-full max-lg:px-5 mx-auto mt-10 flex flex-col max-sm:pb-20'>
          <GoBack />
          <div className='shadow-md mt-8 rounded-lg'>
            <InvoiceHeaderBar invoice={invoice} />
          </div>

          <div className='mt-6 rounded-lg'>
            <InvoiceDetails invoice={invoice} />
          </div>
        </div>
      </BaseLayout>
    )
  } else {
    return (
      <BaseLayout>
        <div className='lg:max-w-[730px] w-full max-lg:px-5 mx-auto mt-10 flex flex-1 flex-col max-sm:pb-20'>
          <div className='flex items-center gap-2 text-xs font-bold dark:text-white'>
            <ArrowLeft />
            <Link to='/'>Go Back</Link>
          </div>
          <div className='flex flex-col flex-1 items-center justify-center dark:text-white'>
            <p className=''>L'id {id} n'existe pas.</p>
            <div>
              <span className='text-purple hover:text-purple-600'>
                <Link to='/'>Revenir à la page d'accueil</Link>
              </span>
            </div>
          </div>
        </div>
      </BaseLayout>
    )
  }
}

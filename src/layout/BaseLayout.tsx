import { Header } from '../components'

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='flex flex-col flex-1 lg:flex-row'>
      <div className='flex flex-col'>
        <Header />
      </div>
      <div className='flex-1'>{children}</div>
    </div>
  )
}

import { Header } from '../components'
import { Helmet } from 'react-helmet-async'

export default function BaseLayout({
  children,
  lockedToScreenSize,
  actionOverlay,
  showOverlay,
  title,
}: {
  children: React.ReactNode
  lockedToScreenSize?: boolean
  actionOverlay?: () => void
  showOverlay?: boolean
  title: string
}) {
  const finalClassName = `flex flex-col flex-1 lg:flex-row ${
    lockedToScreenSize ? 'max-h-screen overflow-hidden' : ''
  }`

  return (
    <div className={finalClassName}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {showOverlay && (
        <div
          onClick={actionOverlay}
          className='overlay bg-black absolute inset-0 opacity-30'
        ></div>
      )}
      <div className='flex flex-col z-50'>
        <Header />
      </div>
      <div className='flex-1 flex flex-col overflow-y-scroll h-screen'>
        {children}
      </div>
    </div>
  )
}

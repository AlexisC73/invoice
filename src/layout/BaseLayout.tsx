import { Header } from '../components'

export default function BaseLayout({
  children,
  lockedToScreenSize,
  actionOverlay,
  showOverlay,
}: {
  children: React.ReactNode
  lockedToScreenSize?: boolean
  actionOverlay?: () => void
  showOverlay?: boolean
}) {
  const finalClassName = `flex flex-col flex-1 lg:flex-row ${
    lockedToScreenSize ? 'max-h-screen overflow-hidden' : ''
  }`
  return (
    <div className={finalClassName}>
      {showOverlay && (
        <div
          onClick={actionOverlay}
          className='overlay bg-black absolute inset-0 opacity-30'
        ></div>
      )}
      <div className='flex flex-col z-50 '>
        <Header />
      </div>
      <div className='flex-1 flex flex-col'>{children}</div>
    </div>
  )
}

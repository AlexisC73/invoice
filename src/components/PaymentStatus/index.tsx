const PaymentStatus = ({ status }: { status: string }) => {
  switch (status) {
    case 'paid':
      return (
        <div className='w-[104px] h-10 flex gap-1 items-center justify-center font-bold bg-[#33d6a011] text-[#33D69F] rounded-lg'>
          <div className='w-2 h-2 bg-[#33D69F] rounded-full'></div>
          {status.split('')[0].toUpperCase() + status.slice(1)}
        </div>
      )
    case 'pending':
      return (
        <div className='w-[104px] h-10 flex gap-1 items-center justify-center font-bold bg-[#FF8F0011] text-[#FF8F00] rounded-lg'>
          <div className='w-2 h-2 bg-[#FF8F00] rounded-full'></div>
          {status.split('')[0].toUpperCase() + status.slice(1)}
        </div>
      )
    case 'draft':
      return (
        <div className='w-[104px] h-10 flex gap-1 items-center justify-center font-bold bg-[#97979711] text-[#373B53] dark:text-[#DFE3FA] rounded-lg'>
          <div className='w-2 h-2 bg-[#373B53] dark:bg-[#DFE3FA] rounded-full'></div>
          {status.split('')[0].toUpperCase() + status.slice(1)}
        </div>
      )
    default:
      return (
        <div className='w-[104px] h-10 flex gap-1 items-center justify-center font-bold bg-[#97979711] text-[#373B53] dark:text-[#DFE3FA] rounded-lg'>
          <div className='w-2 h-2 bg-[#373B53] dark:bg-[#DFE3FA] rounded-full'></div>
          {status.split('')[0].toUpperCase() + status.slice(1)}
        </div>
      )
  }
}

export default PaymentStatus

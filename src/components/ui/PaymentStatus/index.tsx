const PaymentStatus = ({ status }: { status: string }) => {
  const customClassName = `w-[104px] h-10 flex gap-1 items-center justify-center font-bold text-[#373B53] dark:text-[#DFE3FA] rounded-lg ${
    status === 'paid'
      ? 'bg-[#33d6a011]'
      : status === 'pending'
      ? 'bg-[#FF8F0011]'
      : 'bg-[#97979711]'
  }`
  const statusColor =
    status === 'paid'
      ? 'text-[#33d69f]'
      : status === 'pending'
      ? 'text-[#ff8f00]'
      : 'text-[#373b53] dark:text-[#dfe3fa]'
  return (
    <div className={customClassName}>
      <div
        className={`w-2 h-2 rounded-full ${
          status === 'paid'
            ? 'bg-[#33D69F]'
            : status === 'pending'
            ? 'bg-[#FF8F00]'
            : 'bg-[#373B53] dark:bg-[#DFE3FA]'
        }`}
      ></div>
      <p className={statusColor}>
        {status.split('')[0].toUpperCase() + status.slice(1)}
      </p>
    </div>
  )
}

export default PaymentStatus

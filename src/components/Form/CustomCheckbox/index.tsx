import { CheckedIcon } from '../../icons'

const CustomCheckbox = ({
  checked,
  action,
}: {
  checked: boolean
  action: () => void
}) => {
  if (checked) {
    return (
      <div
        onClick={action}
        className='h-4 w-4 bg-purple rounded flex items-center justify-center'
      >
        <CheckedIcon />
      </div>
    )
  } else {
    return (
      <div
        onClick={action}
        className='h-4 w-4 bg-[#DFE3FA] dark:bg-[#1E2139] rounded hover:border-2 border-purple'
      ></div>
    )
  }
}

export default CustomCheckbox

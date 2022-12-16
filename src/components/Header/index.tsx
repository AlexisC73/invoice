import { MoonIcon, HeaderIcon, SunIcon } from '../icons'
import { useContext } from 'react'
import { ThemeCtx } from '../../context/ThemeCtx'
import avatar from '../../assets/avatar.jpg'

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeCtx)
  return (
    <div className='h-headerMobile bg-[#1E2139] flex lg:flex-col lg:flex-1 lg:w-headerDesktop lg:rounded-tr-[30px] lg:overflow-hidden'>
      <div className='text-7xl lg:text-[101px]'>
        <HeaderIcon />
      </div>

      <div className='flex lg:flex-col flex-1 justify-end items-center'>
        <div
          onClick={toggleTheme}
          className='max-lg:mr-5 text-xl lg:mb-5 cursor-pointer'
        >
          {theme !== 'dark' ? <MoonIcon /> : <SunIcon />}
        </div>
        <div className='w-px h-full lg:w-full lg:h-px bg-[#494E6E]'></div>
      </div>
      <div className='flex h-headerMobile w-headerMobile lg:h-headerDesktop lg:w-headerDesktop items-center justify-center'>
        <div className='h-8 w-8 lg:h-10 lg:w-10 overflow-hidden rounded-full'>
          <img alt='profile' src={avatar} />
        </div>
      </div>
    </div>
  )
}

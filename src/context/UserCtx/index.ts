import { Dispatch, SetStateAction, createContext } from 'react'

export const UserCtx = createContext<{
  user: any
  setUser: Dispatch<SetStateAction<any>>
}>({
  user: {},
  setUser: () => {},
})

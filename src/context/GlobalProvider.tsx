import React, { createContext, ReactNode, useReducer } from "react"
import { Products } from "./types"
export const GlobalContext = createContext({})
type Action = { type: "ADD"; payload: { id: number; name: string } }
interface ParamS {
  children: ReactNode
  reducer: (state: Products, action: Action) => Products
  initialState: Products
}
export const GLobalProvider = ({ children, reducer, initialState }: ParamS) => {
  return (
    <GlobalContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </GlobalContext.Provider>
  )
}

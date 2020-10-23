import "./src/styles/global.css"
import React from "react"


import { GLobalProvider } from "./src/context/GlobalProvider"
import { initialState, reducer } from "./src/context/reducer"
export const wrapRootElement = ({ element }) => (
  <GLobalProvider initialState={initialState} reducer={reducer}>
    {element}
  </GLobalProvider>
)

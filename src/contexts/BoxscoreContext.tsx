import { createContext, useContext } from "react"
import { IBoxscoreStore } from '../stores/IBoxscore'

export const BoxscoreContext = createContext<any>(null)

interface IMapState {
  (store: IBoxscoreStore): any
}

export function useBoxscoreStore(mapState?: IMapState): any {
  const store = useContext(BoxscoreContext)

  if (mapState) {
    return mapState(store)
  }

  return store
}

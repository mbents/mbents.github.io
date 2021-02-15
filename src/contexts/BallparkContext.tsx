import { createContext, useContext } from "react"
import { IBallparkStore } from '../stores/IBallpark'

export const BallparkContext = createContext<any>(null)

interface IMapState {
  (store: IBallparkStore): any
}

export function useBallparkStore(mapState?: IMapState): any {
  const store = useContext(BallparkContext)

  if (mapState) {
    return mapState(store)
  }

  return store
}

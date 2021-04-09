import { createContext, useContext } from "react"
import { IPersonStore } from '../stores/IPerson'

export const PersonContext = createContext<any>(null)

interface IMapState {
  (store: IPersonStore): any
}

export function usePersonStore(mapState?: IMapState): any {
  const store = useContext(PersonContext)

  if (mapState) {
    return mapState(store)
  }

  return store
}

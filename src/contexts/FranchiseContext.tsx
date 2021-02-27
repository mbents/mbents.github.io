import { createContext, useContext } from "react"
import { IFranchiseStore } from '../stores/IFranchise'

export const FranchiseContext = createContext<any>(null)

interface IMapState {
  (store: IFranchiseStore): any
}

export function useFranchiseStore(mapState?: IMapState): any {
  const store = useContext(FranchiseContext)

  if (mapState) {
    return mapState(store)
  }

  return store
}

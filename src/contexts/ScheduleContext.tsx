import { createContext, useContext } from "react"
import { IScheduleStore } from '../stores/ISchedule'

export const ScheduleContext = createContext<any>(null)

interface IMapState {
  (store: IScheduleStore): any
}

export function useScheduleStore(mapState?: IMapState): any {
  const store = useContext(ScheduleContext)

  if (mapState) {
    return mapState(store)
  }

  return store
}

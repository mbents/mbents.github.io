import { applySnapshot, flow, types } from "mobx-state-tree"

const Ballpark = types.model('Ballpark', {
  PARKID: types.string,
  NAME: types.string,
  AKA: types.string,
  CITY: types.string,
  STATE: types.string,
  START: types.string,
  END: types.string,
  LEAGUE: types.string,
  NOTES: types.string
})

export const BallparkStore = types.model('BallparkStore', {
  ballparks: types.optional(types.maybeNull(types.array(Ballpark)), null)
}).actions(self => {
  const load = flow(function* loadData() {
    const response = yield fetch('https://www.mikebents.com/rs-data/ballparks/')
    const json = yield response.json()
    applySnapshot(self, {ballparks: [...json]})
  })
  
  return {
    load,
    afterCreate() {
      load()
    }
  }
})

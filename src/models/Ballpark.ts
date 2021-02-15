import { applySnapshot, flow, types } from "mobx-state-tree"

const Ballpark = types.model('Ballpark', {
  "park.key": types.string,
  "park.name": types.string,
  "park.alias": types.string,
  city: types.string,
  state: types.string,
  country: types.string
})

export const BallparkStore = types.model('BallparkStore', {
  ballparks: types.optional(types.maybeNull(types.array(Ballpark)), null)
}).actions(self => {
  const load = flow(function* loadData() {
    const response = yield fetch('https://mbents.github.io/baseballdatabank/api/ballparks/')
    const json = yield response.json()
    // console.log(json)
    applySnapshot(self, {ballparks: [...json]})
  })
  
  return {
    load,
    afterCreate() {
      load()
    }
  }
})

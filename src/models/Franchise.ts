import { applySnapshot, flow, types } from "mobx-state-tree"

const Franchise = types.model('Franchise', {
  Current_Franchise_ID: types.string,
  Franchise_ID: types.string,
  League: types.string,
  Division: types.string,
  Location_Name: types.string,
  Nickname: types.string,
  Alternate_Nicknames: types.string,
  First_Date_Nickname_Used: types.string,
  Last_Date_Nickname_Used: types.string,
  City: types.string,
  State: types.string
})

export const FranchiseStore = types.model('FranchiseStore', {
  franchises: types.optional(types.maybeNull(types.array(Franchise)), null)
}).actions(self => {
  const load = flow(function* loadData() {
    const response = yield fetch('https://www.mikebents.com/rs-data/franchises/')
    const json = yield response.json()
    applySnapshot(self, {franchises: [...json]})
  })
  
  return {
    load,
    afterCreate() {
      load()
    }
  }
})

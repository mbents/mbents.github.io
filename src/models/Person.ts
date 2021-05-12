import { applySnapshot, flow, types } from "mobx-state-tree"

const Person = types.model('Person', {
  ID: types.string,
  Last: types.string,
  First: types.string,
  Playdebut: types.string,
  Mgrdebut: types.string,
  Coachdebut: types.string,
  Umpdebut: types.string
})

export const PersonStore = types.model('PersonStore', {
  people: types.optional(types.maybeNull(types.array(Person)), null),
  loading: types.boolean
}).actions(self => {
  const load = flow(function* () {
    applySnapshot(self, {loading: true})
    const response = yield fetch('https://www.mikebents.com/rs-data/people/')
    const json = yield response.json()
    applySnapshot(self, {people: [...json], loading: false})
  })

  return {
    load,
    afterCreate() {
      load()
    }
  }
})
import { applySnapshot, flow, types } from "mobx-state-tree"

const ScheduledGame = types.model('Schedule', {
  date: types.string,
  game_number: types.string,
  day_of_week: types.string,
  visiting_team: types.string,
  visiting_team_league: types.string,
  visiting_team_game_number: types.string,
  home_team: types.string,
  home_team_league: types.string,
  home_team_game_number: types.string,
  time_of_day: types.string,
  postponement_explanation: types.string,
  makeup_date: types.string
})

export const ScheduleStore = types.model('ScheduleStore', {
  year: types.string,
  scheduledGames: types.optional(types.maybeNull(types.array(ScheduledGame)), null)
}).actions(self => {
  const load = flow(function* () {
    const response = yield fetch(`https://www.mikebents.com/rs-data/schedules/${self.year}SKED.json`)
    const json = yield response.json()
    applySnapshot(self, {year: self.year, scheduledGames: [...json]})
  })

  return {
    load,
    afterCreate() {
      load()
    }
  }
})

import { applySnapshot, flow, types } from "mobx-state-tree"
import { IBoxscore } from "../stores/IBoxscore"

const Boxscore = types.model('Boxscore', {
  game_id: types.string,
  date: types.string,
  game_number: types.string,
  day_of_week: types.string,
  start_time: types.string,
  DH_used_flag: types.string,
  day_night_flag: types.string,
  visiting_team: types.string,
  home_team: types.string,
  game_site: types.string,
  vis_starting_pitcher: types.string,
  home_starting_pitcher: types.string,
  home_plate_umpire: types.string,
  first_base_umpire: types.string,
  second_base_umpire: types.string,
  third_base_umpire: types.string,
  left_field_umpire: types.string,
  right_field_umpire: types.string,
  attendance: types.string,
  PS_scorer: types.string,
  translator: types.string,
  inputter: types.string,
  input_time: types.string,
  edit_time: types.string,
  how_scored: types.string,
  pitches_entered: types.string,
  temperature: types.string,
  wind_direction: types.string,
  wind_speed: types.string,
  field_condition: types.string,
  precipitation: types.string,
  sky: types.string,
  time_of_game: types.string,
  number_of_innings: types.string,
  visitor_final_score: types.string,
  home_final_score: types.string,
  visitor_hits: types.string,
  home_hits: types.string,
  visitor_errors: types.string,
  home_errors: types.string,
  visitor_left_on_base: types.string,
  home_left_on_base: types.string,
  winning_pitcher: types.string,
  losing_pitcher: types.string,
  save_for: types.string,
  GW_RBI: types.string,
  visitor_batter_1: types.string,
  visitor_position_1: types.string,
  visitor_batter_2: types.string,
  visitor_position_2: types.string,
  visitor_batter_3: types.string,
  visitor_position_3: types.string,
  visitor_batter_4: types.string,
  visitor_position_4: types.string,
  visitor_batter_5: types.string,
  visitor_position_5: types.string,
  visitor_batter_6: types.string,
  visitor_position_6: types.string,
  visitor_batter_7: types.string,
  visitor_position_7: types.string,
  visitor_batter_8: types.string,
  visitor_position_8: types.string,
  visitor_batter_9: types.string,
  visitor_position_9: types.string,
  home_batter_1: types.string,
  home_position_1: types.string,
  home_batter_2: types.string,
  home_position_2: types.string,
  home_batter_3: types.string,
  home_position_3: types.string,
  home_batter_4: types.string,
  home_position_4: types.string,
  home_batter_5: types.string,
  home_position_5: types.string,
  home_batter_6: types.string,
  home_position_6: types.string,
  home_batter_7: types.string,
  home_position_7: types.string,
  home_batter_8: types.string,
  home_position_8: types.string,
  home_batter_9: types.string,
  home_position_9: types.string
})

export const BoxscoreStore = types.model('BoxscoreStore', {
  gameId: types.optional(types.maybeNull(types.string), null),
  boxscore: types.optional(types.maybeNull(Boxscore), null)
}).actions(self => {
  const load = flow(function* () {
    if (self.gameId) {
      const team = self.gameId.substring(0, 3)
      const year = self.gameId.substring(3, 7)
      const response = yield fetch(`https://www.mikebents.com/rs-data/games/${year}${team}.json`)
      const json = yield response.json()
      const boxscore = json.find((item: IBoxscore) => item.game_id === self.gameId)
      applySnapshot(self, {boxscore: boxscore})
    }
  })

  return {
    load,
    afterCreate() {
      load()
    }
  }
})
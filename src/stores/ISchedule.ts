export interface IScheduledGame {
  date?: string,
  game_number?: string,
  day_of_week?: string,
  visiting_team?: string,
  visiting_team_league?: string,
  visiting_team_game_number?: string,
  home_team?: string,
  home_team_league?: string,
  home_team_game_number?: string,
  time_of_day?: string,
  postponement_explanation?: string,
  makeup_date?: string
}

export interface IScheduleStore {
  year?: string,
  scheduledGames?: Array<IScheduledGame>
}

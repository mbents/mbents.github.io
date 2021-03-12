import { Card, CardHeader, Grid, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useScheduleStore } from '../contexts/ScheduleContext'
import { IScheduledGame } from '../stores/ISchedule'

const Schedule: React.FC = () => {
  const scheduleStore = useScheduleStore()
  const { scheduledGames, franchiseId, year } = scheduleStore

  const parseDate = (date: string | undefined) => {
    if (date) {
      const parsedDateStr = `${date.slice(4, 6)}-${date.slice(-2)}-${date.slice(0, 4)}`
      return new Date(parsedDateStr).toDateString()
    } else {
      return 'Unknown date'
    }
  }

  const parseTimeOfDay = (timeOfDay: string | undefined) => {
    switch (timeOfDay?.toUpperCase()) {
      case 'D':
        return 'Day'
      case 'N':
        return 'Night'
      case 'A':
        return 'Afternoon'
      case 'E':
        return 'Evening'
      default:
        return 'Unknown'
    }
  }
  
  return (
    <React.Fragment>
      <Typography variant="h6">{`Schedule for ${franchiseId} from ${year}`}</Typography>
      <Grid container spacing={1}>
      {scheduledGames?.length > 0 ? scheduledGames.map((game: IScheduledGame, index: number) =>
        <Grid item xs={4} key={`${game.date}-${game.game_number}-${index}`}>
          <Card key={`${index}-${game.date}`} variant="outlined">
            <CardHeader
              title={`${game.visiting_team} @ ${game.home_team}`}
              subheader={`${parseDate(game.date)} | Time of day: ${parseTimeOfDay(game.time_of_day)}`}
            />
          </Card>
        </Grid>
      ) : <Typography variant="h6">No games to display.</Typography>}
      </Grid>
    </React.Fragment>
  )
}

export default observer(Schedule)

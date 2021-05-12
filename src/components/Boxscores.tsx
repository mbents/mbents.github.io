import { CircularProgress, Grid, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useBoxscoreStore } from '../contexts/BoxscoreContext'
import GenericBreadcrumbs from './GenericBreadcrumbs'
import Score from './Score'
import WeatherConditions from './WeatherConditions'
import Umpires from './Umpires'
import Lineup from './Lineup'
import { observer } from 'mobx-react-lite'
import { useBallparkStore } from '../contexts/BallparkContext'
import { IBallpark } from '../stores/IBallpark'
import { usePersonStore } from '../contexts/PersonContext'

const Boxscores: React.FC = () => {
  const boxscoreStore = useBoxscoreStore()
  const ballparkStore = useBallparkStore()
  const personStore = usePersonStore()
  const { boxscore } = boxscoreStore
  const { ballparks } = ballparkStore
  const { people, loading } = personStore

  const [currentBallpark, setCurrentBallpark] = useState<IBallpark>()

  const getTimeOfGame = (minutes: string) => {
    const minutesNumber = parseInt(minutes)
    const remainder = minutesNumber % 60
    return `${Math.floor(minutesNumber / 60)}:${remainder < 10 ? '0' : ''}${remainder}`
  }

  const getDateString = (inputString: string) => {
    const options: any = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    const year = inputString.substring(0, inputString.length === 8 ? 4 : 2)
    const month = inputString.length === 8 ? inputString.substring(4, 6) : inputString.substring(2, 4)
    const day = inputString.slice(-2)
    const date = new Date(`${month} ${day}, ${year}`)
    return date.toLocaleDateString('en-US', options)
  }

  useEffect(() => {
    const ballpark = ballparks.find((item: IBallpark) => item.PARKID === boxscore.game_site)
    setCurrentBallpark(ballpark)
  }, [ballparks])

  return (
    <React.Fragment>
      <GenericBreadcrumbs breadcrumb="Boxscore" />
      {boxscore &&
      <Grid container justify="space-evenly">
        <Grid item>
          <Typography>{getDateString(boxscore?.date)}</Typography>
          {currentBallpark &&
          <Typography>{`${currentBallpark?.NAME}, ${currentBallpark?.CITY}, ${currentBallpark?.STATE}`}</Typography>}
          <Score boxscore={boxscore} />
          {loading ? <CircularProgress /> : <Umpires boxscore={boxscore} people={people} />}
          <p>{`Attendance \u2013 ${boxscore.attendance}`}</p>
          <p>{`Time of game \u2013 ${getTimeOfGame(boxscore.time_of_game)}`}</p>
          <WeatherConditions boxscore={boxscore} />
        </Grid>
        <Grid item>
          {loading ? <CircularProgress /> : <Lineup boxscore={boxscore} people={people} />}
        </Grid>
      </Grid>}
    </React.Fragment>
  )
}

export default observer(Boxscores)

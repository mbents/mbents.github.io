import { Container } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Ballparks from './Ballparks'
import Franchises from './Franchises'
import Franchise from './Franchise'
import About from './About'
import Schedule from './Schedule'
import Schedules from './Schedules'
import Boxscores from './Boxscores'
import BallparkProvider from '../providers/BallparkProvider'
import FranchiseProvider from '../providers/FranchiseProvider'
import ScheduleProvider from '../providers/ScheduleProvider'
import BoxscoreProvider from '../providers/BoxscoreProvider'
import PersonProvider from '../providers/PersonProvider'

const RouteContainer: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Switch>
        <Route path="/boxscores/:gameId">
          <BoxscoreProvider>
            <BallparkProvider>
              <PersonProvider>
                <Boxscores />
              </PersonProvider>
            </BallparkProvider>
          </BoxscoreProvider>
        </Route>
        <Route path="/schedules">
          <FranchiseProvider>
            <Schedules />
          </FranchiseProvider>
        </Route>
        <Route exact path="/franchises">
          <FranchiseProvider>
            <Franchises />
          </FranchiseProvider>
        </Route>
        <Route exact path="/franchises/:franchiseId">
          <FranchiseProvider>
            <Franchise />
          </FranchiseProvider>
        </Route>
        <Route path="/franchises/:franchiseId/schedule/:year">
          <ScheduleProvider>
            <Schedule showBreadcrumbs={true} />
          </ScheduleProvider>
        </Route>
        <Route path="/ballparks">
          <BallparkProvider>
            <Ballparks />
          </BallparkProvider>
        </Route>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </Container>
  )
}

export default observer(RouteContainer)

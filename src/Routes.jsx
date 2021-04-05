import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route path="/schedules" />
    <Route exact path="/franchises" />
    <Route exact path="/franchises/:franchiseId" />
    <Route path="/franchises/:franchiseId/schedule/:year" />
    <Route path="/ballparks" />
    <Route path="/about" />
    <Route path="/" />
  </Switch>
)
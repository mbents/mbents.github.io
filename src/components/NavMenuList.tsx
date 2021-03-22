import { Collapse, Divider, List, ListItem, ListItemText } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import GroupIcon from '@material-ui/icons/Group'
import PersonIcon from '@material-ui/icons/Person'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday'
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball'
import ExpandMore from '@material-ui/icons/ExpandMore'
import ExpandLess from '@material-ui/icons/ExpandLess'

const NavMenuList: React.FC = () => {
  const [showBaseball, setShowBaseball] = useState(false)

  const handleClick = () => {
    setShowBaseball(!showBaseball)
  }

  return (
    <List>
      <ListItem button key="home" component={Link} to="/">
        <ListItemIcon><HomeIcon /></ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem button key="about" component={Link} to="/about">
        <ListItemIcon><PersonIcon /></ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
      <Divider />
      <ListItem button key="baseball" onClick={handleClick}>
        <ListItemIcon>
          <SportsBaseballIcon />
          {showBaseball ? <ExpandLess /> : <ExpandMore />}
        </ListItemIcon>
        <ListItemText primary="Baseball stuff" />
      </ListItem>
      <Collapse in={showBaseball} timeout="auto" unmountOnExit>
        <ListItem button key="ballparks" component={Link} to="/ballparks">
          <ListItemIcon><EventSeatIcon /></ListItemIcon>
          <ListItemText primary="Ballparks" />
        </ListItem>
        <ListItem button key="franchises" component={Link} to="/franchises">
          <ListItemIcon><GroupIcon /></ListItemIcon>
          <ListItemText primary="Franchises" />
        </ListItem>
        <ListItem button key="schedules" component={Link} to="/schedules">
          <ListItemIcon><CalendarTodayIcon /></ListItemIcon>
          <ListItemText primary="Schedules" />
        </ListItem>
      </Collapse>
      <Divider />
    </List>
  )
}

export default observer(NavMenuList)

import { AppBar, Badge, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import React, { useState } from 'react'
import './App.css'
import clsx from 'clsx'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home'
import EventSeatIcon from '@material-ui/icons/EventSeat'
import GroupIcon from '@material-ui/icons/Group'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import Home from './components/Home'
import Ballparks from './components/Ballparks'
import Franchises from './components/Franchises'
import BallparkProvider from './providers/BallparkProvider'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  badgeSection: {
    float: 'right',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  grow: {
    flexGrow: 1,
  },
  toolbarHeader: {
    fontFamily: '"Courier New",Courier,monospace'
  }
}))

function App() {
  const classes = useStyles()
  const theme = useTheme()
  const [open, setOpen] = useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <div className={classes.root}>
      <Router>
        <CssBaseline />
        <AppBar
          color="default"
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" className={classes.toolbarHeader} noWrap>
              mikebents.com
            </Typography>
            <div className={classes.grow} />
            <div className={classes.badgeSection}>
              <IconButton color="inherit" target="_blank" rel="noopener noreferrer" href="https://github.com/mbents">
                <Badge color="secondary">
                  <GitHubIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" target="_blank" rel="noopener noreferrer" href="https://twitter.com/MikeBents">
                <Badge color="secondary">
                  <TwitterIcon />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
            }),
          }}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button key="home" component={Link} to="/">
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>
            <ListItem button key="ballparks" component={Link} to="/ballparks">
              <ListItemIcon><EventSeatIcon /></ListItemIcon>
              <ListItemText primary={"Ballparks"} />
            </ListItem>
            <ListItem button key="franchises" component={Link} to="/franchises">
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary={"Franchises"} />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg">
            <Switch>
              <Route path="/franchises" component={Franchises} />
              <Route path="/ballparks">
                <BallparkProvider>
                  <Ballparks />
                </BallparkProvider>
              </Route>
              <Route path="/" component={Home} />
            </Switch>
          </Container>
        </main>
      </Router>
    </div>
  )
}

export default App

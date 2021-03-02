import { AppBar, Badge, Container, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemText, makeStyles, Toolbar, Typography, useTheme } from '@material-ui/core'
import { Switch, Route, Link, HashRouter } from 'react-router-dom'
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
import PersonIcon from '@material-ui/icons/Person'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import Home from './components/Home'
import Ballparks from './components/Ballparks'
import Franchises from './components/Franchises'
import Franchise from './components/Franchise'
import About from './components/About'
import BallparkProvider from './providers/BallparkProvider'
import FranchiseProvider from './providers/FranchiseProvider'

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
      <HashRouter basename="/">
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
              <IconButton title="GitHub repos" color="inherit" href="https://github.com/mbents">
                <Badge color="secondary">
                  <GitHubIcon />
                </Badge>
              </IconButton>
              <IconButton title="Twitter" color="inherit" href="https://twitter.com/MikeBents">
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
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button key="about" component={Link} to="/about">
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button key="ballparks" component={Link} to="/ballparks">
              <ListItemIcon><EventSeatIcon /></ListItemIcon>
              <ListItemText primary="Ballparks" />
            </ListItem>
            <ListItem button key="franchises" component={Link} to="/franchises">
              <ListItemIcon><GroupIcon /></ListItemIcon>
              <ListItemText primary="Franchises" />
            </ListItem>
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container maxWidth="lg">
            <Switch>
              <Route exact path="/franchises">
                <FranchiseProvider>
                  <Franchises />
                </FranchiseProvider>
              </Route>
              <Route path="/franchises/:franchiseId">
                <FranchiseProvider>
                  <Franchise />
                </FranchiseProvider>
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
        </main>
      </HashRouter>
    </div>
  )
}

export default App

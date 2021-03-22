import { observer } from 'mobx-react-lite'
import React from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import { AppBar, Badge, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import clsx from 'clsx'

interface ITopAppBar {
  open: boolean,
  setOpen: (open: boolean) => void
}

const drawerWidth = 240
const useStyles = makeStyles((theme) => ({
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

const TopAppBar: React.FC<ITopAppBar> = (props) => {
  const { open, setOpen } = props
  const classes = useStyles()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  return (
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
  )
}

export default observer(TopAppBar)

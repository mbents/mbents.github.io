import { createStyles, Grid, Link, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles(() =>
  createStyles({
    paper: {
      padding: '10px',
      minHeight: '50vh',
      backgroundColor: '#99ccff'
    }
  })
)

const Home: React.FC = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3}>
      <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <Link variant="h6" color="inherit" href="/#/about">ABOUT</Link>
          <Typography variant="body1">
            What is going on with this website?
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <Link variant="h6" color="inherit" href="/#/ballparks">BALLPARKS</Link>
          <Typography variant="body1">
            Check out some ballparks!
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        <Paper elevation={3} className={classes.paper}>
          <Link variant="h6" color="inherit" href="/#/franchises">FRANCHISES</Link>
          <Typography variant="body1">
            Look up current and historical baseball franchises.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Home

import { createStyles, Grid, IconButton, Link, makeStyles, Paper, Snackbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close'

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
  const [disclaimerOpen, setDisclaimerOpen] = useState(true)

  const handleClose = () => {
    setDisclaimerOpen(false)
  }

  return (
    <React.Fragment>
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
     <Snackbar
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      open={disclaimerOpen}
      autoHideDuration={10000}
      onClose={handleClose}
      message='The information used here was obtained free of
        charge from and is copyrighted by Retrosheet.  Interested
        parties may contact Retrosheet at 
        "www.retrosheet.org"'
      action={
        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
      }
     />
    </React.Fragment>
  )
}

export default Home

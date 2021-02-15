import { createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useBallparkStore } from '../contexts/BallparkContext'
import { IBallpark } from '../stores/IBallpark'

const useStyles = makeStyles((theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    }
  })
)

const Ballparks: React.FC = () => {
  const ballparkStore = useBallparkStore()
  const classes = useStyles()

  return (
    <React.Fragment>
      <h4>B A L L P A R K S</h4>
      <TableContainer component={Paper}>
        <Table size="small" aria-label="ballparks table">
          <TableHead>
            <TableRow className={classes.head}>
              <TableCell>Ballpark Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ballparkStore.ballparks?.length > 0 ? ballparkStore.ballparks?.map((ballpark: IBallpark, index: number) =>
            <TableRow key={`${ballpark['park.alias']}-${index}`}>
              <TableCell>{ballpark['park.name']}</TableCell>
              <TableCell>{ballpark.city}</TableCell>
              <TableCell>{ballpark.state}</TableCell>
            </TableRow>) :
            <TableRow>
              <TableCell colSpan={3}>
                <Typography variant="h6">No data to display</Typography>
              </TableCell>
            </TableRow>}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  )
}

export default observer(Ballparks)

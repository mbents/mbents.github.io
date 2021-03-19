import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, Divider, Grid, Link, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { IFranchise } from '../stores/IFranchise'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

interface IFranchiseCard {
  franchise: IFranchise
}

const FranchiseCard: React.FC<IFranchiseCard> = (props) => {
  const { franchise } = props
  const [expanded, setExpanded] = useState<boolean>(false)
  const [yearsArray, setYearsArray] = useState<Array<number>>([])
  const startYear = parseInt(franchise.First_Date_Nickname_Used?.slice(-4) || new Date().getFullYear().toString())
  const endYear = parseInt(franchise.Last_Date_Nickname_Used?.slice(-4) || new Date().getFullYear().toString())
  
  useEffect(() => {
    const years = Array.from({length: (endYear - startYear + 1)},(v,k)=>k + startYear)
    setYearsArray(years)
  }, [])

  const handleClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid item xs={6}>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar>
              {franchise.Location_Name?.substring(0, 1)}
            </Avatar>
          }
          title={`${franchise.Location_Name} ${franchise.Nickname}`}
          subheader={`${franchise.First_Date_Nickname_Used} - ${franchise.Last_Date_Nickname_Used}`}
        />
        <CardContent>
          <Grid container justify="space-evenly">
            <Grid item>
              <Typography>{`${franchise.City}, ${franchise.State}`}</Typography>
            </Grid>
            <Grid item xs={1}>
              <Divider orientation="vertical" />
            </Grid>
            <Grid item>
              <Typography>{`${franchise.League} ${franchise.Division}`}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={handleClick}
            startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          >
            {expanded ? 'Hide Schedules' : 'Show Schedules'}
          </Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={2}>
            {yearsArray.length > 0 ? yearsArray.map((year: number) =>
              <Grid item xs={2}>
                <Link href={`/#/franchises/${franchise.Franchise_ID}/schedule/${year}`}>{year}</Link>
              </Grid>
            ) : null}
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

export default observer(FranchiseCard)

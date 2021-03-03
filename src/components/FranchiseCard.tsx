import { Avatar, Button, Card, CardActions, CardContent, CardHeader, Collapse, Grid } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { IFranchise } from '../stores/IFranchise'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

interface IFranchiseCard {
  franchise: IFranchise
}

const FranchiseCard: React.FC<IFranchiseCard> = (props) => {
  const { franchise } = props
  const [expanded, setExpanded] = useState<boolean>(false)
  const startYear = franchise.First_Date_Nickname_Used?.slice(-4)
  const endYear = franchise.Last_Date_Nickname_Used?.slice(-4) || new Date().getFullYear()
  // TODO: parse startYear and endYear to create range of years for schedules
  const years = Array.from({length:8},(v,k)=>k+1997)
  console.log(years)

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
            Hello this text is hidden
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  )
}

export default observer(FranchiseCard)

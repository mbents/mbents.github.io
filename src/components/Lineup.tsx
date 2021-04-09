import React from 'react'
import { IBoxscore } from '../stores/IBoxscore'
import { IPerson } from '../stores/IPerson'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { getPositionString } from '../utils/getPositionString'
import { getPersonString } from '../utils/getPersonString'
import { observer } from 'mobx-react-lite'

interface ILineup {
  boxscore: IBoxscore,
  people: Array<IPerson>
}

const Lineup: React.FC<ILineup> = (props) => {
  const { boxscore, people } = props

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{boxscore.home_team}</TableCell>
            <TableCell>{boxscore.visiting_team}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_1, people)}, ${getPositionString(boxscore.home_position_1)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_1, people)}, ${getPositionString(boxscore.visitor_position_1)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_2, people)}, ${getPositionString(boxscore.home_position_2)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_2, people)}, ${getPositionString(boxscore.visitor_position_2)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_3, people)}, ${getPositionString(boxscore.home_position_3)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_3, people)}, ${getPositionString(boxscore.visitor_position_3)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_4, people)}, ${getPositionString(boxscore.home_position_4)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_4, people)}, ${getPositionString(boxscore.visitor_position_4)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_5, people)}, ${getPositionString(boxscore.home_position_5)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_5, people)}, ${getPositionString(boxscore.visitor_position_5)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_6, people)}, ${getPositionString(boxscore.home_position_6)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_6, people)}, ${getPositionString(boxscore.visitor_position_6)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_7, people)}, ${getPositionString(boxscore.home_position_7)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_7, people)}, ${getPositionString(boxscore.visitor_position_7)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_8, people)}, ${getPositionString(boxscore.home_position_8)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_8, people)}, ${getPositionString(boxscore.visitor_position_8)}`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_batter_9, people)}, ${getPositionString(boxscore.home_position_9)}`}</TableCell>
            <TableCell>{`${getPersonString(boxscore.visitor_batter_9, people)}, ${getPositionString(boxscore.visitor_position_9)}`}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default observer(Lineup)

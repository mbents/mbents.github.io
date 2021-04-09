import React from 'react'
import { IBoxscore } from '../stores/IBoxscore'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core'
import { getPersonString } from '../utils/getPersonString'
import { IPerson } from '../stores/IPerson'
import { observer } from 'mobx-react-lite'

interface IUmpires {
  boxscore: IBoxscore,
  people: Array<IPerson>
}

const Umpires: React.FC<IUmpires> = (props) => {
  const { boxscore, people } = props

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><em>Umpires</em></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.home_plate_umpire, people)}, home`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.first_base_umpire, people)}, 1B`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.second_base_umpire, people)}, 2B`}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.third_base_umpire, people)}, 3B`}</TableCell>
          </TableRow>
          {boxscore.left_field_umpire &&
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.left_field_umpire, people)}, LF`}</TableCell>
          </TableRow>}
          {boxscore.right_field_umpire &&
          <TableRow>
            <TableCell>{`${getPersonString(boxscore.right_field_umpire, people)}, RF`}</TableCell>
          </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default observer(Umpires)

import { ListItem, ListItemText } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { IFranchise } from '../stores/IFranchise'

interface IFranchiseRowItem {
  franchise: IFranchise
}

const FranchiseRowItem: React.FC<IFranchiseRowItem> = (props) => {
  const { franchise } = props

  return (
    <ListItem>
      <ListItemText primary={`${franchise.Location_Name} ${franchise.Nickname}`} />
    </ListItem>
  )
}

export default observer(FranchiseRowItem)

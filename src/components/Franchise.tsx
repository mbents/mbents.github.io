import { List, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFranchiseStore } from '../contexts/FranchiseContext'
import { IFranchise } from '../stores/IFranchise'
import FranchiseRowItem from './FranchiseRowItem'

const Franchise: React.FC = () => {
  const { franchiseId } = useParams<{ franchiseId: string }>()
  const franchiseStore = useFranchiseStore()
  const { franchises } = franchiseStore

  return (
    <React.Fragment>
      <Typography variant="h6">{franchiseId}</Typography>
      <List>
        {franchises?.map((franchise: IFranchise) =>
          franchise.Franchise_ID === franchiseId ?
            <FranchiseRowItem franchise={franchise} /> : null
        )}
      </List>
    </React.Fragment>
  )
}

export default observer(Franchise)

import { Grid, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useFranchiseStore } from '../contexts/FranchiseContext'
import { IFranchise } from '../stores/IFranchise'
import FranchiseCard from './FranchiseCard'
import FranchiseBreadcrumbs from './FranchiseBreadcrumbs'

const Franchise: React.FC = () => {
  const { franchiseId } = useParams<{ franchiseId: string }>()
  const franchiseStore = useFranchiseStore()
  const { franchises } = franchiseStore

  return (
    <React.Fragment>
      <FranchiseBreadcrumbs franchiseId={franchiseId} />
      <Typography variant="h6" gutterBottom>Franchise cards for {franchiseId}</Typography>
      <Grid container spacing={2}>
        {franchises?.map((franchise: IFranchise, index: number) =>
          franchise.Franchise_ID === franchiseId ?
            <FranchiseCard franchise={franchise} key={index} /> : null
        )}
      </Grid>
    </React.Fragment>
  )
}

export default observer(Franchise)

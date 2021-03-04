import { observer } from 'mobx-react-lite'
import React from 'react'
import { useParams } from 'react-router-dom'

const Schedule: React.FC = () => {
  const { franchiseId, year } = useParams<{ franchiseId: string, year: string }>()
  return (
    <h4>{`Schedule for ${franchiseId} from ${year}`}</h4>
  )
}

export default observer(Schedule)

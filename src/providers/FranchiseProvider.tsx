import React, { useState } from 'react'
import { FranchiseStore } from '../models/Franchise'
import { FranchiseContext } from '../contexts/FranchiseContext'

const FranchiseProvider = ({ children }: any) => {
  const [franchiseStore] = useState(FranchiseStore.create({franchises: []}))

  const { Provider } = FranchiseContext
  return (
    <Provider value={franchiseStore}>
      {children}
    </Provider>
  )
}

export default FranchiseProvider

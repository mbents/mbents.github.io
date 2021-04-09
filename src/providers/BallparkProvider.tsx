import React, { useState } from 'react'
import { BallparkStore } from '../models/Ballpark'
import { BallparkContext } from '../contexts/BallparkContext'

const BallparkProvider = ({ children }: any) => {
  const [ballparkStore] = useState(BallparkStore.create({ballparks: []}))

  const { Provider } = BallparkContext
  return (
    <Provider value={ballparkStore}>
      {children}
    </Provider>
  )
}

export default BallparkProvider

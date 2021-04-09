import React, { useState } from 'react'
import { PersonStore } from '../models/Person'
import { PersonContext } from '../contexts/PersonContext'

const PersonProvider = ({ children }: any) => {
  const [personStore] = useState(PersonStore.create({people: []}))

  const { Provider } = PersonContext
  return (
    <Provider value={personStore}>
      {children}
    </Provider>
  )
}

export default PersonProvider

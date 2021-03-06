import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ScheduleContext } from '../contexts/ScheduleContext'
import { ScheduleStore } from '../models/Schedule'

const ScheduleProvider = ({ children }: any) => {
  const { year } = useParams<{ year: string }>()
  const [scheduleStore] = useState(ScheduleStore.create({year: year, scheduledGames: []}))

  const { Provider } = ScheduleContext
  return (
    <Provider value={scheduleStore}>
      {children}
    </Provider>
  )
}

export default ScheduleProvider

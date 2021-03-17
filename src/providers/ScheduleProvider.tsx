import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { ScheduleContext } from '../contexts/ScheduleContext'
import { ScheduleStore } from '../models/Schedule'

const ScheduleProvider = ({ children, selectedFranchise, selectedYear, selectedDate }: any) => {
  const { franchiseId, year } = useParams<{ franchiseId: string, year: string }>()
  const scheduleStore = ScheduleStore.create({
    year: year || selectedYear || '',
    franchiseId: franchiseId || selectedFranchise || '',
    date: selectedDate || '',
    scheduledGames: []
  })

  const { Provider } = ScheduleContext
  return (
    <Provider value={scheduleStore}>
      {children}
    </Provider>
  )
}

export default ScheduleProvider

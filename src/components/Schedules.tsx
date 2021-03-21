import { Button, Divider, FormControl, Grid, InputLabel, makeStyles, Select, TextField, Typography } from '@material-ui/core'
import { observer } from 'mobx-react-lite'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useFranchiseStore } from '../contexts/FranchiseContext'
import ScheduleProvider from '../providers/ScheduleProvider'
import { IFranchise } from '../stores/IFranchise'
import Schedule from './Schedule'
import GenericBreadcrumbs from './GenericBreadcrumbs'

const Schedules: React.FC = () => {
  const franchiseStore = useFranchiseStore()
  const { franchises } = franchiseStore
  const [selectedFranchiseId, setSelectedFranchiseId] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedDate, setSelectedDate] = useState('')
  const [showDateSearch, setShowDateSearch] = useState<boolean>(false)
  const [showFranchiseSearch, setShowFranchiseSearch] = useState<boolean>(false)
  const [yearsArray, setYearsArray] = useState<Array<number>>([])

  const handleFranchiseChange = (event: ChangeEvent<any>) => {
    setSelectedFranchiseId(event.target.value)
  }

  const handleYearChange = (event: ChangeEvent<any>) => {
    setSelectedYear(event.target.value)
  }

  const handleDateChange = (event: ChangeEvent<any>) => {
    setSelectedDate(event.target.value)
  }

  const handleClick = (source: 'franchise' | 'date') => {
    if (source === 'date') {
      setSelectedFranchiseId('')
      setSelectedYear('')
      setShowDateSearch(true)
      setShowFranchiseSearch(false)
    } else if (source === 'franchise') {
      setSelectedDate('')
      setShowFranchiseSearch(true)
      setShowDateSearch(false)
    }
  }

  const getYear = (date: string | undefined) => {
    return date ? date.slice(-4) : 'present'
  }

  useEffect(() => {
    const years = Array.from({length: (2020 - 1877 + 1)},(v,k)=>k + 1877)
    setYearsArray(years)
  }, [])

  return (
    <React.Fragment>
      <GenericBreadcrumbs breadcrumb="Schedules" />
      <Typography variant="h6">Schedule search</Typography>
      <Grid container spacing={2}>
        <Grid item>
          <FormControl variant="outlined">
            <InputLabel htmlFor="franchises">Team</InputLabel>
            <Select
              id="franchises"
              label="Team"
              autoWidth
              native
              onChange={handleFranchiseChange}
              value={selectedFranchiseId}
            >
              <option value="" />
              {franchises.map((item: IFranchise, index: number) =>
                <option key={`${item.Current_Franchise_ID}-${index}`} value={item.Current_Franchise_ID}>
                  {`[${item.Current_Franchise_ID}] ${item.Location_Name} ${item.Nickname} 
                  (${getYear(item.First_Date_Nickname_Used)}-${getYear(item.Last_Date_Nickname_Used)})`}
                </option>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs>
          <FormControl variant="outlined">
            <InputLabel htmlFor="year">Year</InputLabel>
            <Select
              id="year"
              label="Year"
              autoWidth
              native
              onChange={handleYearChange}
              value={selectedYear}
            >
              <option value="" />
              {yearsArray.sort((a: number, b: number) => b - a).map((year: number) =>
                <option key={year} value={year}>{year}</option>
              )}
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" color="primary" onClick={() => handleClick('franchise')}>
            Search
          </Button>
        </Grid>
        <Grid item style={{flexGrow: 1}}>
          <Divider orientation="vertical" />
        </Grid>
        <Grid item>
          <TextField
            id="date"
            variant="outlined"
            type="date"
            onChange={handleDateChange}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" color="primary" onClick={() => handleClick('date')}>
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs><Divider /></Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item>
          {showDateSearch ?
            <ScheduleProvider
              selectedDate={selectedDate}
              selectedFranchise={''}
              selectedYear={''}
            >
              <Schedule />
            </ScheduleProvider> : showFranchiseSearch ?
            <ScheduleProvider
              selectedFranchise={selectedFranchiseId}
              selectedYear={selectedYear}
              selectedDate={''}
            >
              <Schedule />
            </ScheduleProvider> : null}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default observer(Schedules)

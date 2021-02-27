import { observer } from 'mobx-react-lite'
import MUIDataTable from 'mui-datatables'
import React from 'react'
import { useFranchiseStore } from '../contexts/FranchiseContext'

const Franchises: React.FC = () => {
  const franchiseStore = useFranchiseStore()
  const { franchises } = franchiseStore

  const options = {
    pagination: false,
    print: false,
    selectableRows: "none" as const
  }

  const columns=[
    {
      name: "Current_Franchise_ID",
      label: 'Current Franchise ID',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Franchise_ID",
      label: 'Franchise ID',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "League",
      label: "League",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Division",
      label: 'Division',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Location_Name",
      label: 'Location Name',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Nickname",
      label: 'Nickname',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "Alternate_Nicknames",
      label: "Alternate Nicknames",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "First_Date_Nickname_Used",
      label: 'Used From',
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "Last_Date_Nickname_Used",
      label: 'Used Until',
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "City",
      label: 'City',
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "State",
      label: "State",
      options: {
        filter: true,
        sort: true,
      }
    },
  ]


  return (
    <React.Fragment>
      {franchises?.length > 0 &&
      <MUIDataTable
        title={"Franchises"}
        columns={columns}
        data={franchises}
        options={options}
      />}
    </React.Fragment>
  )
}

export default observer(Franchises)

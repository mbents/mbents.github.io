import { observer } from 'mobx-react-lite'
import React from 'react'
import { useBallparkStore } from '../contexts/BallparkContext'
import MUIDataTable from 'mui-datatables'
import GenericBreadcrumbs from './GenericBreadcrumbs'

const Ballparks: React.FC = () => {
  const ballparkStore = useBallparkStore()
  const { ballparks } = ballparkStore

  const options = {
    rowsPerPage: 25,
    rowsPerPageOptions: [25,50,100,200,300],
    print: false,
    selectableRows: "none" as const
  }

  const columns = [
    {
      name: "PARKID",
      label: "Park ID",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "NAME",
      label: "Name",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "AKA",
      label: "Other Names",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "CITY",
      label: "City",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "STATE",
      label: "State",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "START",
      label: "Start",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "END",
      label: "End",
      options: {
        filter: false,
        sort: true,
      }
    },
    {
      name: "LEAGUE",
      label: "League",
      options: {
        filter: true,
        sort: true,
      }
    },
    {
      name: "NOTES",
      label: "Notes",
      options: {
        filter: false,
        sort: true,
      }
    }
  ]

  return (
    <React.Fragment>
      <GenericBreadcrumbs breadcrumb="Ballparks" />
      {ballparks?.length > 0 &&
      <MUIDataTable
        title={"Ballparks"}
        columns={columns}
        data={ballparks}
        options={options}
      />}
    </React.Fragment>
  )
}

export default observer(Ballparks)

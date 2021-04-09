import { observer } from 'mobx-react-lite'
import React from 'react'

interface IWind {
  windDirection: string | undefined,
  windSpeed: string | undefined
}

const Wind: React.FC<IWind> = (props) => {
  const { windDirection, windSpeed } = props

  const getWindDirection = (code: string | undefined) => {
    switch (code) {
      case "0":
      default:
        return "unknown"
      case "1":
        return "to left"
      case "2":
        return "to center"
      case "3":
        return "to right"
      case "4":
        return "left to right"
      case "5":
        return "from left"
      case "6":
        return "from center"
      case "7":
        return "from right"
      case "8":
        return "right to left"
    }
  }

  return (
    <p>{`Wind ${getWindDirection(windDirection)} at ${windSpeed} mph`}</p>
  )
}

export default observer(Wind)

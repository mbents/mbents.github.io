import { observer } from 'mobx-react-lite'
import React from 'react'
import { IBoxscore } from '../stores/IBoxscore'
import Wind from './Wind'

interface IWeatherConditions {
  boxscore: IBoxscore
}

const WeatherConditions: React.FC<IWeatherConditions> = (props) => {
  const { boxscore } = props

  const getSky = (code: string | undefined) => {
    switch (code) {
      case "0":
        return "Sky condition unknown"
      case "1":
        return "Sky is sunny"
      case "2":
        return "Sky is cloudy"
      case "3":
        return "Sky is overcast"
      case "4":
        return "Night"
      case "5":
        return "Dome"
    }
  }

  const getPrecipitation = (code: string | undefined) => {
    switch (code) {
      case "0":
        return "unknown"
      case "1":
        return "none"
      case "2":
        return "drizzle"
      case "3":
        return "showers"
      case "4":
        return "rain"
      case "5":
        return "snow"
    }
  }

  const getFieldCondition = (code: string | undefined) => {
    switch (code) {
      case "0":
        return "unknown"
      case "1":
        return "soaked"
      case "2":
        return "wet"
      case "3":
        return "damp"
      case "4":
        return "dry"
    }
  }

  return (
    <React.Fragment>
      <p>{`${getSky(boxscore.sky)} and temperature is ${boxscore.temperature}\u00B0`}</p>
      <Wind
        windDirection={props.boxscore.wind_direction}
        windSpeed={props.boxscore.wind_speed}
      />
      <p>{`Precipitation: ${getPrecipitation(boxscore.precipitation)}`}</p>
      <p>{`Field condition: ${getFieldCondition(boxscore.field_condition)}`}</p>
    </React.Fragment>
  )
}

export default observer(WeatherConditions)

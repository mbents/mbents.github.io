import React from 'react'
import { useBoxscoreStore } from '../contexts/BoxscoreContext'

const Boxscores: React.FC = () => {
  const boxscoreStore = useBoxscoreStore()
  console.log(boxscoreStore)
  
  return (
    <h4>B O X S C O R E S</h4>
  )
}

export default Boxscores

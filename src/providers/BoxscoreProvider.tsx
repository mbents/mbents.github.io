import { useParams } from 'react-router-dom'
import { BoxscoreStore } from '../models/Boxscore'
import { BoxscoreContext } from '../contexts/BoxscoreContext'

const BoxscoreProvider = ({ children }: any) => {
  const { gameId } = useParams<{ gameId: string }>()
  const boxscoreStore = BoxscoreStore.create({
    boxscore: null,
    gameId: gameId
  })

  const { Provider } = BoxscoreContext
  return (
    <Provider value={boxscoreStore}>
      {children}
    </Provider>
  )
}

export default BoxscoreProvider

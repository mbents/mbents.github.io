import { IPerson } from "../stores/IPerson"

export const getPersonString = (playerId: string | undefined, people: Array<IPerson>) => {
  const player = people.find((item: IPerson) => item.ID === playerId)
  return player ? `${player.First} ${player.Last}` : null
}

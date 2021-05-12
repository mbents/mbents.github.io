export interface IPerson {
  ID?: string,
  Last?: string,
  First?: string,
  Playdebut?: string,
  Mgrdebut?: string,
  Coachdebut?: string,
  Umpdebut?: string
}

export interface IPersonStore {
  people?: Array<IPerson>,
  loading: boolean
}
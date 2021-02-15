export interface IBallpark {
  "park.key"?: string,
  "park.name"?: string,
  "park.alias"?: string,
  city?: string,
  state?: string,
  country?: string
}

export interface IBallparkStore {
  ballparks?: Array<IBallpark>
}

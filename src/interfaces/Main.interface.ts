export interface IInfo {
  open: boolean
  plot: string
  writer: string
  actors: string
  rating: string
}

interface IRating {
  Source: string
  Value: string
}

export interface IResults {
  id: string
  title: string
  year: string
  rated: string
  released: string
  season: string
  episode: string
  runtime: string
  genre: string
  director: string
  writer: string
  actors: string
  plot: string
  language: string
  country: string
  awards: string
  poster: string
  ratings: IRating[]
  metascore: string
  imdbrating: string
  imdbvotes: string
  imdbid: string
  seriesid: string
  type: string
  response: string
}
export interface IUser {
  _id: string
  email: string
  password: string
  name: string
  __v: number
}

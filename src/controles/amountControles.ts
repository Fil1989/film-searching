import { IResults } from '../interfaces/main.interface'

interface IAmount {
  allSearchResults: IResults[]
  perPage: number
  page: number
  incrementPage: () => void
  resetPage: () => void
  setAllResults: IResults[]
  getResults: IResults[]
}

const amountControles: IAmount = {
  allSearchResults: [],
  perPage: 20,
  page: 1,
  incrementPage() {
    this.page += 1
  },
  resetPage() {
    this.page = 1
  },

  set setAllResults(results: IResults[]) {
    this.allSearchResults = results
  },
  get getResults() {
    let filmsToDisplay = this.allSearchResults.filter(
      film => this.allSearchResults.indexOf(film) < 20 * this.page,
    )
    return filmsToDisplay
  },
}
export default amountControles

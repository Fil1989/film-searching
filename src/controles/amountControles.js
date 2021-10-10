const amountControles = {
  allSearchResults: [],
  perPage: 20,
  page: 1,
  incrementPage() {
    this.page += 1
  },
  resetPage() {
    this.page = 1
  },

  set setAllResults(results) {
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

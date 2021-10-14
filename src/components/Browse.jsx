import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import films from '../data/imdb.json'
import FilmTemplate from './FilmTemplate.jsx'
import amountControles from '../controles/amountControles.js'
import { InView } from 'react-intersection-observer'
// import ChangeControles from './ChangeControles.jsx'
// import SampleComp from './SampleComp.jsx'
function Browse() {
  const [search, setSearch] = useState('')
  const [visible, setVisible] = useState(false)
  let [results, setResults] = useState([])

  useEffect(() => {
    amountControles.resetPage()
  }, [])

  return (
    <section className="search_component" aria-label="Main input field">
      <form
        className="search_form"
        onSubmit={e => {
          e.preventDefault()
          amountControles.resetPage()
          const resultsOfSearch = films.filter(
            film =>
              film.title &&
              film.title
                .toLowerCase()
                .includes(
                  e.currentTarget[0].attributes[4].nodeValue.toLowerCase(),
                ),
          )
          amountControles.setAllResults = resultsOfSearch
          setResults(amountControles.getResults)
          setTimeout(() => {
            setVisible(true)
          }, 500)
        }}
      >
        <TextField
          sx={{
            marginRight: '20px',
          }}
          value={search}
          onChange={e => {
            e.preventDefault()
            setSearch(e.target.value)
          }}
          label="Search"
          type="text"
          variant="outlined"
          name="search"
          className="search_input"
        />
        <Button type="submit" variant="contained">
          Search
        </Button>
      </form>
      <ul className="results">
        <FilmTemplate searchResults={results} />

        <InView
          as="div"
          onChange={inView => {
            if (inView) {
              amountControles.incrementPage()
              setResults(amountControles.getResults)
            }
          }}
        >
          {visible && (
            <Button type="button" variant="contained" className="btn_more">
              More...
            </Button>
          )}
        </InView>
      </ul>
    </section>
  )
}

export default Browse

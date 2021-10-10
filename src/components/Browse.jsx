import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import films from '../data/imdb.json'
import FilmTemplate from './FilmTemplate.jsx'
import amountControles from '../controles/amountControles.js'
// import { useInView } from 'react-intersection-observer'
// import ChangeControles from './ChangeControles.jsx'

function Browse() {
  const [search, setSearch] = useState('')
  let [results, setResults] = useState([])

  // const [ref, inView] = useInView({
  //   threshold: 0,
  // })

  useEffect(() => {
    amountControles.resetPage()
  }, [])
  return (
    <section className="search_component" aria-label="Main input field">
      <form
        className="search_form"
        onSubmit={e => {
          e.preventDefault()
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
        {/* {inView && (
          <ChangeControles
            searchResults={results}
            setNextResults={setResults}
          />
        )} */}

        {/* <div className="alfa">
          <p>1</p>
          {inView && (
            <>
              <p>Naw all is ok</p>
              <p>Naw all is ok</p>
              <p>Naw all is ok</p>
              <p>Naw all is ok</p>
              <p>Naw all is ok</p>
              <p>Naw all is ok</p>
              <p>Naw all is ok</p>
              <p>Naw all is ok</p>
            </>
          )}
        </div> */}
      </ul>
      {/* {results.length !== 0 && (
        <div className="btn_primary" ref={ref}>
          More...
        </div> 
      )}*/}
    </section>
  )
}

export default Browse

import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Modal from './Modal.jsx'
import FilmTemplate from './FilmTemplate.jsx'
import amountControles from '../controles/amountControles.js'
import SearchForm from './SearchForm.jsx'
import { InView } from 'react-intersection-observer'
import { useSelector, useDispatch } from 'react-redux'

function Browse() {
  const [visible, setVisible] = useState(false)
  const token = useSelector(state => state.token)
  const [info, setInfo] = useState({
    open: false,
    plot: '',
    writer: '',
    actors: '',
    rating: '',
  })
  let [results, setResults] = useState([])

  useEffect(() => {
    amountControles.resetPage()
  }, [])

  return (
    <section className="search_component" aria-label="Main input field">
      <SearchForm setResults={setResults} setVisible={setVisible} />
      {info.open && (
        <Modal
          plot={info.plot}
          writer={info.writer}
          actors={info.actors}
          rating={info.rating}
          setInfo={setInfo}
        />
      )}
      <ul className="results">
        <FilmTemplate searchResults={results} setInfo={setInfo} token={token} />

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

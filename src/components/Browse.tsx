import { useState, useEffect } from 'react'
import Button from '@mui/material/Button'
import Modal from './Modal'
import FilmTemplate from './FilmTemplate'
import amountControles from '../controles/amountControles.js'
import SearchForm from './SearchForm'
import { InView } from 'react-intersection-observer'
import { IInfo, IResults } from '../interfaces/main.interface'

function Browse() {
  const [visible, setVisible] = useState<boolean>(false)
  const [info, setInfo] = useState<IInfo>({
    open: false,
    plot: '',
    writer: '',
    actors: '',
    rating: '',
  })
  // type iteralResults = never[] | IResults[]
  let [results, setResults] = useState<IResults[]>([])

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
        <FilmTemplate searchResults={results} setInfo={setInfo} />

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

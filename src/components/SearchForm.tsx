import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import films from '../data/imdb.json'
import amountControles from '../controles/amountControles.js'
import { IResults } from '../interfaces/main.interface'

interface IProps {
  setResults: (films: IResults[]) => void
  setVisible: (value: boolean) => void
}

const SearchForm = ({ setResults, setVisible }: IProps) => {
  const [search, setSearch] = useState<string>('')

  return (
    <form
      className="search_form"
      onSubmit={e => {
        e.preventDefault()
        amountControles.resetPage()
        const resultsOfSearch = films.filter(
          film =>
            film.title &&
            e.currentTarget[0].attributes[4].nodeValue &&
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
  )
}
export default SearchForm

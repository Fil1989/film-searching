import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import films from '../data/imdb.json'
import amountControles from '../controles/amountControles'
import { IResults } from '../interfaces/main.interface'

interface IProps {
  setResults: (films: IResults[]) => void
  setVisible: (value: boolean) => void
}
export const value: string = '777'

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
            search &&
            film.title.toLowerCase().includes(search.toLowerCase()),
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
      <p data-testid="value">{value}</p>
    </form>
  )
}
export default SearchForm
export const sum = (a: number, b: number): number => a + b

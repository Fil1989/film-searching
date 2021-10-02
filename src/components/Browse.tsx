import Autocomplete from '@mui/material/Autocomplete'
import TextField from '@mui/material/TextField'
import films from '../data/imdb.json'

function Browse() {
  return (
    <div className="search_component" aria-label="Main input field">
      <Autocomplete
        id="search"
        freeSolo
        options={films.map(option => option.title)}
        renderInput={params => <TextField {...params} label="Search" />}
        className="search_input"
      />
    </div>
  )
}

export default Browse

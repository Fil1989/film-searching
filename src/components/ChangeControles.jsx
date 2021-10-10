import amountControles from '../controles/amountControles.js'
import FilmTemplate from './FilmTemplate.jsx'
const ChangeControles = ({ searchResults, setNextResults }) => {
  amountControles.incrementPage()
  setNextResults(amountControles.getResults)
  return <FilmTemplate searchResults={searchResults} />
}
export default ChangeControles

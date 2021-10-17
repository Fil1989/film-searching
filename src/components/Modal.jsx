import Button from '@mui/material/Button'

const Modal = ({ plot, actors, rating, writer, setInfo }) => {
  return (
    <div aria-label="Modal window" className="modal_main">
      <div className="modal_back" aria-label="Background of modal window"></div>
      <ul className="modal" aria-label="Characteristics of movie">
        <Button
          type="button"
          className="close_button"
          variant="filled"
          onClick={() => {
            setInfo(previousValue => ({ ...previousValue, open: false }))
            document.body.style.overflow = 'scroll'
          }}
        >
          X
        </Button>
        <li className="characteristics">{plot}</li>
        <li className="characteristics">Actors:{actors}</li>
        <li className="characteristics">Writer: {writer}</li>
        <li className="characteristics">Rating:{rating}</li>
      </ul>
    </div>
  )
}
export default Modal

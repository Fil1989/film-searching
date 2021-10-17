import { useEffect } from 'react'
const Modal = ({ plot, actors, rating, writer }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
  }, [])
  return (
    <div className="mod">
      <div className="modal_back" aria-label="Modal window"></div>
      <ul className="modal">
        <li className="characteristics">{plot}</li>
        <li className="characteristics">Actors:{actors}</li>
        <li className="characteristics">Writer: {writer}</li>
        <li className="characteristics">Rating:{rating}</li>
      </ul>
    </div>
  )
}
export default Modal

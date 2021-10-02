import React from 'react'
import films from '../data/imdb.json'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
var Carousel = require('react-responsive-carousel').Carousel

class DemoCarousel extends React.Component {
  render() {
    const firstPlot =
      films[0].plot.length < 51
        ? films[0].plot
        : films[0].plot.split('').slice(0, 50).join('') + '...'
    return (
      <Carousel showArrows={true}>
        <div>
          <img src={films[0].poster} alt="" />
          <p className="legend">{firstPlot}</p>
        </div>
        <div>
          <img src={films[1].poster} alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={films[2].poster} alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    )
  }
}
export default DemoCarousel

import films from '../data/imdb.json'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// import DemoCarousel from './DemoCarousel'
const Carousel = require('react-responsive-carousel').Carousel

function HomePage() {
  const plotSizing = (title: string, plot: string) =>
    (title + plot).length < 51
      ? plot
      : plot
          .split('')
          .slice(0, 50 - title.length)
          .join('') + '...'

  return (
    // <DemoCarousel />
    <div aria-label="Main films">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        className="carousell"
      >
        <div className="slider_element">
          <img src={films[0].poster} alt={films[0].title} />
          <div
            className="slider_element_text"
            aria-label="Description of the moovie"
          >
            <h3>{films[0].title}</h3>
            <p>{plotSizing(films[0].title, films[0].plot)}</p>
          </div>
        </div>
        <div className="slider_element">
          <img src={films[1].poster} alt={films[1].title} />
          <div
            className="slider_element_text"
            aria-label="Description of the moovie"
          >
            <h3>{films[1].title}</h3>
            <p>{plotSizing(films[1].title, films[1].plot)}</p>
          </div>{' '}
        </div>
        <div className="slider_element">
          <img src={films[2].poster} alt={films[2].title} />
          <div
            className="slider_element_text"
            aria-label="Description of the moovie"
          >
            <h3>{films[2].title}</h3>
            <p>{plotSizing(films[2].title, films[2].plot)}</p>
          </div>{' '}
        </div>
      </Carousel>
    </div>
  )
}

export default HomePage

// import films from '../data/imdb.json'
import DemoCarousel from './DemoCarousel'
// const Carousel = require('react-responsive-carousel').Carousel

function HomePage() {
  return (
    <DemoCarousel />
    // <div className="carousel" aria-label="Main films">
    //   <Carousel
    //     showArrows={true}
    //     onChange={onChange}
    //     onClickItem={onClickItem}
    //     onClickThumb={onClickThumb}
    //   >
    //     <div className="slider_elemen">
    //       <img
    //         src={films[0].poster}
    //         alt={films[0].title}
    //         className="slider_im"
    //       />
    //       <p className="legend">{films[0].plot}</p>
    //     </div>
    //     <div className="slider_elemen">
    //       <img
    //         src={films[1].poster}
    //         alt={films[1].title}
    //         className="slider_im"
    //       />
    //       <p className="legend">{films[1].plot}</p>
    //     </div>
    //     <div className="slider_elemen">
    //       <img
    //         src={films[2].poster}
    //         alt={films[2].title}
    //         className="slider_im"
    //       />
    //       <p className="legend">{films[2].plot}</p>
    //     </div>
    //   </Carousel>
    // </div>
  )
}

export default HomePage

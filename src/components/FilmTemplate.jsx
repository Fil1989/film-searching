function FilmTemplate({ searchResults }) {
  console.log(searchResults)
  return (
    <>
      {searchResults.length !== 0 &&
        searchResults.map(film => (
          <li key={film.id}>
            <div
              className="film"
              style={{ backgroundImage: `url(${film.poster})` }}
              aria-label={film.title}
            >
              <span className="title">{film.title}</span>
            </div>
            <div className="info">
              <span>{film.genre} </span>
              <span>{film.director} </span>
              <span>{film.year}</span>
            </div>
          </li>
        ))}
    </>
  )
}

export default FilmTemplate

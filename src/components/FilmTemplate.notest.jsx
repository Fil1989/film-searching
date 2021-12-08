import { render } from '@testing-library/react'
import FilmTemplate from './FilmTemplate.tsx'

describe('FilmTemplate', () => {
  const results = [
    {
      id: 'tt2301451',
      title: 'Ozymandias',
      year: '2013',
      rated: 'TV-14',
      released: '15 Sep 2013',
      season: '5',
      episode: '14',
      runtime: '48 min',
      genre: 'Crime, Drama, Thriller',
      director: 'Rian Johnson',
      writer: 'Vince Gilligan (created by), Moira Walley-Beckett',
      actors: 'Bryan Cranston, Anna Gunn, Aaron Paul, Dean Norris',
      plot:
        'Walt goes on the run. Jesse is taken hostage. Marie convinces Skyler to tell Walter, Jr. the truth.',
      language: 'English',
      country: 'USA',
      awards: 'N/A',
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTU1MjEwNjQ4MF5BMl5BanBnXkFtZTgwNzI2MTU5NTM@._V1_SX300.jpg',
      ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '10.0/10',
        },
      ],
      metascore: 'N/A',
      imdbrating: '6.9',
      imdbvotes: '137214',
      imdbid: 'tt2301451',
      seriesid: 'tt0903747',
      type: 'episode',
      response: 'True',
    },
    {
      id: 'tt4283088',
      title: 'Battle of the Bastards',
      year: '2016',
      rated: 'TV-MA',
      released: '19 Jun 2016',
      season: '6',
      episode: '9',
      runtime: '60 min',
      genre: 'Action, Adventure, Drama, Fantasy',
      director: 'Miguel Sapochnik',
      writer:
        'George R.R. Martin (based on "A Song of Ice and Fire" by), David Benioff (created by), D.B. Weiss (created by), David Benioff (written for television by), D.B. Weiss (written for television by)',
      actors: 'Peter Dinklage, Kit Harington, Emilia Clarke, Liam Cunningham',
      plot:
        'Jon and Sansa face Ramsay Bolton on the fields of Winterfell. Daenerys strikes back at her enemies. Theon and Yara arrive in Meereen.',
      language: 'English',
      country: 'USA',
      awards: 'N/A',
      poster:
        'https://m.media-amazon.com/images/M/MV5BZDFiZTNiMmItMDk5ZC00OGZmLTk3NmItODM5ZWE2YWMzZjliXkEyXkFqcGdeQXVyOTMyOTQyNzA@._V1_SX300.jpg',
      ratings: [
        {
          Source: 'Internet Movie Database',
          Value: '9.9/10',
        },
      ],
      metascore: 'N/A',
      imdbrating: '9.9',
      imdbvotes: '194010',
      imdbid: 'tt4283088',
      seriesid: 'tt0944947',
      type: 'episode',
      response: 'True',
    },
  ]
  const { container } = render(<FilmTemplate searchResults={results} />)
  expect(container).toMatchSnapshot()
})

import { render, fireEvent } from '@testing-library/react'
import SearchForm /*, { sum }*/ from './SearchForm'
// import WrongWay from './WrongWay.tsx'
// import  from './SearchForm.tsx'

// describe('sum', () => {
//   it('2+2', () => {
//     expect(sum(2, 2)).toBe(4)
//   })
//   it('2+10', () => {
//     expect(sum(2, 10)).toBe(12)
//   })
//   it('20+10', () => {
//     expect(sum(20, 10)).toBe(30)
//   })
//   it('NaN check', () => {
//     expect(sum(20)).not.toBeNaN()
//     expect(sum()).not.toBeNaN()
//   })
// })
describe('SearchForm', () => {
  it('snapshot test', () => {
    const { container } = render(
      <SearchForm setResults={() => {}} setVisible={() => {}} />,
    )
    expect(container).toMatchSnapshot()
  })
  it('getByTestId test', () => {
    const { getByTestId } = render(
      <SearchForm setResults={() => {}} setVisible={() => {}} />,
    )
    expect(getByTestId('value').textContent).toBe('778')
  })
  it('search initializing test', () => {
    const Searching = jest.fn()
    const { getByTestId } = render(
      <SearchForm setResults={Searching} setVisible={() => {}} />,
    )
    getByTestId('searching_btn').click()
    getByTestId('searching_btn').click()
    getByTestId('searching_btn').click()
    expect(Searching).toBeCalled()
    expect(Searching).toBeCalledTimes(3)
  })
  it('intersection observer btn test', () => {
    const IntersectionBtn = jest.fn()
    const { getByTestId } = render(
      <SearchForm setResults={() => {}} setVisible={IntersectionBtn} />,
    )
    getByTestId('searching_btn').click()
    expect(IntersectionBtn).toBeCalled()
  })
  it('input correctness test', () => {
    const utils = render(
      <SearchForm setResults={() => {}} setVisible={() => {}} />,
    )
    const input = utils.getByTestId('search_field') as HTMLInputElement
    fireEvent.change(input, {
      target: { value: '23456' },
    })
    expect(input.value).toBe('23456')
  })
})

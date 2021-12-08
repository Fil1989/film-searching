import { render } from '@testing-library/react'
import SearchForm, { sum } from './SearchForm'
// import WrongWay from './WrongWay.tsx'
// import  from './SearchForm.tsx'

describe('sum', () => {
  it('2+2', () => {
    expect(sum(2, 2)).toBe(4)
  })
  it('2+10', () => {
    expect(sum(2, 10)).toBe(12)
  })
  it('20+10', () => {
    expect(sum(20, 10)).toBe(30)
  })
  it('NaN check', () => {
    expect(sum(20, NaN)).toBeFalsy()
  })
})
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
    expect(getByTestId('value').textContent).toBe('777')
  })
})

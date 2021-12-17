import { render } from '@testing-library/react'
import HomePage, { plotSizing } from './HomePage'

describe('Homepage component test', () => {
  it('Snapshot test', () => {
    const { container } = render(<HomePage />)
    expect(container).toMatchSnapshot()
  })
})
describe('Plot sizing function test', () => {
  it('not null test', () => {
    expect(plotSizing('World')).not.toBeNull()
    expect(plotSizing()).not.toBeNull()
  })
  it('title>50 symbols test', () => {
    expect(
      plotSizing(
        'Worldwide it is very popular. And who knows what will happen in future',
        'one world',
      ),
    ).toBe('title can not be loger then 50 symbols')
  })
})

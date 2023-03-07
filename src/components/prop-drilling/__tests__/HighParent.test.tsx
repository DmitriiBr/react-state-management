import { describe, expect, test } from 'vitest'
import { fireEvent, render } from '@testing-library/react'
import { HighParent } from '../HighParent'

describe('< HighParent />', () => {
  test('HighParent mounts correctly', () => {
    const wrapper = render(<HighParent />)
    expect(wrapper).toBeTruthy()

    const headerMessage = 'HighParent component rendered: '

    const h1 = wrapper.container.querySelector('h1')
    expect(h1?.textContent).toBe(headerMessage + String(1))

    const button = wrapper.getByTestId('count-button')
    fireEvent.click(button)

    expect(h1?.textContent).toBe(headerMessage + String(2))
  })
})

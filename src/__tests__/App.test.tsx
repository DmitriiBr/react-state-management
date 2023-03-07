import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { App } from '../App'

describe('< App />', () => {
  test('App mounts correctly', () => {
    const wrapper = render(<App />)
    expect(wrapper).toBeTruthy()
  })
})

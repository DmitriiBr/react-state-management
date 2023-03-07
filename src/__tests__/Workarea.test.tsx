import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { Workarea } from '../workarea/Workarea'

describe('< Workarea />', () => {
  test('Workarea mounts correctly', () => {
    const wrapper = render(<Workarea children={''} />)
    expect(wrapper).toBeTruthy()
  })
})

import { describe, expect, it, test } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useRenderCount } from '../utils/useRenderCount'

describe('useRenderCount', () => {
  it('Should count render correctly', () => {
    const message = 'Test message'
    const hook = renderHook(() => useRenderCount({ message }))

    expect(hook.result.current).toStrictEqual([1, 'Test message: 1'])
  })
})

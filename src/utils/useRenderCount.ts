import { useRef } from 'react'

interface useRenderCountParams {
  message?: string | undefined
}

export const useRenderCount = ({ message }: useRenderCountParams) => {
  const renderCount = useRef(0)
  renderCount.current++

  const customMessage = `${message}: ${renderCount.current}`

  return [renderCount.current, customMessage]
}

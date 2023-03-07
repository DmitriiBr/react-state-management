import { memo } from 'react'
import { useRenderCount } from '../../utils/useRenderCount'

interface ButtonProps {
  count: number
  onClick: () => void
}

export const Button = memo(({ count, onClick }: ButtonProps) => {
  const [_, message] = useRenderCount({
    message: 'Button component rendered',
  })

  return (
    <>
      <h1 className="text-2xl mb-5">{message}</h1>
      <button
        data-testid="count-button"
        onClick={onClick}
        className="rounded-lg border px-4 py-2 bg-slate-800 active:bg-slate-700 
          hover:bg-slate-600 border-slate-500 transition-all text-2xl w-full"
      >
        Count: {count}
      </button>
    </>
  )
})

Button.displayName = 'Button'

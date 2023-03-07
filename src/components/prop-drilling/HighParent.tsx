import { ChangeEvent, memo, useCallback, useState } from 'react'
import { useRenderCount } from '../../utils/useRenderCount'
import { FirstBranchComponent } from './FirstBranchComponent'
import { SecondBranchComponent } from './SecondBranchComponent'
import { TextInput } from './TextInput'

export const HighParent = memo(() => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const [_, message] = useRenderCount({
    message: 'HighParent component rendered',
  })

  const handleClick = useCallback(() => setCount((prev) => prev + 1), [count])

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => setValue(event.target.value),
    [value]
  )

  return (
    <div className="flex flex-col justify-between items-center border rounded-md px-4 py-2 border-slate-700 shadow-black shadow-md">
      <h1 className="text-2xl mb-5">{message}</h1>
      <FirstBranchComponent
        count={count}
        onClick={handleClick}
      />
      <SecondBranchComponent
        value={value}
        onChange={handleChange}
      />
    </div>
  )
})

HighParent.displayName = 'HighParent'

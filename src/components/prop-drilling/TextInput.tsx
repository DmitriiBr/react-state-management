import { ChangeEvent, memo, useRef } from 'react'
import { useRenderCount } from '../../utils/useRenderCount'

interface TextInputProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const TextInput = memo(({ value, onChange }: TextInputProps) => {
  const [_, message] = useRenderCount({
    message: 'TextInput component rendered',
  })

  return (
    <>
      <h1 className="text-2xl mb-5">{message}</h1>
      <input
        className="rounded-lg border px-4 py-2 bg-slate-800 transition-all text-2xl outline-none w-full border-gray-700 text-white"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="type here"
      />
    </>
  )
})

TextInput.displayName = 'TextInput'

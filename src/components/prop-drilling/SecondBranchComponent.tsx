import { ChangeEvent, memo, ReactNode } from 'react'
import { TextInput } from './TextInput'

interface SecondBranchComponentProps {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const SecondBranchComponent = memo(
  ({ value, onChange }: SecondBranchComponentProps) => {
    return (
      <div
        className="flex flex-col justify-between items-center border 
      rounded-md px-2 py-2 w-full border-slate-700 shadow-md shadow-black"
      >
        <TextInput
          value={value}
          onChange={onChange}
        />
      </div>
    )
  }
)

SecondBranchComponent.displayName = 'SecondBranchComponent'

import { memo } from 'react'
import { Button } from './Button'

interface FirstBranchComponentProps {
  count: number
  onClick: () => void
}

export const FirstBranchComponent = memo(
  ({ count, onClick }: FirstBranchComponentProps) => {
    return (
      <div className="flex flex-col justify-between items-center border rounded-md px-2 py-2 mb-5 w-full border-slate-700 shadow-md shadow-black">
        <Button
          count={count}
          onClick={onClick}
        />
      </div>
    )
  }
)

FirstBranchComponent.displayName = 'FirstBranchComponent'

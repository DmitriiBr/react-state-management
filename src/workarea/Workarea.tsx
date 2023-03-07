import { memo, ReactNode } from 'react'

interface WorkareaProps {
  children: ReactNode
}

const FONT_FAMILY = 'font-mono'
const MAIN_BG_COLOR = 'bg-gray-900'
const MAIN_TEXT_COLOR = 'text-gray-400'

export const Workarea = memo(({ children }: WorkareaProps) => {
  return (
    <div
      className={`flex items-center h-screen w-screen justify-center 
        ${MAIN_BG_COLOR} ${MAIN_TEXT_COLOR} ${FONT_FAMILY}`}
    >
      {children}
    </div>
  )
})

Workarea.displayName = 'Workarea'

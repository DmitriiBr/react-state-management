import { memo } from 'react'
import { Workarea } from './workarea/Workarea'
import { HighParent } from './components/prop-drilling/HighParent'

export const App = memo(() => {
  return (
    <Workarea>
      <HighParent />
    </Workarea>
  )
})

App.displayName = 'App'

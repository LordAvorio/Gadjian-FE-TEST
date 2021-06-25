import React from 'react'

import Navigation from './components/Navigation/NavigationBar'
import ListPersonalPage from './pages/PersonalPage/ListPersonalPage'

export default function App() {
  return (
    <div>
      <Navigation/>
      <ListPersonalPage/>
    </div>
  )
}

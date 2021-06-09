import { Header } from './components/header'
import React from 'react'
import { RoomSearch } from './components/roomSearch'

function App() {
  return (
    <div className="h-full grid sm:col-span-1 justify-center content-center space-y-16">
      <Header />
      <RoomSearch />
    </div>
  )
}

export default App

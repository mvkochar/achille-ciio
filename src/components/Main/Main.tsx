import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Communities, Home, OpenHouses, QuickMove } from '../../pages'

const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='communities'
        element={<Communities />}
      />
      <Route
        path='quick-move'
        element={<QuickMove/>}
      />
      <Route
        path='open-houses'
        element={<OpenHouses/>}
      />
    </Routes>
  )
}

export default Main
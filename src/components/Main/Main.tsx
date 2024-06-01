import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Communities, Home, QuickMove } from '../../pages'

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
    </Routes>
  )
}

export default Main
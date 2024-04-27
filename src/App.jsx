import React, { useState } from 'react'
import HomePage from './pages/HomePage'
import VideoPage from './pages/VideoPage'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout'
const App = () => {
  
  const [sideBar,setSideBar]=useState(true);
  return (
<BrowserRouter>
      <Routes>
        <Route path="/youtube" element={<Layout setSideBar={setSideBar}/>}>
          <Route index path="/youtube/" element={<HomePage sideBar={sideBar} />} />
          <Route path="/youtube/:tittle" element={<VideoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import './index.css'
import App from './App.jsx'
import Layout from './pages/Layout.jsx';
import CreateMember from './pages/CreateMember.jsx';
import Gallery from './pages/Gallery.jsx';
import DetailView from './pages/DetailView.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index={true} element={<App/>} />
          <Route path='/create' element={<CreateMember/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/crewDetails/:memberID' element={<DetailView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

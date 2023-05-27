import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home  from './pages/Home'
import Enterprise from './pages/Enterprise'
import Individual from './pages/Individual'
import Teams from './pages/Teams'


const Router = () => {
  return (
    <Routes>
         <Route path='/'  element={<Home/>}/>
         <Route path='/enterprise'  element={<Enterprise/>}  />
         <Route path='/individual'  element={<Individual/>}  />
         <Route path='/teams'  element={<Teams/>}  />
         <Route path='*'  element={<Error/>}  />


    </Routes>
      
 
  )
}

export default Router

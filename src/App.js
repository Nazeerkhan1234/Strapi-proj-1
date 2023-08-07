import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {routes} from './routes/Routes'
import Layout from './components/Layout';


function App() {
  return (
    <BrowserRouter>
    <Routes>
       <Route path="/" element={<Layout/>}>
       {
            routes.map((current,index)=>{
                return <Route key={index} path={current.path} element={current.Element}/>
            })
        }
       </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
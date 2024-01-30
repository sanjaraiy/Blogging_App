import { useState, useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {login, logout} from "./store/authSlice"
import { Outlet } from 'react-router-dom'
import {Header,Footer} from './components/index'
function App() {
  // // console.log(process.env.REACT_APP_APPWRITE_URL);
  // console.log(import.meta.env.VITE_APPWRITE_URL);
 
  const [loading, setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])

  return ! loading ? (<div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
     <div className='w-full block'>
        <Header></Header>
        <main>
           {/* <Outlet></Outlet> */}
        </main>
        <Footer></Footer>
     </div>
  </div>) : null

 



}

export default App

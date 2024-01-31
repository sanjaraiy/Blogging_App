import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import store from './store/store.js'
import {Router, RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/pages/Home.jsx'
import { AuthLayout, Login, Signup } from './components/index.js'
import AllPosts from './components/pages/AllPosts.jsx'
import EditPost from './components/pages/EditPost.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children:[
      {
        path:'/',
        element:<Home></Home>,

      },
      {
        path:'/login',
        element:(
          <AuthLayout  authentication={false}>
            <Login></Login>
          </AuthLayout>
        )
      },
      {
        path:'/signup',
        element:(
          <AuthLayout authentication={false}>
            <Signup></Signup>
          </AuthLayout>
        )
      },
      {
        path:'/all-posts',
        element:(
          <AuthLayout authentication>
            {" "}
            <AllPosts></AllPosts>
          </AuthLayout>
        )
      },
        {
          path:'/add-post',
          element:(
            <AuthLayout authentication>
              {" "}
              <AddPost></AddPost>
            </AuthLayout>
          )
        },
        {
          path:'/edit-post/:slug',
          element:(
            <AuthLayout authentication>
              {" "}
              <EditPost></EditPost>
            </AuthLayout>
          )
        },
        {
          path:'/post/:slug',
          element:<Post></Post>
           
        },
      
    ],
   
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)

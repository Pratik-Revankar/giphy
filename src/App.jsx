import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './layouts/AppLayout'
import Category from './pages/Category'
import GifPage from './pages/GifPage'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import Search from './pages/Search'

const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/:category',
        element:<Category/>,
      },
      {
        path:'/search/:query',
        element:<Search/>,
      },
      {
        path:'/:type/:slug',
        element:<GifPage/>,
      },
      {
        path:'/favorites',
        element:<Favorites/>,
      },
      
    ]
  }
])


function App() {
  
  return <RouterProvider router={router}/>

  
}

export default App

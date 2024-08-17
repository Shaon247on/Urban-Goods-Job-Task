import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import ContextProvider from './Provider/ContextProvider';
import Products from './Pages/Products/Products';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';


const queryClient = new QueryClient()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextProvider>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      </QueryClientProvider>
    </ContextProvider>
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home/Home.jsx';
import Product from './pages/Product/Product.jsx';
import Products from './pages/Products/Prosucts.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
// Create a client
// Create a client
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
  children: [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/products/:id',
      element: <Products />,
    },
    {
      path : '/product/:id',
      element: <Product />,
      loader: ({ params }) => fetch(params.id),
    }
  ]
  
  }
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

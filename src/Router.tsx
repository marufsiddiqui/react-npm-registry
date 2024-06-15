import { createBrowserRouter } from 'react-router-dom'

import { DetailsPage } from './pages/DetailsPage'
import { HomePage } from './pages/HomePage'
import { Root } from './pages/Root'
import { SearchPage } from './pages/SearchPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/search',
        element: <SearchPage />,
      },
      {
        path: '/package/:name',
        element: <DetailsPage />,
      },
    ],
  },
])

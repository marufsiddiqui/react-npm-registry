import { createBrowserRouter } from 'react-router-dom'

import { DetailsPage } from '@pages/DetailsPage'
import { HomePage } from '@pages/HomePage'
import { Root } from '@pages/Root'
import { searchLoader } from '@pages/search/searchLoader'
import { SearchPage } from '@pages/search/SearchPage'

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
        loader: searchLoader,
      },
      {
        path: '/package/:name',
        element: <DetailsPage />,
      },
    ],
  },
])

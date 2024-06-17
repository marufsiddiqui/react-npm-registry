import { useLoaderData } from 'react-router-dom'

import { SearchLoaderData } from '@pages/search/searchLoader'

export function SearchPage() {
  const data = useLoaderData() as SearchLoaderData

  return (
    <div>
      <h1>Search Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

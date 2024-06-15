import { useLoaderData } from 'react-router-dom'

export function SearchPage() {
  const data = useLoaderData()
  return (
    <div>
      <h1>Search Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

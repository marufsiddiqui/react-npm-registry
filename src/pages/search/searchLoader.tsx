import { LoaderFunctionArgs } from 'react-router-dom'

import { searchPackages } from '@api/queries/searchPackages'

export async function searchLoader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url)
  const term = url.searchParams.get('term')
  if (!term) {
    throw new Error('Missing search term')
  }

  // const searchResults = ['hello', 'world']
  const searchResults = await searchPackages(term)

  return {
    searchResults,
  }
}

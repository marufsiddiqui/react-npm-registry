import { Link } from 'react-router-dom'

import { SearchInput } from './SearchInput'

export function Header() {
  return (
    <div>
      <Link to="/">Home</Link>
      <SearchInput />
    </div>
  )
}

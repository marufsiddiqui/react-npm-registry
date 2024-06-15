import { FormEvent } from 'react'
import { VscSearch } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom'

export function SearchInput() {
  const navigate = useNavigate()
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.target as HTMLFormElement
    const term = form.term.value
    event.preventDefault()

    if (term) {
      navigate(`/search?term=${term}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          name="term"
          type="text"
          className="pl-10 py-2 w-full border-0 shadow-none"
          placeholder="Search packages"
        />
      </div>
    </form>
  )
}

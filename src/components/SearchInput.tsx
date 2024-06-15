import { FormEvent } from 'react'
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
      <input name="term" type="text" />
    </form>
  )
}

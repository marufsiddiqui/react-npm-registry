import { VscSearch } from 'react-icons/vsc'
import { Form } from 'react-router-dom'

export function SearchInput2() {
  return (
    <Form action="/search">
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
    </Form>
  )
}

import { Icon } from "@iconify/react"

const SearchInput = (props) => {
  const { onSearch, placeholder } = props

  return (
    <div className="w-full lg:px-16 my-10">
      <div className="relative">
        <input placeholder={placeholder} onChange={onSearch} className="border-2 border-slate-300 rounded-lg py-2 px-3 w-full outline-none" />
        <Icon icon="material-symbols:search" width={30} className="absolute right-3 text-slate-300 top-2" />
      </div>
    </div>
  )
}

export default SearchInput
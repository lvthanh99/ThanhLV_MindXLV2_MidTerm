import { Input } from 'antd'

function Menu({ search, onSearch }) {
  return (
    <header className="mx-auto flex w-full max-w-[1340px] items-center justify-between gap-6">
      <button className="brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Anonime</button>
      <nav className="hidden items-center gap-24 text-[15px] text-white/45 md:flex">
        <button className="nav-link">Home</button>
        <button className="nav-link">List anime</button>
      </nav>
      <Input
        allowClear
        value={search}
        onChange={(event) => onSearch(event.target.value)}
        placeholder="Search anime or movie"
        className="search-box"
      />
    </header>
  )
}

export default Menu

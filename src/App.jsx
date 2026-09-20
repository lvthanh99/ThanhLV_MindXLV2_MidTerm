import { useState } from 'react'
import { ConfigProvider } from 'antd'
import { moviesData } from './data/movies'
import Banner from './components/Banner'
import Menu from './components/Menu'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  const [search, setSearch] = useState('')
  const [selectedMovie, setSelectedMovie] = useState(moviesData.data[0])
  const filteredMovies = moviesData.data.filter((movie) => movie.movieName.toLowerCase().includes(search.toLowerCase()))
  const displayedMovies = filteredMovies.filter((movie) => movie.id !== selectedMovie.id)

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#e7e7e7', borderRadius: 24 } }}>
      <main className="app-shell h-[100dvh] max-h-[100dvh] w-full overflow-hidden bg-[#171e24] px-5 py-4 text-white sm:px-10 sm:py-5">
        <Menu search={search} onSearch={setSearch} />
        <Banner movie={selectedMovie} />
        <MovieList movies={displayedMovies} onSelect={setSelectedMovie} />
      </main>
    </ConfigProvider>
  )
}

export default App

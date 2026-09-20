function MovieList({ movies, onSelect }) {
  return (
    <section className="mx-auto w-full max-w-[1340px]">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[26px] font-bold tracking-tight">New Release</h2>
      </div>
      <div className="release-grid">
        {movies.map((movie) => (
          <button key={movie.id} className="release-card group" onClick={() => onSelect(movie)}>
            <div className="poster-wrap">
              <img src={movie.image} alt={movie.movieName} className="poster" />
              <span className="episode">Episode {movie.episode}</span>
            </div>
            <span className="release-title">{movie.movieName}</span>
          </button>
        ))}
      </div>
    </section>
  )
}

export default MovieList

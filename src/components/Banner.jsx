function Banner({ movie }) {
  return (
    <section className="mx-auto w-full max-w-[1340px]">
      <h1 className="mb-3 text-[25px] font-bold tracking-tight">Explore</h1>
      <p className="mb-5 text-[17px] text-white/50">
        What are you gonna watch today ?
      </p>
      <div className="hero-banner group relative overflow-hidden rounded-[9px]">
        <img
          src={movie.image}
          alt={movie.movieName}
          className="h-[307px] w-full object-cover transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101820]/95 via-[#101820]/20 to-transparent" />
        <div className="absolute bottom-8 left-9 max-w-[460px] sm:left-10">
          <h2 className="mb-4 text-[27px] font-bold">{movie.movieName}</h2>
          <p className="text-[13px] leading-5 text-white/85">
            {movie.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Banner;

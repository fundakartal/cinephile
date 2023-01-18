import Link from 'next/link';
import Image from 'next/image';

const MoviesSection = ({ title, movies }) => (
  <div className="mt-9">
    <h3 className="mb-3 uppercase text-2xl -tracking-[1px]">{title}</h3>
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(180px,_1fr))] auto-rows-[320px] gap-6">
      {movies.map((movie) => (
        <div className="overflow-hidden rounded-lg relative shadow-md transform duration-300 ease-in-out hover:z-10 hover:scale-125" key={movie.id}>
          <Link href={`/movie/${movie.id}`}>
            <Image
              fill
              unoptimized
              alt={movie.title}
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
          </Link>
        </div>
      ))}
    </div>
  </div>
);

export { MoviesSection };

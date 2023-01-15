/* eslint-disable camelcase */
import Link from 'next/link';
import Image from 'next/image';
import { FaPlus } from 'react-icons/fa';

const FeaturedMovie = ({ movie = {}, isCompact = true }) => {
  const { poster_path, title, overview } = movie;

  return (
    <div className="flex flex-col gap-6 my-[56px]">
      <h1 className="text-7xl uppercase -tracking-[1px] font-black leading-[72px] max-w-[25ch]">{title}</h1>
      <p
        className={`text-2xl max-w-[50ch] ${
          isCompact ? 'shortOverview' : ''
        }`}
      >
        {overview}
      </p>
      <div className="flex gap-3">
        <Link className="flex items-center justify-center bg-[#eee] text-[#222] w-[300px] rounded-full text-xl font-bold" href={`/movie/${movie.id}`}>
          Play
        </Link>
        <button type="button" className="flex items-center justify-center border-2 border-solid border-[#eee] rounded-full w-[62px] h-[62px] text-[#eee]">
          <FaPlus />
        </button>
      </div>
      <div className="moviePoster">
        <div className="moviePosterOverlay absolute inset-0 -z-[1]" />
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;

import { Categories, FeaturedMovie, MoviesSection } from 'components';
import { Genres, Movies } from 'mocks';

const HomeContainer = () => (
  <div>
    <FeaturedMovie movie={Movies.results[0]} />
    <Categories categories={Genres.genres.slice(0, 5)} />
    <MoviesSection title="popular films" movies={Movies.results.slice(1, 7)} />
    <MoviesSection title="your favorites" movies={Movies.results.slice(7, 13)} />

  </div>
);
export default HomeContainer;

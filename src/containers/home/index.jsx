import { Categories, FeaturedMovie } from 'components';
import Movies from 'mocks/movies.json';
import Genres from 'mocks/genres.json';

const HomeContainer = () => (
  <div>
    <FeaturedMovie movie={Movies.results[0]} />
    <Categories categories={Genres.genres.slice(0, 5)} />
  </div>
);
export default HomeContainer;

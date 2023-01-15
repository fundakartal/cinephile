import { FeaturedMovie } from 'components';
import Movies from 'mocks/movies.json';

const HomeContainer = () => (
  <FeaturedMovie movie={Movies.results[0]} />
);
export default HomeContainer;

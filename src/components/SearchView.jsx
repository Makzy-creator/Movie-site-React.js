import { Link, useParams } from "react-router-dom";
import Hero from "./Hero";
import { useEffect } from "react";

const MovieCard = ({ movie }) => {
  //todo: deal with a possible missing image, movie and activate the search button on click
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
      <img
        src={posterUrl}
        className="card-img-top"
        alt={movie.original_title}
      />
      <div className="card-body">
        <h5 className="card-title">{movie.original_title}</h5>
        <Link to={detailUrl} className="btn btn-primary">
          Show details
        </Link>
      </div>
    </div>
    </div>
    
  );
};

const SearchView = () => {
  const {keyword} = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const title = keyword === "" | !keyword ? "Search" : `You are searching for ${keyword}`;

  const resultsHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />;
  });

  useEffect(()=>{
    window.scrollTo(0, 0);
    if (keyword & keyword.trim() != "") {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=b626e628db7e94289871b49522ad858b&language=en-US&query=${keyword}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        });
    }
  },[keyword])

  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
        <div className="container">
          <div className="row">
              {resultsHtml}
          </div>
        </div>
      }
    </>
  );
};

export default SearchView;

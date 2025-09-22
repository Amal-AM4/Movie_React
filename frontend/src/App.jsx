import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {

  const movieNo = 2;

  return (
    <>

      { movieNo === 1 ? (
        <MovieCard movie={{ title: "Cid moosa", release_data: "2001" }}/>
      ) : (
        <MovieCard movie={{ title: "Lokha", release_data: "2010" }}/>
      ) }

      
      
    </>
  );
}


export default App;

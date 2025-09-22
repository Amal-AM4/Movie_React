import React, { useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "The Shawshank Redemption", release_date: "1994-09-23" },
    { id: 2, title: "The Godfather", release_date: "1972-03-24" },
    { id: 3, title: "The Dark Knight", release_date: "2008-07-18" },
    { id: 4, title: "Pulp Fiction", release_date: "1994-10-14" },
    { id: 5, title: "Forrest Gump", release_date: "1994-07-06" },
    { id: 6, title: "Inception", release_date: "2010-07-16" },
    { id: 7, title: "The Matrix", release_date: "1999-03-31" },
    { id: 8, title: "Goodfellas", release_date: "1990-09-19" },
    { id: 9, title: "Fight Club", release_date: "1999-10-15" },
    {
      id: 10,
      title: "The Lord of the Rings: The Fellowship of the Ring",
      release_date: "2001-12-19",
    },
    {
      id: 11,
      title: "Star Wars: Episode IV - A New Hope",
      release_date: "1977-05-25",
    },
    { id: 12, title: "Léon: The Professional", release_date: "1994-09-14" },
    { id: 13, title: "Interstellar", release_date: "2014-11-07" },
    { id: 14, title: "Gladiator", release_date: "2000-05-05" },
    { id: 15, title: "Whiplash", release_date: "2014-10-10" },
    { id: 16, title: "The Silence of the Lambs", release_date: "1991-02-14" },
    { id: 17, title: "Se7en", release_date: "1995-09-22" },
    { id: 18, title: "Parasite", release_date: "2019-05-30" },
    { id: 19, title: "The Green Mile", release_date: "1999-12-10" },
    { id: 20, title: "Spirited Away", release_date: "2001-07-20" },
    { id: 21, title: "City of God", release_date: "2002-08-30" },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);

    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={movie} key={movie.id}></MovieCard>
            )
        )}
      </div>
    </div>
  );
}

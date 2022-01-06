import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
function Movie(props) {
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const movieResponse = await fetch('http://localhost:3000/movieData.json');
    setMovies(await movieResponse.json());
  };
  useEffect(() => {
    getMovie();
  }, []);
  movies.filter((val) => {
    if (props.query === "") {
      return val;
    } else if (
      val.Title.includes(props.query)
    ) {
      return val;
    }
  })
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>BoxOffice</th>
            <th>imdbRating</th>
            <th>Poster</th>
          </tr>
        </thead>
        {movies.map((e, idx) => {
          return (
            <>
              <tbody key={idx}>
                <tr>
                  <td>{e.Title}</td>
                  <td>{e.Year}</td>
                  <td>{e.BoxOffice}</td>
                  <td>{e.imdbRating}</td>
                  <td id="imghide">
                    <img src={e.Poster} alt="" />
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
}

function App() {
  return (
    
    <div className="App">
      <div className="movieContainer">
        <Navbar title="Movie-App" about="About" query={""}/>
        <Movie/>
      </div>
    </div>
    
  );
}

export default App;

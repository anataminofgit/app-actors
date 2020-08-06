import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorGalary from './View/ActorsGalary';
import MovieGalary from './View/MovieGalary';


function App() {

  const actorsArr = [{
    fname: "Werner",
    lname: "Herzog",
    birthday: "19401203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BNzQ4Njc3MTQ0NF5BMl5BanBnXkFtZTcwMTg4NzY5Mg@@._V1_UY317_CR4,0,214,317_AL_.jpg",
    linkIMDB: "https://www.imdb.com/name/nm0001348"
  }, {
    fname: "Michael",
    lname: "Douglas",
    birthday: "19601203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_UY317_CR13,0,214,317_AL_.jpg",
    linkIMDB: "https://www.imdb.com/name/nm0000140"

  }, {
    fname: "Barbara",
    lname: "Hershey",
    birthday: "19701203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTMwNzQ1NjU1N15BMl5BanBnXkFtZTcwNjYzMTkwNA@@._V1_UX214_CR0,0,214,317_AL_.jpg",
    linkIMDB: "https://www.imdb.com/name/nm0001347"
  }]


  const [selectedActor, SetSelectedActor] = React.useState(null);
  const updateSelectedActor = (actor) => {

    SetSelectedActor(actor);
  }

  return (
    <div >
      My App
      <ActorGalary className="actor-galary" actors={actorsArr} funcActorMovies={updateSelectedActor} />
      <MovieGalary className="movie-galery" selectedActor={selectedActor} />
    </div>

  );
}

export default App;

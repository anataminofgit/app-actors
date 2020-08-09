import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorGalary from './View/ActorsGalary';
import MovieGalary from './View/MovieGalary';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './View/HomePage';
import { Navbar, Nav } from 'react-bootstrap';


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
    fname: "Jim",
    lname: "Carrey",
    birthday: "19601203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTQwMjAwNzI0M15BMl5BanBnXkFtZTcwOTY1MTMyOQ@@._V1_UY317_CR22,0,214,317_AL_.jpg",
    linkIMDB: "https://www.imdb.com/name/nm0000120"

  }, {
    fname: "Phoebe",
    lname: "Cates",
    birthday: "19601203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTc4NjA1NDI4NF5BMl5BanBnXkFtZTcwMzIwNjQzMg@@._V1_.jpg",
    linkIMDB: "https://www.imdb.com/name/nm0000121"

  }, {
    fname: "Geena",
    lname: "Davis",
    birthday: "19601203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BOWU5MGMzMWYtYWQ1Ny00Njk0LTg3NTctZDgxOGUyNDhjNDJhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UX214_CR0,0,214,317_AL_.jpg",
    linkIMDB: "https://www.imdb.com/name/nm0000133"

  }, {
    fname: "Barbara",
    lname: "Hershey",
    birthday: "19701203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTMwNzQ1NjU1N15BMl5BanBnXkFtZTcwNjYzMTkwNA@@._V1_UX214_CR0,0,214,317_AL_.jpg",
    linkIMDB: "https://www.imdb.com/name/nm0001347"
  }]


  //const [selectedActor, SetSelectedActor] = React.useState(null);
  const updateSelectedActor = (actor) => {

    // SetSelectedActor(actor);
  }

  return (
    <div >
      <Navbar bg="primary" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#actors">Actors</Nav.Link>
        </Nav>
      </Navbar>


      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>

          <Route exact path="/actors">
            <ActorGalary className="actor-galary" actors={actorsArr} funcActorMovies={updateSelectedActor} />
          </Route>
          <Route exact path="/actor/:actorName/movies">
          {/* selectedActor={selectedActor}  */}
            <MovieGalary className="movie-galery" />
          </Route>
        </Switch>
      </HashRouter>
      {/* <MovieGalary className="movie-galery" selectedActor={selectedActor} /> */}
    </div>

  );
}

export default App;

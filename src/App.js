import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ActorGalary from './View/ActorsGalary';


function App() {

  const actorsArr = [{
    fname: "Barbara",
    lname: "Hershey",
    birthday: "19701203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTMwNzQ1NjU1N15BMl5BanBnXkFtZTcwNjYzMTkwNA@@._V1_UX214_CR0,0,214,317_AL_.jpg", 
    linkIMDB : "https://www.imdb.com/name/nm0001347"
  }, {
    fname: "Michael",
    lname: "Douglas",
    birthday: "19601203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTQ3NzMzOTQ3MF5BMl5BanBnXkFtZTcwOTE0MzY1Mw@@._V1_UY317_CR13,0,214,317_AL_.jpg", 
    linkIMDB : "https://www.imdb.com/name/nm0000140"

   }, {
    fname: "Barbara",
    lname: "Hershey",
    birthday: "19701203",
    imgUrl: "https://m.media-amazon.com/images/M/MV5BMTMwNzQ1NjU1N15BMl5BanBnXkFtZTcwNjYzMTkwNA@@._V1_UX214_CR0,0,214,317_AL_.jpg", 
    linkIMDB : "https://www.imdb.com/name/nm0001347"
  }]

return (
  <div >
    My App
    <ActorGalary actors={actorsArr}/>
  </div>
);
}

export default App;

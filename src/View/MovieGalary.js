import React from 'react';
//import PropTypes from 'prop-types';
import MovieItem from '../Components/MovieItem';
import { Accordion, Container } from 'react-bootstrap';
import axios from "axios";

const MovieGalary = (props) => {
    const { selectedActor } = props;
    console.log("actorid", selectedActor);
    //const myKey="f2c3826ee383453d2c36916462ff0bb4"
    const [movieList, setMovieList] = React.useState([]);
    React.useEffect(() => {
        const url = `https://api.themoviedb.org/3/search/person?api_key=f2c3826ee383453d2c36916462ff0bb4&language=en-US&query=${selectedActor}&page=1&include_adult=false`
        if (selectedActor)
            axios.get(url).then(response => {
                console.log(response);
                const list = response.data.results[0].known_for.map(movie => {
                    return {
                        id: movie.id,
                        title: movie.title,
                        releaseDate: movie.release_date,
                        overview: movie.overview,
                        posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                        voteAv: movie.vote_average
                    }

                })
                setMovieList(list)
            })

            else
            setMovieList([]);

    }, [selectedActor]);


    return (
        <div>
            <Container>
                <Accordion className="movie-list" >
                    {movieList.map((item, index) => <MovieItem key={item.id} data={item} eventKey={item.id} />)}
                </Accordion>
            </Container>



        </div>
    );
};


MovieGalary.propTypes = {

};


export default MovieGalary;

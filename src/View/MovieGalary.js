import React from 'react';
//import PropTypes from 'prop-types';
import MovieItem from '../Components/MovieItem';
import { Accordion, Container } from 'react-bootstrap';


const MovieGalary = (props) => {
    const {selectedActor} =props;
    console.log("actorid", selectedActor);

    return (
        <div>
            <Container>
                <Accordion defaultActiveKey="0">
                    <MovieItem actorID  eventKey={1} />
                    <MovieItem eventKey={2} />
                    <MovieItem eventKey={3} />
                    <MovieItem eventKey={4} />
                    <MovieItem eventKey={5} />
                </Accordion>
            </Container>



        </div>
    );
};


MovieGalary.propTypes = {

};


export default MovieGalary;

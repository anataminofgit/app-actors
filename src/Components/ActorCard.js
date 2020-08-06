import React from "react"
import Card from 'react-bootstrap/Card'
import "./ActorCard.css"
import { Button } from "react-bootstrap";


const ActorCard = (props) => {
    const { fname, lname, imgUrl, linkIMDB, age, actorID, funcOnMovieClick } = props;


    // const birthDate = Date(birthday).toDateString(birthday);
    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>
                        <a href={linkIMDB}>{`${fname} ${lname}`}</a>
                    </Card.Title>
                    <Card.Text>
                        <Button onClick={()=>{funcOnMovieClick(actorID)}}> {`the movies`}</Button>
                   </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Age: {age}</small>
                </Card.Footer>
            </Card>
        </div>
    )
};
export default ActorCard;
import React from "react"
import Card from 'react-bootstrap/Card'
import "./ActorCard.css"
import { Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";


const ActorCard = (props) => {
    const { fname, lname, imgUrl, linkIMDB, age, actorID } = props;
    const [selectedActor, setSelectedActor] = React.useState("");



    const onMovieClick = (actor) => {
        setSelectedActor(actor);

    }

    // const birthDate = Date(birthday).toDateString(birthday);

    if (selectedActor!==""){
        const redirectPath = `/actor/${selectedActor}/movies`  ; 
        return <Redirect to={redirectPath}/>
    }

    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>
                        <a href={linkIMDB}>{`${fname} ${lname}`}</a>
                    </Card.Title>
                    <Card.Text>
                        <Button onClick={() => { onMovieClick(actorID) }}> {`the movies`}</Button>
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
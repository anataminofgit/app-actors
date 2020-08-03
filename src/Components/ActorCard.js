import React from "react"
import Card from 'react-bootstrap/Card'
import "./ActorCard.css"


const ActorCard = (props) => {
    const { fname, lname, birthday, imgUrl, linkIMDB , age} = props;

    return (
        <div>
            <Card className="card">
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>
                        <a href={linkIMDB}>{`${fname} ${lname}`}</a>
                    </Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This card has even longer content than the first to
                        show that equal height action.
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
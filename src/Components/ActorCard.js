import React from "react"
import Card from 'react-bootstrap/Card'
import "./ActorCard.css"


const ActorCard = (props) => {
    const { fname, lname, birthday, imgUrl, linkIMDB , age} = props;


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
                        {fname} {lname} was born on {birthday}
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
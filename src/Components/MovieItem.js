import React from 'react';
import { Button, Accordion, Card } from 'react-bootstrap';

const MovieItem = (props) => {

    const { eventKey } = props;
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
                    Click me!
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>

    );
}

export default MovieItem;

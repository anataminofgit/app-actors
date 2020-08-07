import React from 'react';
import { Button, Accordion, Card, Row, Col } from 'react-bootstrap';

const MovieItem = (props) => {

    const { eventKey, data } = props;
    const { id, title, releaseDate, overview, posterUrl, voteAv } = data;

    return (
        <Card style={{ width: '100%' }} >
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
                    {title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    <Row>
                        <Col>
                            <img src={posterUrl} alt="img" />
                        </Col>
                        <Col>
                            <h4>released on {releaseDate}</h4>
                            <h5>overview</h5>
                            <p>{overview}</p>
                        </Col>
                    </Row>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default MovieItem;

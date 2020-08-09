import React from 'react';
import { Button, Accordion, Card, Row, Col, Container } from 'react-bootstrap';

const MovieItem = (props) => {

    const { eventKey, data } = props;
    const { title, releaseDate, overview, posterUrl } = data;
    return (
        <Card style={{ width: '100%' }} >
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={eventKey}>
                    {title}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={eventKey}>
                <Card.Body>
                    <Container>
                        <Row>
                            <Col md={6}>
                                <img style={{ width: "100%" }} src={posterUrl} alt="img" />
                            </Col>
                            <Col md={6}>
                                <h4>Released: {releaseDate}</h4>
                                <h4>Overview</h4>
                                <p>{overview}</p>
                            </Col>
                        </Row>
                    </Container>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
}

export default MovieItem;

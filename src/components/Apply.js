import React from 'react'
import { Button, Card, CardGroup, 
    Col, 
    Container, Form, FormGroup, FormLabel, Row } from 'react-bootstrap'
import { 
    Link
 } from 'react-router-dom'
import logo from './logo.png';

export const Apply = () => {
    return (
        <Container>
            <Row>
                <Col></Col>
                <Col>
                <Card style={{ 
                width:'25rem'
                }}>
            <Card.Img src={logo} />
                <Card.Body>
                    <Card.Title>Become a web developer</Card.Title>
                    <Card.Text>
                        Learn React and become a web developer
                        in 6 months.
                    </Card.Text>
                </Card.Body>
                <Card.Body 
                className="mb-3"
                style={{
                    textAlign:'center'
                }}>
                <Link to="/apply">
                        <Button size="lg">Apply Now</Button>
                    </Link>
                </Card.Body>
            </Card>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}

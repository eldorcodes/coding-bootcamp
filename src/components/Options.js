import React, { useState } from 'react'
import { Card, Container,
    FormGroup, Form, FormLabel, Button, Col, Row
 } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Options = () => {
    const [group, setGroup] = useState(false)
    const [individual, setIndividual] = useState(false)
    return (
        <Container style={{
            textAlign:'center'
        }}>
        <Card 
        style={{
            padding:10,
            marginTop:20
        }}>

            <Card.Body>
                <Card.Body>
                        <Card.Title>Choose your option</Card.Title>
                    </Card.Body>
                <Row>
                <Col>
                <Card>
                    <Card.Body 
                    style={group ? {backgroundColor:'blue',color:'#fff',cursor:'pointer'} : {backgroundColor:'',cursor:'pointer'}}
                    onClick={() => {
                        setGroup(true)
                        setIndividual(false)
                    }}>
                        <Card.Title>Group</Card.Title>
                        <Card.Text>$1000 / month</Card.Text>
                        <Card.Text>6 months</Card.Text>
                        <Card.Text>3 days a week</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card>
                    <Card.Body 
                    style={individual ? {backgroundColor:'blue',color:'#fff',cursor:'pointer'}:{backgroundColor:'',cursor:'pointer'}}
                    onClick={() => {
                        setIndividual(true)
                        setGroup(false)
                    }}>
                        <Card.Title>Individual</Card.Title>
                        <Card.Text>$2000 / month</Card.Text>
                        <Card.Text>6 months</Card.Text>
                        <Card.Text>3 days a week</Card.Text>
                    </Card.Body>
                </Card>
                </Col>
                </Row>
                <Form>
                    <FormGroup 
                    className="mb-3 mt-3"
                    style={
                        {
                        textAlign:'center'
                    }}>
                    <Link to="/group">
                    <Button className={
                        !group && !individual ? "disabled":"active"
                    } 
                    size="lg">Checkout</Button>
                    </Link>
                    </FormGroup>
        </Form>
            </Card.Body>
        </Card>
        </Container>
    )
}

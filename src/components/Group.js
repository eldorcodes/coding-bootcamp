import React, { useState } from 'react'
import { Button, Card, Container, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const Group = () => {
    const [successMessage, setSuccessMessage] = useState(false);

    return (
        <Container>
            {
                successMessage ? (
                    <Card>
                        <Card.Body>
                            <Card.Title>Thank you</Card.Title>
                            <Card.Text>
                                You are successfully subscribed
                                for Group.
                                You will receive class information
                                shortly. Check back soon..
                            </Card.Text>
                            <Link to="/">
                            <Button
                            size="lg"
                             variant="success">Done</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                ) : (
                    <Card>
                <Card.Body>
                    <Card.Body>
                        <Card.Title>Group Subscription</Card.Title>
                        <Card.Text>
                            Once subscribe, your membership will start 
                            immediately and your group subscription plan 
                            will start after you make your first month payment 
                            in the amount of $1000.
                        </Card.Text>
                        {/* <Card.Text>
                            After one month, your card will be charged $1000 every month
                            till you cancel your membership or your membership ends
                        </Card.Text> */}
                    </Card.Body>
                    <Card.Body>
                        <Form>
                            <FormGroup className="mb-3">
                                <FormLabel>Full name</FormLabel>
                                <FormControl 
                                type="text"
                                placeholder="Full name on your card"
                                 />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Card Number</FormLabel>
                                <FormControl
                                type="number"
                                placeholder="1234 5678 9100"
                                 />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>Expire Date</FormLabel>
                                <FormControl
                                    type="number"
                                    placeholder="12/24"
                                 />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormLabel>CVV</FormLabel>
                                <FormControl
                                    type="number"
                                    placeholder="123"
                                 />
                            </FormGroup>
                            {/* <FormGroup>
                                <FormLabel>Amount $1000</FormLabel>
                            </FormGroup> */}
                            <FormGroup style={{
                                textAlign:'center'
                            }}>
                            <Button 
                            onClick={() => setSuccessMessage(true)}
                            size="lg">Pay Now</Button>
                            </FormGroup>
                        </Form>
                    </Card.Body>
                </Card.Body>
            </Card>
                )
            }
        </Container>
    )
}

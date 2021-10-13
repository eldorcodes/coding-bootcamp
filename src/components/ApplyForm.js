import React, { useState } from 'react'
import { Button, Form, 
    FormControl, FormGroup, 
    FormLabel, Card, Container } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export const ApplyForm = () => {
    const router = useHistory()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState(null)
    const [message, setMessage] = useState('')

    const fetchValues = (e) => {
        e.preventDefault()
        console.log({ name, email, phone, message });
        router.push('/options')
    }

    return (
        <Container>
        <Card style={{
            padding:10,
            marginTop:20
        }}>
            <Card.Body>
                <Card.Title style={{
                    textAlign:'center'
                }}>Application</Card.Title>
                <Form 
                onSubmit={fetchValues}>
            <FormGroup className="mb-3">
                <FormLabel>Name</FormLabel>
                <FormControl 
                onChange={e => setName(e.target.value)}
                type="text" 
                placeholder="Type your name"
                />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Email</FormLabel>
                <FormControl
                onChange={e => setEmail(e.target.value)}
                type="email"
                placeholder="Type email address"
                 />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Phone</FormLabel>
                <FormControl 
                onChange={e => setPhone(e.target.value)}
                type="text"
                placeholder="123 456 7890"
                 />
            </FormGroup>
            <FormGroup className="mb-3">
                <FormLabel>Message</FormLabel>
                <FormControl 
                onChange={e => setMessage(e.target.value)}
                as="textarea"
                rows={3}
                placeholder="Say something to us"
                 />
            </FormGroup>
            <FormGroup 
            className="mb-3"
            style={{
                textAlign:'center'
            }}>

                <Button type="submit"
                 size="lg">Submit</Button>
        
            </FormGroup>
        </Form>
            </Card.Body>
        </Card>
        </Container>
    )
}

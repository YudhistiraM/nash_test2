import React, { Component } from 'react'
import { Container, Form, Card, Row, Col, Button, Alert } from 'react-bootstrap'
import './landing.css'

export default class Landing extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            username: '',
            password: '',
            showAlert: false
        }
    }

    handleUsernameChange(e) {
        this.setState({ username: e.target.value })
    }

    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }

    handleLogin(e) {
        e.preventDefault()
        this.setState({ showAlert: !this.loginValidate() })
        if (this.loginValidate()) {
            document.location = '/home'
        }
    }

    loginValidate() {
        return this.state.username === 'mahasiswa' && this.state.password === 'mhs123'
    }

    render() {
        let alert = this.state.showAlert ? [
            <Alert
                key="1"
                style={{ height: '30px', padding: '5px', fontSize: '12px', marginTop: '15px' }}
                variant="danger"
            >
                Username or Password is Wrong!!!
            </Alert>
        ] : []
        return (
            <Container style={{ textAlign: 'center' }}>
                <Row className="justify-content-md-center" style={{ marginTop: '150px' }}>
                    <Col md="3"></Col>
                    <Col md="6">
                        <Card>
                            <Card.Body style={{ paddingBottom: '30px' }}>
                                <Card.Title>LOGIN</Card.Title>
                                <Form onSubmit={this.handleLogin.bind(this)}>
                                    <Form.Group>
                                        <Form.Control
                                            type="text"
                                            placeholder="Username"
                                            value={this.state.username}
                                            onChange={this.handleUsernameChange.bind(this)}
                                            required />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handlePasswordChange.bind(this)}
                                            required />
                                    </Form.Group>
                                    <Button variant="primary" type="submit" block>
                                        Login
                                    </Button>
                                    {alert}
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md="3"></Col>
                </Row>
            </Container>
        )
    }
}
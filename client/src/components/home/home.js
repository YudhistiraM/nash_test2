import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './home.css'

export default class Home extends Component {
    render() {
        return (
            <Container style={{ textAlign: 'center' }}>
                <Row className="justify-content-md-center">
                    <Col md="12"><h1>Ini Home Bad Boy</h1></Col>
                </Row>
            </Container>
        )
    }
}
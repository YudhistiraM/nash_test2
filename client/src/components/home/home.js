import React, { Component } from 'react'
import { Container, Row, Col, Table, Button, Pagination } from 'react-bootstrap'
import './home.css'

export default class Home extends Component {

    handleAddClick(e) {
        document.location = '/add'
    }

    handleEditClick(e) {
        document.location = '/edit'
    }

    render() {
        return (
            <Container style={{ textAlign: 'center' }}>
                <Row style={{ marginTop: '50px' }}>
                    <Col md="12">
                        <h1>DATA MAHASISWA</h1>
                    </Col>
                </Row>
                <Row style={{ marginTop: '30px', textAlign: 'left' }}>
                    <Col md="12">
                        <Button variant="primary" onClick={this.handleAddClick.bind(this)}>ADD + </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md="12" style={{ overflowX: 'scroll' }}>
                        <Table striped bordered hover variant="dark" style={{ marginTop: '10px' }}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>ID Mahasiswa</th>
                                    <th>Nama Mahasiswa</th>
                                    <th>Mata Kuliah</th>
                                    <th>Nilai</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ verticalAlign: 'middle' }}>1</td>
                                    <td style={{ verticalAlign: 'middle' }}>Mark</td>
                                    <td style={{ verticalAlign: 'middle' }}>Otto</td>
                                    <td style={{ verticalAlign: 'middle' }}>@mdo</td>
                                    <td style={{ verticalAlign: 'middle' }}>8.00</td>
                                    <td>
                                        <Button
                                            style={{ marginRight: '15px' }}
                                            variant="success"
                                            onClick={this.handleEditClick.bind(this)}
                                            block>Edit</Button>
                                        <Button variant="danger" block>Delete</Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}
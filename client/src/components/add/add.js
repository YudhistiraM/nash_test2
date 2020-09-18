import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './add.css'
import * as redux from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../action';

class Add extends Component {

    handleSubmit(e){
        e.preventDefault()
        document.location = '/home'
    }

    render() {
        return (
            <Container style={{ textAlign: 'center' }}>
                <Row style={{ marginTop: '50px' }}>
                    <Col md="12">
                        <h1>TAMBAH DATA</h1>
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Col md="12">
                        <Form  onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>-- Pilih Nama Mahasiswa --</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>-- Pilih Nama Mata Kuliah --</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group>
                                <Form.Control placeholder="Nilai" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder="Keterangan"
                                    // value={this.state.note}
                                    // onChange={this.handleNoteChange.bind(this)}
                                    // required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" block>
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Add)
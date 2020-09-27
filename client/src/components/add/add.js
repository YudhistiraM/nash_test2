import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './add.css'
import Mahasiswa from '../listMahasiswa/listMahasiswa'
import Matkul from '../listMatkul/listMatkul'
import * as redux from 'redux';
import { connect } from 'react-redux';
import * as AppActions from '../../action';

class Add extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            id_mhs: '',
            id_matkul: '',
            nilai: undefined,
            keterangan: ''
        }
    }

    handleMhsChange(e) {
        this.setState({ id_mhs: e.target.value })
    }

    handleMatkulChange(e) {
        this.setState({ id_matkul: e.target.value })
    }

    handleNilaiChange(e) {
        this.setState({ nilai: e.target.value })
    }

    handleKeteranganChange(e) {
        this.setState({ keterangan: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        document.location = '/home'
        let newData = {
            id_mhs: this.state.id_mhs,
            id_matkul: this.state.id_matkul,
            nilai: this.state.nilai,
            keterangan: this.state.keterangan
        }
        this.props.actions.saveData(newData);
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
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group>
                                <Mahasiswa
                                changeMhs={this.handleMhsChange.bind(this)}
                                selected={'default'}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Matkul
                                changeMatkul={this.handleMatkulChange.bind(this)}
                                selected={'default'}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    placeholder="Nilai"
                                    value={this.state.nilai}
                                    onChange={this.handleNilaiChange.bind(this)}
                                    required
                                />
                            </Form.Group>

                            <Form.Group>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    placeholder="Keterangan"
                                    value={this.state.keterangan}
                                    onChange={this.handleKeteranganChange.bind(this)}
                                    required
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

function mapStateToProps(state) {
    return {
        data: state.data,
        dataMatkul: state.dataMatkul
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Add)

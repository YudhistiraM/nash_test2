import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './edit.css'
import * as redux from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../../action'
import Mahasiswa from '../listMahasiswa/listMahasiswa'
import Matkul from '../listMatkul/listMatkul'

class Edit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id_mhs: '',
            id_matkul: '',
            nilai: '',
            keterangan: ''
        }
    }

    componentDidMount() {
        const { dataNilai } = this.props
        const id_nilai = window.location.pathname.split("/").pop();
        const dataFilter = dataNilai.find(data => data.id_nilai === parseInt(id_nilai))
        this.setState({ id_mhs: dataFilter.id_mhs })
        this.setState({ id_matkul: dataFilter.id_matkul })
        this.setState({ nilai: dataFilter.nilai_mhs })
        this.setState({ keterangan: dataFilter.keterangan })
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
        const id_nilai = window.location.pathname.split("/").pop()
        let newData = {
            id_mhs: this.state.id_mhs,
            id_matkul: this.state.id_matkul,
            nilai: this.state.nilai,
            keterangan: this.state.keterangan
        }
        this.props.actions.editNilai(id_nilai, newData)
        document.location = '/home'
    }

    render() {
        return (
            <Container style={{ textAlign: 'center' }}>
                <Row style={{ marginTop: '50px' }}>
                    <Col md="12">
                        <h1>EDIT DATA</h1>
                    </Col>
                </Row>
                <Row style={{ marginTop: '50px' }}>
                    <Col md="12">
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <Form.Group>
                                <Mahasiswa
                                    changeMhs={this.handleMhsChange.bind(this)}
                                    selected={this.state.id_mhs}
                                />
                            </Form.Group>

                            <Form.Group>
                                <Matkul
                                    changeMatkul={this.handleMatkulChange.bind(this)}
                                    selected={this.state.id_matkul}
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


function mapDispatchToProps(dispatch) {
    return {
        actions: redux.bindActionCreators(AppActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Edit)

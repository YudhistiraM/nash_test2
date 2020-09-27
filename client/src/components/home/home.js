import React, { Component } from 'react'
import { Container, Row, Col, Table, Button } from 'react-bootstrap'
import './home.css'
import * as redux from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../../action'
import { Link } from 'react-router-dom'



class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
        };
    }

    handleAddClick(e) {
        document.location = '/add'
    }

    handleDeleteClick(id_nilai) {
        if (window.confirm("Data Akan Di Hapus")) {
            this.props.actions.deleteNilai(id_nilai)
            document.location = '/home'
        }
    }

    render() {
        const { dataNilai } = this.props
        let filterData = dataNilai
        let dataNodes = filterData.map((data, index) => {
            return (
                <tr key={index}>
                    <td style={{ verticalAlign: 'middle' }}>{(index + 1)}</td>
                    <td style={{ verticalAlign: 'middle' }}>{data.id_mhs}</td>
                    <td style={{ verticalAlign: 'middle' }}>{data.nama_mhs}</td>
                    <td style={{ verticalAlign: 'middle' }}>{data.nama_matkul}</td>
                    <td style={{ verticalAlign: 'middle' }}>{data.nilai_mhs}</td>
                    <td>

                        <Link to={'edit/' + data.id_nilai}>
                            <Button
                                style={{ marginBottom: '15px' }}
                                variant="success"
                                block>Edit</Button>
                        </Link>
                        <Button
                            variant="danger"
                            onClick={() => this.handleDeleteClick(data.id_nilai)}
                            block>Delete</Button>
                    </td>
                </tr>
            )
        })
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
                                {dataNodes}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataNilai: state.dataNilai
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
)(Home)

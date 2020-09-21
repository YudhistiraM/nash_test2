import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import * as redux from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../../action'
import './listMahasiswa.css'


class Mahasiswa extends Component {
    componentDidMount() {
        this.props.actions.loadMahasiswa();
    }

    render() {
        const { data } = this.props
        let filterMahasiswa = data

        let nodesMhs = filterMahasiswa.map((data, index) => {
            return (
                <option key={index} value={data.id_mhs}>{data.nama_mhs}</option>
            )
        })
        return (
            <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={this.props.changeMhs}
            >
                <option>-- Pilih Nama Mahasiswa --</option>
                {nodesMhs}
            </Form.Control>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
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
)(Mahasiswa);
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
        const { dataMhs, selected } = this.props
        let filterMahasiswa = dataMhs

        let nodesMhs = filterMahasiswa.map((data, index) => {
            return (
                <option key={index} value={data.id_mhs} selected={data.id_mhs === selected}>{data.nama_mhs}</option>
            )
        })
        return (
            <Form.Control
                as="select"
                defaultValue={selected}
                onChange={this.props.changeMhs}
            >
                <option value={'default'}>-- Pilih Nama Mahasiswa --</option>
                {nodesMhs}
            </Form.Control>
        )
    }
}

function mapStateToProps(state) {
    return {
        dataMhs: state.dataMhs
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
import React, { Component } from 'react'
import { Form } from 'react-bootstrap'
import * as redux from 'redux'
import { connect } from 'react-redux'
import * as AppActions from '../../action'
import './listMatkul.css'


class Matkul extends Component {
    componentDidMount() {
        this.props.actions.loadMatakuliah();
    }

    render() {
        const { data, selected } = this.props
        let filterMatkul = data

        let nodesMatkul = filterMatkul.map((data, index) => {
                return (
                    <option key={index} value={data.id_matkul} selected={data.id_matkul === selected}>{data.nama_matkul}</option>
                )
            })
        return (
            <Form.Control
                as="select"
                defaultValue={selected}
                onChange={this.props.changeMatkul}
                required
            >
                <option value={'default'}>-- Pilih Nama Mata Kuliah --</option>
                {nodesMatkul}
            </Form.Control>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.dataMatkul
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
)(Matkul);
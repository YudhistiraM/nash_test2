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
        const { data } = this.props
        let filterMatkul = data

        let nodesMatkul = filterMatkul.map((data, index) => {
                return (
                    <option key={index} value={data.id_matkul}>{data.nama_matkul}</option>
                )
            })
        return (
            <Form.Control
                as="select"
                defaultValue="Choose..."
                onChange={this.props.changeMatkul}
                required
            >
                <option>-- Pilih Nama Mata Kuliah --</option>
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
import * as types from '../constants/actionTypes'
import axios from 'axios'

const SERVER_URL = `http://localhost:3000/`

function loadDataSuccess(data) {
    return {
        type: types.LOAD_DATA_SUCCESS,
        data: data
    }
}

function loadMahasiswaSuccess(data) {
    return {
        type: types.LOAD_MAHASISWA_SUCCESS, 
        data: data
    }
}

function loadMatakuliahSuccess(data) {
    return {
        type: types.LOAD_MATAKULIAH_SUCCESS,
        data: data
    }
}


export function loadData() {
    return dispatch => {
        axios.get(SERVER_URL)
            .then(res => {
                dispatch(loadDataSuccess(res.data.data))
            })
    }
}


export function saveData(formData) {
    return dispatch => {
        axios.post(SERVER_URL, formData)
            .then((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.body.formData);
                }
            })
    }
}

export function loadMahasiswa() {
    return dispatch => {
        axios.get(SERVER_URL + 'mahasiswa')
            .then(res => {
                // console.log('Ini data mahasiswa action', res.data.data);
                dispatch(loadMahasiswaSuccess(res.data.data))
            })
    }
}

export function loadMatakuliah() {
    return dispatch => {
        axios.get(SERVER_URL + 'mata_kuliah')
            .then(res => {
                // console.log('Ini data matakuliah Action', res.data.data);
                dispatch(loadMatakuliahSuccess(res.data.data))
            })
    }
}


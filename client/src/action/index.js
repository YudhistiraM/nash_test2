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
                dispatch(loadMahasiswaSuccess(res.data.data))
            })
    }
}

export function loadMatakuliah() {
    return dispatch => {
        axios.get(SERVER_URL + 'mata_kuliah')
            .then(res => {
                dispatch(loadMatakuliahSuccess(res.data.data))
            })
    }
}


export function editNilai(id_nilai, formData) {
    return dispatch => {
        axios.put(`${SERVER_URL} + ${id_nilai}`, formData)
            .then((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.data);
                }
            })
    }
}

export function deleteNilai(id_nilai) {
    return dispatch => {
        axios.delete(`${SERVER_URL} + ${id_nilai}`)
            .then((err, res) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(res.data);
                }
            })
    }
}
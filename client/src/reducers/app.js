
import { LOAD_DATA_SUCCESS, LOAD_MAHASISWA_SUCCESS, LOAD_MATAKULIAH_SUCCESS } from '../constants/actionTypes.js'

export default function data(state = [], action) {
  switch (action.type) {

    case LOAD_DATA_SUCCESS:
      return action.data;

    default:
      return state;
  }
}

import { LOAD_DATA_SUCCESS, LOAD_MAHASISWA_SUCCESS } from '../constants/actionTypes.js'

const data = (state = [], action) => {
  switch (action.type) {

    case LOAD_DATA_SUCCESS:
      return action.data;

    case LOAD_MAHASISWA_SUCCESS:
      return action.data;

    default:
      return state;
  }
}

export default data;
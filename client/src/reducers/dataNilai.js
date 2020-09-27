
import { 
  LOAD_DATA_SUCCESS
 } from '../constants/actionTypes.js'

const dataNilai = (state = [], action) => {
  switch (action.type) {

    case LOAD_DATA_SUCCESS:
      return action.data;

    default:
      return state;
  }
}

export default dataNilai;
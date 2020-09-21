import { LOAD_MATAKULIAH_SUCCESS } from '../constants/actionTypes.js'


const dataMatkul = (state = [], action) => {
    switch (action.type) {
  
      case LOAD_MATAKULIAH_SUCCESS:
        return action.data;
  
      default:
        return state;
    }
  }
  
  export default dataMatkul;
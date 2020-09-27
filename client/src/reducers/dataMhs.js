import { LOAD_MAHASISWA_SUCCESS } from '../constants/actionTypes.js'


const dataMhs = (state = [], action) => {
    switch (action.type) {

        case LOAD_MAHASISWA_SUCCESS:
            return action.data;
        
            default:
            return state;
    }
}

export default dataMhs;
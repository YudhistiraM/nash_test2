
import {combineReducers} from 'redux';
import data from './app';
import dataMatkul from './dataMatkul';

const rootReducer = combineReducers({
  data: data,
  dataMatkul: dataMatkul
})

export default rootReducer
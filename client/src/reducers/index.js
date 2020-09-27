
import {combineReducers} from 'redux';
import dataNilai from './dataNilai';
import dataMatkul from './dataMatkul';
import dataMhs from './dataMhs';

const rootReducer = combineReducers({
  dataNilai: dataNilai,
  dataMatkul: dataMatkul,
  dataMhs: dataMhs
})

export default rootReducer
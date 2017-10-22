import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PowerReducer from './reducer_power';

const rootReducer = combineReducers({
  form: formReducer,
  power: PowerReducer
});

export default rootReducer;

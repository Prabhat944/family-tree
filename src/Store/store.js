import {createStore} from 'redux';
import { familyReducer } from './reducer/reducer';

const store=createStore(familyReducer);
export default store;
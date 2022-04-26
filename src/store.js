import { reducer } from './reducer';
import { createStore } from 'redux';

const initialState = { favorites: [] };
export const store = createStore(reducer, initialState);
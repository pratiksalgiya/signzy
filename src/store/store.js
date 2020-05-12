import { createStore, combineReducers } from 'redux';
import roomSettings from '../store/reducer/roomSettings';

const rootReducer = combineReducers({
    roomSettings: roomSettings
});

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from '../reducers';

const store = configureStore({
    reducer: userReducer
});


export default store
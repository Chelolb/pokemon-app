import {configureStore} from '@reduxjs/toolkit';
import userSlice from "../reducers/index.js";

const store = configureStore({
    reducer:{
        POKEMONS : userSlice
    }
})
export default store
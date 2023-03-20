import {configureStore} from '@reduxjs/toolkit';
import pokemonSlice from "../reducers/index.js";

const store = configureStore({
    reducer:{
        POKEMONS : pokemonSlice
    }
})
export default store
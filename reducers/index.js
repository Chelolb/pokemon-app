import {createSlice, dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
//const ROUTE = 'http://localhost:3001'     // since the PC (host local)
//const ROUTE = 'http://192.168.0.137:3001' // since the device    (host Local)
const ROUTE = 'https://pokemon-app-3io8.onrender.com'   // General  (Host deployed)

export const userSlice = createSlice({
    name : "POKEMONS",
    initialState : {
        allPokemon: [],
        allPokemonFiltered:[]
    },
    reducers:{
        getAllPokemons(state,action){
            state.allPokemon = action.payload
            state.allPokemonFiltered = action.payload
        },

        getPokemonByName(state,action){
            state.allPokemon = action.payload
            state.allPokemonFiltered = action.payload
        }
    }
});

export const getAllPokemons = ()=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/pokemon/getAll")     // require all Pokemon (40)
        dispatch(userSlice.actions.getAllPokemons(json.data))

    } catch (e) {
        console.log(e)
    }
}   

export const getPokemonByName = (name)=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/pokemon/search/" + name)     // require Pokemon for name
        dispatch(userSlice.actions.getPokemonByName(json.data))

    } catch (e) {
        console.log(e)
    }
}   

export default userSlice.reducer
import {createSlice, dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
//const ROUTE = 'http://localhost:3001'     // since the PC (host local)
const ROUTE = 'http://192.168.0.137:3001' // since the device    (host Local)
//const ROUTE = 'https://pokemon-app-3io8.onrender.com'   // General  (Host deployed)

export const pokemonSlice = createSlice({
    name : "POKEMONS",
    initialState : {
        allPokemon: [],
        allPokemonFiltered: [],
        detailPokemon: [],
    },
    reducers:{
        getAllPokemons(state,action){  
            state.allPokemon = action.payload
            state.allPokemonFiltered = action.payload
        },

        getPokemonByName(state,action){       
            state.allPokemon = action.payload
            state.allPokemonFiltered = action.payload
        },
        
        getPokemonById(state,action){
            state.detailPokemon = action.payload
        },

        cleanDetail(state, action){
            state.detailPokemon = []
        }
    }
});

export const getAllPokemons = ()=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/pokemon/getAll")     // require all Pokemon (40)
        dispatch(pokemonSlice.actions.getAllPokemons(json.data))

    } catch (e) {
        console.log(e)
    }
}   

export const getPokemonByName = (name)=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/pokemon/search/" + name)     // require Pokemon for name
        dispatch(pokemonSlice.actions.getPokemonByName(json.data))

    } catch (e) {
        console.log(e)
    }
} 

export const getPokemonById = (id)=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/pokemon/detail/" + id)     // require Pokemon for id
        dispatch(pokemonSlice.actions.getPokemonById(json.data))

    } catch (e) {
        console.log(e)
    }
}

export const cleanDetail = () => async(dispatch) => {
    dispatch(pokemonSlice.actions.cleanDetail())
}

export default pokemonSlice.reducer
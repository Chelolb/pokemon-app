import {createSlice, dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
const ROUTE = 'http://192.168.0.137:3001' // since the device    (host Local)


export const pokemonSlice = createSlice({
    name : "POKEMONS",
    initialState : {
        allPokemon: [],
        allPokemonFiltered: [],
        detailPokemon: [],
        allTypes: [],
        filterType: [],
        filterSource: [],
        sortBy: [],
        sortDirection: []
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

        cleanDetail(state,action){
            state.detailPokemon = []
        },

        getAllTypes(state, action){
            state.allTypes = action.payload
        },

        getPokemonFilter(state, action){
            const allPokemon2 = state.allPokemon
            const statusFiltered2 = action.payload === "db" 
                ? allPokemon2.filter(e => e.createdDb) // if filter for DB
                : allPokemon2.filter(e => !e.createdDb); // if filter for API

                state.allPokemonFiltered = action.payload === 'all' 
                ? allPokemon2                       // if Option is ALL
                : statusFiltered2;                  // if Option es Only Source

                state.filterSource = action.payload
        },

        getPokemonSortByName(state, action){
            let sortedArray
            state.sortBy = "name"
            state.sortDirection = action.payload

            if(action.payload === 'up'){

                sortedArray = state.allPokemonFiltered.sort(function (a, b){
                        if(a.name > b.name){
                            return 1;
                        }
                        if(b.name > a.name){
                            return -1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'down'){

                sortedArray = state.allPokemonFiltered.sort(function (a, b){
                        if(a.name > b.name){
                            return -1;
                        }
                        if(b.name > a.name){
                            return 1;
                        }
                        return 0;
                    }) 
            }
        },

        getPokemonSortByAttack(state, action){
            let sortedArray
            state.sortBy = "attack"
            state.sortDirection = action.payload

            if(action.payload === 'up'){
                sortedArray = state.allPokemonFiltered.sort(function (a, b){
                        if(a.attack > b.attack){
                            return 1;
                        }
                        if(b.attack > a.attack){
                            return -1;
                        }
                        return 0;
                    }) 
            }
            if(action.payload === 'down'){
                sortedArray = state.allPokemonFiltered.sort(function (a, b){
                        if(a.attack > b.attack){
                            return -1;
                        }
                        if(b.attack > a.attack){
                            return 1;
                        }
                        return 0;
                    }) 
            }
        },

        getPokemonByType(state, action) {
            const allPokemon2 = state.allPokemon
            state.allPokemonFiltered = action.payload === "all" ? allPokemon2 : allPokemon2.filter(el => el.types.includes(action.payload) )   
            
            state.filterType = action.payload
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
        var json = await axios.get(ROUTE + "/pokemon/search/" + name)     // require Pokemon by name
        dispatch(pokemonSlice.actions.getPokemonByName(json.data))

    } catch (e) {
        console.log(e)
    }
} 

export const getPokemonById = (id)=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/pokemon/detail/" + id)     // require Pokemon by id
        dispatch(pokemonSlice.actions.getPokemonById(json.data))

    } catch (e) {
        console.log(e)
    }
}

export const cleanDetail = () => async(dispatch) => {       // clean detail
    dispatch(pokemonSlice.actions.cleanDetail())
}

export const getAllTypes = ()=> async(dispatch) => {
    try {
        var json = await axios.get(ROUTE + "/type/getAll")     // require all Types
        dispatch(pokemonSlice.actions.getAllTypes(json.data))

    } catch (e) {
        console.log(e)
    }
}

export const createPokemon = (payload) => async () => {  // create new pokemon
    try {
        await axios.post(ROUTE+"/pokemon/create", payload);

    } catch (error) {
        console.log(error);
    }
}

export const getPokemonFilter = (option) => async(dispatch) => {   // Source Filter
    dispatch(pokemonSlice.actions.getPokemonFilter(option))
}

export const getPokemonSortByName = (payload) => async(dispatch) => {   // Sort by name
    dispatch(pokemonSlice.actions.getPokemonSortByName(payload))
}

export const getPokemonSortByAttack = (payload) => async(dispatch) => {   // Sort by attack level
    dispatch(pokemonSlice.actions.getPokemonSortByAttack(payload))
}

export const getPokemonByType = (payload) => async(dispatch) => {   //  Filter Pokemon by Type
    dispatch(pokemonSlice.actions.getPokemonByType(payload))
}
export default pokemonSlice.reducer
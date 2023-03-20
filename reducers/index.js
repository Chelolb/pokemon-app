import {createSlice, dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { ROUTE } from '@env';


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
        sortDirection: [],
        newPokemonTypes: []
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

        setNewTypes(state,action){
            state.newPokemonTypes = action.payload
        },

        delNewTypes(state,action){
            state.newPokemonTypes = []
        },

        getPokemonFilter(state, action){
            const allPokemon2 = state.allPokemon
            const statusFiltered2 = action.payload === "db" 
                ? allPokemon2.filter(e => e.createdDb) // if filter for DB
                : allPokemon2.filter(e => !e.createdDb); // if filter for API

                if (statusFiltered2.length < 1 && action.payload !== 'all') {   // if have not array
                    state.allPokemonFiltered = {msg:`Not found Pokemon in: ${action.payload}`}
                }
                else{
                    state.allPokemonFiltered = action.payload === 'all'   // if Option is ALL
                    ? allPokemon2
                    : statusFiltered2
                }
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
            state.allPokemonFiltered = action.payload === "all" 
                ? allPokemon2 
                : 
                (allPokemon2.filter(el => el.types.includes(action.payload)).length
                    ? allPokemon2.filter(el => el.types.includes(action.payload))
                    : {msg:`Not found Pokemon with Type: ${action.payload}`}  
                )
            state.filterType = action.payload
        }

    }
});

export const getAllPokemons = ()=> async(dispatch) => {
    console.log(ROUTE + "/pokemon/getAll")
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
        var response = await axios.post(ROUTE + "/pokemon/create", payload);
            //console.log('reducer:', response)
            return response;

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

export const setNewTypes = (payload) => async(dispatch) => {       // set array genres
    dispatch(pokemonSlice.actions.setNewTypes(payload))
}

export const delNewTypes = () => async(dispatch) => {       // delete array genres
    dispatch(pokemonSlice.actions.delNewTypes())
}

export default pokemonSlice.reducer
import axios from "axios"; 


export const pokemonApi = await axios.create({
    baseURL : 'https://pokeapi.co/api/v2/'
})

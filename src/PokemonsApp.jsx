import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setPokemons } from "./store/slices/pokemon/pokemonSlice";
import { getPokemons } from "./store/slices/pokemon/thunks"


const PokemonsApp = () => {
  const dispatch = useDispatch();
  const {isLoading, pokemons = [], page} = useSelector(state => state.pokemon)

  useEffect(() => {

    setTimeout(() => {
      dispatch(getPokemons())
    }, 3000);
  }, [])




  
  return (
        <>
            <h1>Pokemons App</h1> 
            <hr />
            <p>isLoading: {isLoading ? 'true' : 'false'}</p>
            <ul>
              {
                pokemons.map(poke => (
                  <div>
                    <li key={poke.url}>{poke.name}</li>
                    <img src={poke.url} alt="image" />
                  </div>
                ))
              }
              
            </ul>
            <button onClick={() => dispatch(getPokemons(page))} className={`btn btn-danger`} disabled={isLoading}>Next page</button>
        </>
  )
}

export default PokemonsApp
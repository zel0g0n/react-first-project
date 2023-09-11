import { useContext } from 'react'
import { Context } from '../../context'
import {searchMovie,filterHandler} from '../utility/data'
import './Movie-list.css'
import ListItem from '../list-item/List-item'
const MovieList = function() {
    const {state,dispatch} = useContext(Context)
    console.log(state)
    const data = filterHandler(searchMovie(state.data,state.term),state.filter)
    return <div className='movie-list'>
        {data.map(item=>(<ListItem  
        {...item} key={item.id} 
        > </ListItem>))}
    </div>
}
export default MovieList    
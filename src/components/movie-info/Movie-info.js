import { useContext } from 'react'
import './Movie-info.css'
import { Context } from '../../context'
const MovieInfo = function() {
    const {state,dispatch} = useContext(Context)
    const allMovie = state.data.length
    const favouriteMovie = state.data.filter(item=>item.like===true).length
    return <div className='movie-info'>
        <p className='fs-3 text-uppercase'>Barcha kinolar soni: {allMovie}</p>
        <p className='fs-4 text-uppercase'>Sevimli kinolar soni: {favouriteMovie}</p>
    </div>
}
export default MovieInfo
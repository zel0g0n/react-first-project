import {Component,useState,useEffect} from 'react'
import './Add-movie.css'
import { useContext } from 'react'
import { Context } from '../../context'
const AddMovie = () => {
    const {state,dispatch} = useContext(Context)
    const [movie,setMovie] = useState({name:'',views:''})
    const heandlerChange = (e) => {
        setMovie({...movie, [e.target.name]: e.target.value})
    }
    const addMovie = (e,data) => {
        e.preventDefault()
        if(data.name && data.views) {
            dispatch({type: "ADD__FORM",payload: data})
            setMovie({
                name: '',
                views: ''
            }) 
        }
    }
   

    return (
        <div className='add-movie'>
            <p className='fs-4'>Kino qo'shish</p>
            <form action="" className='add-form d-flex' onSubmit={(e)=>{ return addMovie(e,movie)}}>
                <input type="text" value={movie.name} name='name' className="form-control new-post-label" onChange={heandlerChange} placeholder="Yangi kino qo'shish"/>
                <input type="number" value={movie.views} name='views' className="form-control new-post-label" onChange={heandlerChange} placeholder="Necha marta ko'rilgan?"/>
                <button type='submit' className='btn btn-dark'>Qo'shish</button>
            </form>
        </div>
    )
}

// class AddMovie extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             name: '',
//             views: ''
//         }
//     }
//     heandlerChange = (e) => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }
//     addMovie = (e,data) => {
//         e.preventDefault()
//         if(data.name && data.views) {
//             this.props.addForm(data)
//             this.setState({
//                 name: '',
//                 views: ''
//             }) 
//         }
//     }


//     render () {
//         const {name,views} = this.state
//         return 
//             <div className='add-movie'>
//                 <p className='fs-4'>Kino qo'shish</p>
//                 <form action="" className='add-form d-flex' onSubmit={(e)=>{ return this.addMovie(e,{name,views})}}>
//                     <input type="text" value={name} name='name' className="form-control new-post-label" onChange={this.heandlerChange} placeholder="Yangi kino qo'shish"/>
//                     <input type="number" value={views} name='views' className="form-control new-post-label" onChange={this.heandlerChange} placeholder="Necha marta ko'rilgan?"/>
//                     <button type='submit' className='btn btn-dark'>Qo'shish</button>
//                 </form>
//             </div>
//     }
// }

export default AddMovie
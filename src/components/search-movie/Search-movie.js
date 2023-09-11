import { useState } from 'react'
import './Search-movie.css'
import { useContext } from 'react'
import { Context } from '../../context'
const SearchMovie = () => {
    const [value,setValue] = useState('')
    const {state,dispatch} = useContext(Context)
    const getValue = (e) => {
        const term = e.target.value
        setValue(e.target.value)
        dispatch({type:"CHANGE__TERM",payload:term})
    }

    return <input value={value} onChange={(e)=>{getValue(e)}} type="text" className='form-control search-input p-3' placeholder='Kinolarni qidirish'/>

}

// class SearchMovie extends Component {
//     constructor(props) {
//         super()
//         this.state = {
//             value: ''
//         }
//     }
//     getValue = (e) => {
//         this.setState({value: e.target.value})
//         this.props.changeTerm(e.target.value)
//     }

//     render() {
//         return <input value={this.state.value} onChange={(e)=>{this.getValue(e)}} type="text" className='form-control search-input p-3' placeholder='Kinolarni qidirish'/>

//     }
// }

export default SearchMovie
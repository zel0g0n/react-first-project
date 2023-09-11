import { useContext } from 'react'
import { Context } from '../../context'
import './Movie-filter.css'


const FilterMovie = () => {

    const {state,dispatch} = useContext(Context)
    const btnsArr = [
        {name: 'default',label: 'Barcha kinolar'},
        {name: 'like',label: 'Sevimli kinolar'},
        {name: 'maxViewers',label: 'Eng kop korilgan kinolar'},
    ]
    return  <div className='btn-group'>
            {btnsArr.map(item => <button key={item.name}
                className={`btn ${state.filter===item.name?'btn-dark':'btn-outline-dark'}`}
                onClick={()=>dispatch({type:"CHANGE__FILTER",payload:item.name})}>
                {item.label}
            </button>)}
        </div>
}

// class FilterMovie extends Component {
//     constructor(props) {
//         super()
//     }
//     changeFilterUpdate = (filterItem) => {
//         this.props.setFilter(filterItem)
//     }
//     render() {
//         const btnsArr = [
//             {name: 'default',label: 'Barcha kinolar'},
//             {name: 'like',label: 'Sevimli kinolar'},
//             {name: 'maxViewers',label: 'Eng kop korilgan kinolar'},
//         ]
//         const {filter,setFilter} = this.props

//         return  <div className='btn-group'>
//             {btnsArr.map(item => <button key={item.name}
//                 className={`btn ${filter===item.name?'btn-dark':'btn-outline-dark'}`}
//                 onClick={()=>(setFilter(item.name))}>
//                 {item.label}
//             </button>)}
//         </div>
//     }
    
// }
    
export default FilterMovie
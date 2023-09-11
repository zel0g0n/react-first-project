import { useContext } from 'react'
import './List-item.css'
import { Context } from '../../context'

const ListItem = ({name,views,favourite,like,id}) => {
    const {state,dispatch} = useContext(Context)
    const onDelete = () =>dispatch({type: 'ON__DELETE',payload: id})
    const onToggle = (e) => {
        const payload = {id, prop:e.currentTarget.getAttribute('data-toggle')}
        dispatch({type: 'ON__TOGGLE',payload})
    }
    return <ul className="list-item">
                <li className={`list-group-item d-flex justify-content-between lists ${favourite && ' favourite'}`}>
                    <span onClick={onToggle} data-toggle='like'  className='list-group-item-label'>{name}</span>
                    <input type="number" className='list-group-item-input movie-count' defaultValue={views}/>
                    <div className="d-flex justify-content-center align-items-center btns">
                        <button type='button' className='btn-cookie btn-sm'>
                            <i onClick={(e)=>onToggle(e)} data-toggle='favourite' className='fas fa-cookie'></i>
                        </button>
                        <button type='button' onClick={onDelete}
                        className='btn-trash btn-sm'>
                            <i className='fas fa-trash'></i>
                        </button>
                        <button  type='button'  className={`btn-star btn-sm ${like && ' like'}`}>
                            <i className="fas fa-star"></i>
                        </button>
                    </div>
                </li>
            </ul>
}

// class ListItem extends Component {
//     constructor(props) {
//         super()

//     }
//     render() {
//         const {name,views,onDelete,favourite,like,onToggle,id} = this.props
//         return <ul className="list-item">
//                     <li className={`list-group-item d-flex justify-content-between lists ${favourite && ' favourite'}`}>
//                         <span onClick={onToggle} data-toggle='like'  className='list-group-item-label'>{name}</span>
//                         <input type="number" className='list-group-item-input movie-count' defaultValue={views}/>
//                         <div className="d-flex justify-content-center align-items-center btns">
//                             <button type='button' className='btn-cookie btn-sm'>
//                                 <i onClick={onToggle} data-toggle='favourite' className='fas fa-cookie'></i>
//                             </button>
//                             <button type='button' onClick={onDelete}
//                              className='btn-trash btn-sm'>
//                                 <i className='fas fa-trash'></i>
//                             </button>
//                             <button  type='button'  className={`btn-star btn-sm ${like && ' like'}`}>
//                                 <i className="fas fa-star"></i>
//                             </button>
//                         </div>
//                     </li>
//             </ul>
//     }
// }
// const ListItem = function({name,viewers,isFavourite}) {
//     return <ul className="list-item">
//         <li className={`list-group-item d-flex justify-content-between lists ${isFavourite && 'favourite'}`}>
//             <span className='list-group-item-label'>{name}</span>
//             <input type="number" className='list-group-item-input movie-count' defaultValue={viewers}/>
//             <div className="d-flex justify-content-center align-items-center btns">
//                 <button type='button' className='btn-cookie btn-sm'>
//                     <i className='fas fa-cookie'></i>
//                 </button>
//                 <button type='button' className='btn-trash btn-sm'>
//                     <i className='fas fa-trash'></i>
//                 </button>
//                 <button type='button' className='btn-star btn-sm'>
//                     <i className='fas fa-star'></i>
//                 </button>
//             </div>
//         </li>
//     </ul>
// }

export default ListItem
import {useEffect,useState ,useContext} from 'react';
import { Fragment } from 'react';
import MovieInfo from '../movie-info/Movie-info';
import MovieList from '../movie-list/Movie-list';
import AddMovie from '../add-movie/Add-movie';
import SearchMovie from '../search-movie/Search-movie';
import FilterMovie from '../movie-filter/Movie-filter';
// import User from '../aaaaa/Aaaa';
import {Context} from '../../context';
import './App.css';




const App = function() {
  const [data,setData] = useState(
    []
  )
  const [term,setTerm] = useState('')
  const [filterM,setFilterM] = useState('default')
  


  const {state,dispatch} = useContext(Context)
  

  

  

  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_start0&_limit=5')
      .then(response => response.json())
      .then(json => {
            const arr = json.map(item => ({
              name: item.title,
              views: item.id**4 + item.id**3 + 9*item.id**2 + 65,
              id: item.id,
              favourite: false,
              like: false
            }))
            console.log(arr)
            setData(arr)
            dispatch({type: 'GET__DATA',payload: arr})


      })
      .catch(error=>console.log(error))
      .finally(()=>{setLoading(false)}
      )
  },[])
    
  

  return (
    <Fragment>
        {/* <User></User> */}
        <div className="app font-monospace">
          <div className='content'>
            <MovieInfo></MovieInfo>
            <div className='search-filter'>
              <SearchMovie></SearchMovie>
              <FilterMovie></FilterMovie>
            </div>
            {loading && <p className='fs-6 mr-3'>Loading...</p>}
            <MovieList></MovieList>
            <AddMovie></AddMovie>
          </div>
        </div>
      </Fragment>
  )
}

// class App extends Component {
//   constructor(props) {
//     super()
//     this.state = {
//       data: [
//         {name:'Vikings',views:832, id:1, favourite: false, like: false},
//         {name:'Ertugrul',views:9482, id:2,favourite: false, like: false},
//         {name:'Wolves',views:2332, id:3, favourite: false, like: false},
//       ],
//       term: '',
//       filter: 'default',
//     }
    
    
//   }

//   onDelete = (id) => {
//       const {data} = this.state
//       const newArr = data.filter(item => item.id !== id)
//       this.setState({data: newArr})
//   }
//   addForm = (item) => {
//     const {data} = this.state
//     this.setState({data:[...data,{...item, id: data.length+1, favourite: false, like: false}]})
//   }
//   onToggle = (id, prop) => {
//     this.setState(({data}) => ({
//       data: data.map(item=>{
//         if(item.id==id) {
//           return {...item,[prop]:!item[prop]}
//         }else {
//           return item
//         }
//       })
//     }))
//   }

//   searchMovie = (arr, term) => {
//     if(term.length == 0) {
//       return arr
//     }
    
//     return arr.filter(item=>item.name.toLowerCase().indexOf(term)>-1)
//   }
//   filterHandler = (arr,filter) => {
//     switch(filter) {
//       case 'like':
//         return arr.filter(item => (item.like));
//       case 'maxViewers':
//         return arr.filter(item => (item.views>1000));
//       default:
//         return arr
//     }
//   }
//   changeTerm = (term) => {
//     this.setState({term})
//   }
//   setFilter = (filter) => {
//     this.setState({filter})
//   }
  

//   render() {
    
//     const {data,term,filter} = this.state
//     let allMovie = data.length
//     const favouriteMovie = data.filter(item=>item.favourite==true).length
//     const updateData = this.filterHandler(this.searchMovie(data,term),filter)
//     return (
//       <Fragment>
//         <div className="app font-monospace">
//           <div className='content'>
//             <MovieInfo allMovie = {allMovie} favouriteMovie={favouriteMovie}></MovieInfo>
//             <div className='search-filter'>
//               <SearchMovie changeTerm={this.changeTerm}></SearchMovie>
//               <FilterMovie filter={filter} setFilter={this.setFilter}></FilterMovie>
//             </div>
//             <MovieList onToggle={this.onToggle} data={updateData} onDelete={this.onDelete} ></MovieList>
//             <AddMovie addForm={this.addForm}></AddMovie>
//           </div>
//         </div>
//       </Fragment>
      
//     );
//   }
// }


export default App;

const searchMovie = (arr,term) => {
    if(term.length === 0) {
      return arr
    }
    
    return arr.filter(item=>item.name.toLowerCase().indexOf(term)>-1)
  }
const filterHandler = (arr,filter) => {
        switch(filter) {
          case 'like':
            return arr.filter(item => (item.like));
          case 'maxViewers':
            return arr.filter(item => (item.views>1000));
          default:
            return arr
        }
  }

export  {searchMovie,filterHandler}
import React from 'react';
import './App.scss';
//import  SelectGenre  from '../src/components/questionsForm/questions.js';



// function App () {
// let movies=[];
  
// useEffect(() => {
//   //fetch movies here
//       console.log('aa');
//  movies = (response) => response.json();
      
  
//   fetch('config/config.json').then((response) => response.json())
//   .then((config)=> {
//     fetch(config.fetch_movies_api_url).then((response) => {console.log(response.json())})
//     .then((list) =>{movies=list}).then(console.log(movies));  
//     }); 
//   }); 

export class App extends React.Component {
  constructor(props) {
    //props=properties are passed to the component
    super(props);
    //where as state is owned by the component
    this.state = {
      //taskitems is an  array
      movielist: [],
      DataisLoaded: false
    };
  }

  componentDidMount() {
    fetch('http://localhost:5001/movies/getmovie')
        .then((response) => response.json())
        .then((json) => {
          this.setState({
            movielist: json,
            DataisLoaded: true
          });
        
      })
    }
    
    // let movielist = [];

    // fetch('http://localhost:5001/movies/getmovie')
    // .then(response => response.json())
    // .then(movielist => this.setState({ movielist }));

   
   
  //   var toJson = (response) => response.json();
  //   //getting taskitems from json

  //   fetch('config/config.json').then((response) => response.json())
  //   .then((config)=> {
  //     fetch(config.fetch_movies_api_url).then((response) => response.json())
  //     .then((movies) =>{
  //       this.setState({ movies });
  //     });
      
  // });

 
      

  

render(){
  const { DataisLoaded, movielist } = this.state;
  if(!DataisLoaded){
    return (
      <div className="div-app">
          <h1>Hi there!</h1>
            {/* <SelectGenre>SelectGenre</SelectGenre> */}
            {
              movielist.map((movie) => (
                <ol key = {movie.id} >
                  Movie_title:  {movie.movieName},
                  Movie_Desc:  {movie.movieDescription}
                </ol>
              ))
            }
      </div>
    );
  }
  else{
    alert("no data")
  }

}
}
export default App;
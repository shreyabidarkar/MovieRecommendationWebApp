import React from 'react';
import ReactDOM from "react-dom";

//updated App.css to App.scss
import './App.scss';
import { Movieitems } from './Movieitems/Movieitems.js';
import  SelectGenre from '../Components/SelectGenre/SelectGenre.js';

//using javascript class here
// IMP! this App component is entire page of display
export class App extends React.Component {

  //class procedure enables usage of contructor
  constructor(props) {

    //props=properties are passed to the component
    super(props);
    let filteredList=[];
    //where as state is owned by the component
    this.state = {
      //taskitems is an  array
      taskitems: [
        
      ]
    };
  }
  

  //this is the vital funtion which is responsible for add new task to the 
  //existing list. This function is called by the Navbar where + sign is there
  create() {
    //setting state
    this.setState((state, props) => ({
      taskitems: [
        //adding task to existing list by ...
        ...state.taskitems, 
        {"title": "Give Title ||", "description": "Give Description"}
      ]
    }));
  }
  postNewTask(task){
    console.log('postNewTask');
   const requestOptions = {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(task)
 };
 fetch('http://localhost:7001/tasks', requestOptions)
     .then(response => response.json());
 }
 deleteTeask(id){
   const uri='http://localhost:7001/tasks/'+id;
  fetch(uri, { method: 'DELETE' })
  .then(() => this.setState({ status: 'Delete successful' }));
 }
putTask(task,id){
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
};
console.log(task);
const uri='http://localhost:7001/tasks/'+id;
 fetch(uri, requestOptions)
     .then(response => response.json())
     .then(data => this.setState({ postId: data.id }));
}

toggleTaskComplete(task,id){
  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(task)
};
console.log(task);
const uri='http://localhost:7001/tasks/status/'+id;
 fetch(uri, requestOptions)
     .then(response => response.json())
     .then(data => this.setState({ postId: data.id }));
}
 
  //used for api fetch to display tasks.json data
  componentDidMount() {
   
    var toJson = (response) => response.json();
    //getting taskitems from json

    fetch('config/config.json').then((response) => response.json())
    .then((config)=> {
      fetch(config.fetch_movies_api_url).then((response) => response.json())
      .then((taskitems) =>{
        this.setState({ taskitems });
      });
      
  }); 

//   fetch('http://localhost:7000/tasks')
//         .then((response) => response.json())
//         .then((taskitems)=> {
//           this.setState({ taskitems })
// });
 }
 
  filterList(filters){
    let tList=[];
    console.log("fL");
    filters.forEach(filter=>{
      this.state.taskitems.forEach(movie=>{
        
        if(movie.movieGenre===filter){

        console.log('filteredItem'+movie.movieName+'genre'+movie.movieGenre);
        tList.push(movie);
         // this.filteredList.push(movie);
          
           
        }
      })
    })
    //<Navigate to="/smthng">

 }

 
  render() {
    const url='https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350';
    return (<div>
      <div>
                <img src= {{uri: 'url'}} alt="display image" />
            </div>
      
      
    </div>);
  }

}



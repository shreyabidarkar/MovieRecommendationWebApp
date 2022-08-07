// import React from 'react';

// import { Task } from '../Task/Task.js';
// //import corresponding scss file
// import './Movieitems.scss';

// export class Movieitems extends React.Component {
    
//     constructor(props) {
//         super(props);
//         const taskitems = this.props.taskitems;
//     }

// state = {
//     divcontainer: false,
// }

// handleCheck(e) {
//     var element =e.target.nextElementSibling;
//     alert(element.style);
// }

// deleteHandler(id){
//     this.props.deleteHandler(id);
// }  
 
// updateTaskHandler(task,id){
//     this.props.updateTaskHandler(task,id);
// }   
// toggleTaskComplete(task,id){
//     this.props.toggleTaskComplete(task,id);
// } 
// filterTask(){

// }
//     render() {
//         let tempList=[]
//         //////////////
//         // const horrorgenre = this.task.filter(
//         //     function(task) {
//         //         if(task.movieGenre === 'Horror'){
//         //             return task;
//         //         }
//         //     }
//         // )
//         ////////////////

//         var Handlechange = e => {
//             this.setState({divcontainer:!this.state.divcontainer});
//         }
//         const x=this.state.divcontainer;
//         //creating a variable for tasks
      
//         const taskitemsElements = this.props.taskitems.map((c, i) =>

//         //key is used to uniquely identify item of each list
//             <li key={i}> 
//            <Task task={c} deleteHandler={this.deleteHandler.bind(this)} 
//            updateTaskHandler={this.updateTaskHandler.bind(this)} 
//            toggleTaskComplete={this.toggleTaskComplete.bind(this)}></Task>
//             </li>);
          
     
//     return (    
//         <div className="container-task" >
            
//             <ul className="ul-items">{ taskitemsElements }</ul>
//         </div>
//         );
//     }
// }

 import React from 'react';
 import { Task } from '../Task/Task.js';
 import './Movieitems.scss';

 export default function Movieitems(props){
     return(
         <div> <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1>
         <h1>HHII Movie List</h1></div>
       
     );
 }
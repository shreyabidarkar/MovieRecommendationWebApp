// import React from 'react';
// import {Movie} from '../movie/movie.js';
// import '../movielist/movielist.scss';

// export class Movielist extends React.Component {

//     constructor(props){
//         super(props);
//         const movielist = this.props.movielist;
//     }

//     state = {
//         divcontainer: false,
//     }


//     render(){
//         var Handlechange = e => {
//             this.setState({divcontainer:!this.state.divcontainer});
//         }

//         const x = this.state.divcontainer;

//         // const movielistElements = this.props.movielist.map((c,i)=>
//         // <li>
//         //     <Movie></Movie>
//         // </li>
//        // );


//         return (
//             <div className="container-movielist">
//                 <ul className="ul-items">
//                     { movielistElements }
//                 </ul>
//             </div>
//         );
//     }
// }
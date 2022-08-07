import '../questionsForm/questions.scss';

import logo from '../assets/tick.png';
import React, {  useState } from "react";

 function SelectGenre () {

  
    let movies=[];
 
    const [documentary,setDocumentary]=useState(false)
    const [horror,setHorror]=useState(false);
    const [romCom,setRomCom]=useState(false);
    const [romance,setRomance]=useState(false);
    const [comedy,setComedy]=useState(false);

    const toggleDocumentary=()=>{
        setDocumentary(!documentary);
    }
    const toggleHorror=()=>{
        setHorror(!horror);
    }
    const toggleRomCom=()=>{
        setRomCom(!romCom); 
    }
    const toggleRomance=()=>{
        setRomance(!romance); 
    }
    const toggleComedy=()=>{
        setComedy(!comedy);
        
        console.log("visibility");
    }

    const submit=()=>{
        let temp=[];
   
        if(documentary){temp.push('documentary')};
        if(horror){temp.push('horror')};
        if(romCom){temp.push('romcom')};
        if(romance){temp.push('romance')};
        if(comedy){temp.push('comedy')};
       
        filter(temp);
    }

    const filter=(array)=>{
        const temp=[];
         array.forEach(element => {
             movies.forEach(e=>{//movies is list of movies fetched in component did mount
              if( e.movieGenre===element){//or use equals ignore case
                  temp.push(e);//add logic to see if mocie already exists in list
              }  
             })
         });
         console.log(temp);
         //filtered list is temp
}



    return ( 
            <div className='container-list'>
                <form className="form-container" >
                    <label><b>Hi Padmu, select a movie genre from below:</b></label>
                    
                    <div className="container-genre">
                        <div className={comedy?"button":"buttonDark"}  onClick={(e)=>{toggleComedy()}}>
                        <p className={comedy?"p-title-dark":"p-title"}>Comedy</p> 
                            {comedy? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}     
                             </div>
                        {/* {comedy? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null} */}
                    </div>

                    <div className="container-genre">
                    <div className={romance?"button":"buttonDark"}  onClick={(e)=>{toggleRomance()}}> 
                    <p className={romance?"p-title-dark":"p-title"}>Romance</p>
                    {romance? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    {/* {romance? 
                           
                           <img src={logo}  className="tick" alt="Logo" />
                           
                            :null} */}
                    </div>

                    <div className="container-genre">
                    <div className={horror?"button":"buttonDark"}  onClick={(e)=>{toggleHorror()}}> 
                    <p className={horror?"p-title-dark":"p-title"}>Horror</p>
                    {horror? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    {/* {horror? 
                            <img src={logo}  className="tick" alt="Logo" />
                            :null} */}
                    </div>

                    <div className="container-genre">
                    <div className={romCom?"button":"buttonDark"}  onClick={(e)=>{toggleRomCom()}}> 
                    <p className={romCom?"p-title-dark":"p-title"}>RomCom</p>
                    {romCom? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    {/* {romCom? 
                            <img src={logo}  className="tick" alt="Logo" />
                            :null} */}
                    </div>

                    <div className="container-genre">
                    <div className={documentary?"button":"buttonDark"}  onClick={(e)=>{toggleDocumentary()}}> 
                    <p className={documentary?"p-title-dark":"p-title"}>Documentary</p>
                    {documentary? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null}  
                     </div>
                    {/* {documentary? 
                             <img src={logo}  className="tick" alt="Logo" />
                             :null} */}
                    </div>
                    <button onClick={submit}>SUBMIT</button>
                 </form>
                
            </div> 
       
        );   
                            };
                    
                        
            
export default SelectGenre;
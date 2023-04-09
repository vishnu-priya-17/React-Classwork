import React,{useState} from 'react' 

import axios from 'axios' 

function Api() 

{ 

const [book,setBook] = useState([]) 

const Books =()=>{ 
    console.log("Clicked") 
axios.get("Get Your Own axios Link from API newsapi.org") .then(( response)=>{ setBook(response.data) }

 ) }

 return ( 
    <>
    <button onClick={FetchNews}>FetchNews</button>  
    </> )
}

 export default Api
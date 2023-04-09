import React,{useState,useEffect} from 'react';

function Hooks()
{
    const [message,setMessage]=useState("Hello dear one,learning React...?")
    useEffect(()=>{
        console.log("use effect hook called")
        setTimeout(()=>{
            setMessage("Great.... This is time to learn about HOOKS")
        },2000)
    })
    return (
        <div>
            <h1>{message}</h1>
        </div>
    );
}

export default Hooks;
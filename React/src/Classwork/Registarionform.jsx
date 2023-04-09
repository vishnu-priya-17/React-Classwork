import React from 'react';
import Submittedform from "./Submittedform";
function Data()
{
    const name=document.getElementById("name").value
    const email=document.getElementById("email").value
    const phone=document.getElementById("phone").value
    const passport=document.getElementById("passport").value
    const travelDate=document.getElementById("travelDate").value
    const returnDate=document.getElementById("returnDate").value
    const destination=document.getElementById("destination").value
    const reason=document.getElementById("reason").value
    console.log(name)
    return(
        <div>
            <Submittedform n={name}/>
        </div>
    )
}
function Registarionform()
{
    return (
        <div>
            <center>
            <form>
                <label>Name</label>
                <br></br>
                <br></br>
                <input id="name"></input>
                <br></br>
                <br></br>
                <label>Email</label>
                <br></br>
                <br></br>
                <input id="email"></input>
                <br></br>
                <br></br>
                <label>Phone</label>
                <br></br>
                <br></br>
                <input id="phone"></input>
                <br></br>
                <br></br>
                <label>Passport</label>
                <br></br>
                <br></br>
                <input id="passport"></input>
                <br></br>
                <br></br>
                <label>Travel date</label>
                <br></br>
                <br></br>
                <input id="travelDate"></input>
                <br></br>
                <br></br>
                <label>Return date</label>
                <br></br>
                <br></br>
                <input id="returnDate"></input>
                <br></br>
                <br></br>
                <label>Destination</label>
                <br></br>
                <br></br>
                <input id="destination"></input>
                <br></br>
                <br></br>
                <label>Reason for travel</label>
                <br></br>
                <br></br>
                <input id="reason"></input>
                <br></br>
                <br></br>
                <button type="button" onClick={Data}>Submit</button>
            </form>
            </center>
        </div>
    );
}

export default Registarionform;
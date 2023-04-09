import React from 'react';

function Submittedform(props)
{
    return (
        <div>
            <center>
                <h1>Submitted Form</h1>
                <label>Name:{props.n}</label>
                <br></br>
                <label>Email:</label>
                <br></br>
                <label>Phone:</label>
                <br></br>
                <label>Passport:</label>
                <br></br>
                <label>Travel Date:</label>
                <br></br>
                <label>Return Date:</label>
                <br></br>
                <label>Destination:</label>
                <br></br>
                <label>Reason for travel:</label>
            </center>
        </div>
    );
}

export default Submittedform;
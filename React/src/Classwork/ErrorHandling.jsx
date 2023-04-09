import React from 'react';

function ErrorHandling()
{
    const name=["Ram","Priya","Sasi","Jaya"];
    const namelist=name.map((n,i)=><li key={i}>{n}</li>)
    return (
        <div>
            <ul>{namelist}</ul>
        </div>
    );
}

export default ErrorHandling;
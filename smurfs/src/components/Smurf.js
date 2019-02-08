import React from 'react'

const Smurf = props => {
    return (
        <div>
            <p>{props.smurf.name} Smurf</p>
            <p>{props.smurf.age} years old</p>
            <p>{props.smurf.height}</p>
        </div>
    )
};

export default Smurf;
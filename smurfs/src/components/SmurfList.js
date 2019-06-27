import React from 'react'

import Smurf from './Smurf'

const SmurfList = props => {
    console.log(props); // It says that I am getting smurfs mapped to props here, I have no clue how to fix the error.
    return (
        <div>
            {props.smurfs.map(smurf => {
                    return <Smurf key={smurf.name} smurf={smurf} />
                })
            }
        </div>
    )
};
export default SmurfList;
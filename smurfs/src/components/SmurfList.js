import React from 'react'

const SmurfList = props => {
    return (
        <div>
            {
                props.smurfs.map(smurf => {
                    return <Smurf key={smurf.name} smurf={smurf} />
                })
            }
        </div>
    )
};
export default SmurfList;
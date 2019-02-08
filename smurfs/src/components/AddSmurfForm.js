import React from 'react'

const AddSmurfForm = props => {
    return (
        <div>
            <form onSubmit={props.addSmurf}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter name here"
                    onChange={props.handleChange}
                    value={props.name}
                />
                <input
                    type="text"
                    name="age"
                    placeholder="Enter age here"
                    onChange={props.handleChange}
                    value={props.age}
                />
                <input
                    type="text"
                    name="height"
                    placeholder="Enter height here"
                    onChange={props.handleChange}
                    value={props.height}
                />
                <button type="submit">Add New Smurf!</button>
            </form>
        </div>
    )
};
export default AddSmurfForm;
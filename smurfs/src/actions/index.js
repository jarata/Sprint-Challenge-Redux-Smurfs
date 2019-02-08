/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
import axios from 'axios'
/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const SMURFS_FETCHING = 'SMURFS_FETCHING';
export const SMURFS_ADDING = 'SMURFS_ADDING';
export const SMURFS_ERROR = 'SMURFS_ERROR';
export const SMURFS_SUCCESS = 'SMURFS_SUCCESS';
export const SMURFS_ADDED = 'SMURFS_ADDED';

export const getSmurf = () => dispatch => {
    dispatch({ type: SMURFS_FETCHING });
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            // console.log(response)
            dispatch({ type: SMURFS_SUCCESS, payload: response.data })
        })
        .catch(error => dispatch({ type: SMURFS_ERROR, payload: error })
        )
}
export const addSmurf = smurf => dispatch => {
    dispatch({ type: SMURFS_ADDING });
    axios
        .post('http://localhost:3333/smurfs', newSmurf)
        .then(response => {
            console.log()
        })
}
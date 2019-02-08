/*
  Be sure to import in all of the action types from `../actions`
*/
import { SMURFS_FETCHING, SMURFS_ERROR, SMURFS_ADDED, SMURFS_ADDING, SMURFS_SUCCESS } from "../actions";
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const initialState = {
    smurfs: [],
    fetchingSmurfs: false,
    addingSmurf: false,
    addedSmurf: false,
    updatingSmurf: false,
    deletingSmurf: false,
    error: null
};
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        case SMURFS_FETCHING:
            return {
                ...state,
                fetchingSmurfs: true,
            }
        case SMURFS_SUCCESS:
            return {
                ...state,
                fetchingSmurfs: false,
                error: null,
                smurfs: action.payload
            }
        case SMURFS_ERROR:
            return {
                ...state,
                error: action.payload,
                fetchingSmurfs: false
            }
        default:
            return state;
    }
}
export default smurfReducer;
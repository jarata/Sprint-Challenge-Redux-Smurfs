import React, { Component } from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import { connect } from 'react-redux'
import { getSmurf } from '../actions'
import SmurfList from "./SmurfList";


class App extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.getSmurf();
        // console.log(this.props)
    }

    render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
          <SmurfList smurfs={this.props.smurfs} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
    error: state.error,
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs
})

export default connect(
    mapStateToProps,
    {
        getSmurf
    }
)(App);
// const initialState = {
//     smurfs: [],
//     fetchingSmurfs: false,
//     addingSmurf: false,
//     updatingSmurf: false,
//     deletingSmurf: false,
//     error: null
// };
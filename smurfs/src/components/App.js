import React, {Component} from 'react';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
import {connect} from 'react-redux'
import {getSmurf} from '../actions'
import {addSmurf} from "../actions";
import SmurfList from "./SmurfList";
import AddSmurfForm from "./AddSmurfForm";


class App extends Component {
    constructor() {
        super();
        this.state = {
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    componentDidMount() {
        this.props.getSmurf();
        // console.log(this.props)
    }

    handleChange = event => {
        this.setState({
            smurf: {
                ...this.state,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return (
            <div className="App">
                <h1>SMURFS! 2.0 W/ Redux</h1>
                <div>Welcome to your Redux version of Smurfs!</div>
                <div>Start inside of your `src/index.js` file!</div>
                <div>Have fun!</div>
                <AddSmurfForm />
                <div>
                    <SmurfList smurfs={this.props.smurfs}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: state.error,
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
    addedSmurf: state.addedSmurf
})

export default connect(
    mapStateToProps,
    {
        getSmurf,
        addSmurf
    }
)(App);
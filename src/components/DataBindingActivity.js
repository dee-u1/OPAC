import React from 'react';

class DataBindingActivity extends React.Component{
    state = {
        firstName: '',
        lastName: ''
    }

    inputChangeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    reset = () => {
        this.setState({
            firstName: '',
            lastName: ''
        })
    }

    render(){
        return(
            <div>
                First name: <input 
                    type="text"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.inputChangeHandler}
                /><br />
                Last name: <input 
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.inputChangeHandler}
                /><br />
                <button onClick={this.reset}>Reset</button>
                <h1>Welcome back, {this.state.firstName} {this.state.lastName}!</h1>
            </div>
        );
    }
}

export default DataBindingActivity;
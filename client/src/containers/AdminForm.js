import React, { Component } from 'react'
import { connect } from 'react-redux'
import { sessionActions } from '../actions/session'


class AdminForm extends Component {

    state = {credentials: {username: '', password: ''}}

    handleOnChange = event => {
        const field = event.target.name;
        const credentials = this.state.credentials;
        credentials[field] = event.target.value;
        this.setState({credentials: credentials});
    }

    handleOnSubmit = event => {
        event.preventDefault()
        
        fetch('http://10.0.0.99:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({auth: this.state.credentials})
        })
        .then(resp => resp.json())
        .then(data => data)
        // .catch(err => console.log(err))
        this.props.actions.logInUser(this.state.credentials)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit} >
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleOnChange} value={this.state.credentials.username}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleOnChange} value={this.state.credentials.password}/>
                        <input type="submit" name="submit" value="login"/>
                    </div>
                </form>
            </div>
        )
    }

}


export default connect(null, { sessionActions })(AdminForm)

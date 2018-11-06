import React, { Component } from 'react'


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
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" onChange={this.handleOnChange} value={this.state.credentials.username}/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" onChange={this.handleOnChange} value={this.state.credentials.password}/>
                    </div>
                </form>
            </div>
        )
    }

}


export default AdminForm

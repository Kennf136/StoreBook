import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class UsersFedLogin extends Component {
    render() {
        return (
            <div>
             <Link to={'/UserFeed'}>  <button>Log in </button></Link>
            </div>
        );
    }
}

export default UsersFedLogin;
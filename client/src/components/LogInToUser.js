import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class LinkToUser extends Component {
    render() {
        return (
            <div>
             <Link to={'/Users'}>  <button>Log in </button></Link>
            </div>
        );
    }
}

export default LinkToUser;
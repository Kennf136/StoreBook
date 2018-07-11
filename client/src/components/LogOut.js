import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LogOut extends Component {
    render() {
        return (
            <div>
             <Link to={'./stores'} >  <button>Log Out </button></ Link>
            </div>
        );
    }
}

export default LogOut;
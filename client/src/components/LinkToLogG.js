import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LinkToLo extends Component {
    render() {
        return (
            <div>
             <Link to={'/group'}>  <button>Manager </button></Link>
            </div>
        );
    }
}

export default LinkToLo;
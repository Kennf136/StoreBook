import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import HomeFeedButton from "./HomeFeedButt"

class HomeFeedButt extends Component {
    render() {
        return (
            <div>
             <Link to={'./UserFeed'}>  <button> Home </button> </Link>
            </div>
        );
    }
}

export default HomeFeedButt;
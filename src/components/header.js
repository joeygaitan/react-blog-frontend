import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() { 
        return (
            <div className="jumbotron">
                <h1 className="">Joey's Blog</h1>
                <p>I am steve the compiler</p>
                <Link to = '/addblog'><button type="button" className="btn btn-primary">Add Blog</button></Link>
            </div>
        );
    }
}
 
export default Header;
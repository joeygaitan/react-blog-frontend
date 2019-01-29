import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Blog from './blog'

class BlogItems extends Component {

    render(){
        console.log(this.items)
        return (
                <React.Fragment>
                            <div className = "container">
                                <div className= "row"><h1>blogs</h1></div>
                                <div className = "row">
                                    
                                            <div className="list-group">
                                                { this.props.items.map(blog =>
                                                    <Link to = {`/${blog.id}`} key={blog.id}><button type="button" className="list-group-item list-group-item-action" > {blog.header}</button></Link>
                                                )}
                                            </div>
                                </div>
                            </div>
                </React.Fragment>
            )
    }
}

export default BlogItems;

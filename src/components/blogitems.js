import React from 'react';
import home from './home';

function BlogItems(props){
        return (
            <React.Fragment>
                    
                        <div className = "container">
                        <row><h1>blogs</h1></row>
                            <div className = "row">
                                    <div className="list-group">
                                        { props.items.map(blog =>
                                            <a href="#" className="list-group-item list-group-item-action" key={blog.id}> {blog.header}</a>
                                        )}
                                    </div>
                            </div>
                        </div>
            </React.Fragment>
        )
}

export default BlogItems

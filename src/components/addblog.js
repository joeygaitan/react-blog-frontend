import React, {Component} from 'react';
import Header from './header';


class AddBlog extends Component {
    render() { 
        return (
        <div>
            <Header/>
            <container>
                <row></row>
                <row>
                    <column span = "10">hello</column>
                    <column span = "2">
                        <form id="post-form" action="/posts/">
                            <div className="form-group">
                                <label for="title">Title</label>
                                <input type="text" className="form-control" value=""></input>
                            </div>

                            <div className="form-group">
                                    <label for="title">Content</label>
                                    <textarea class="form-control" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-info btn-large">Create New Post</button>
                        </form>
                    </column>
                </row>
            </container>
        </div> );
    }
}
 
export default AddBlog;
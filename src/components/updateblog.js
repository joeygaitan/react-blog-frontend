import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpdateBlog extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            header: "",
            desc: ""
        }
    }

    onUpdate = (event) =>{
        this.setState({
           [event.target.name] : event.target.value
        })
    }
    
    updatedSubmit = (event) => {
        event.preventDefault();

        this.props.update(this.props.match.params.id, this.state)
        console.log(this.props.reloader(), 'I am in here please read me')
        this.props.submitted()
    } 
    
    render() { 
        console.log(this.props.match.params.id)
        return ( 
            <div className="container">
                <br/>
                <form id="post-form" onSubmit={this.updatedSubmit}>
                        <div className="form-group">
                            <label>Title</label>
                            <input name ="header" type="text" className="form-control" value={this.state.header} onChange={this.onUpdate}></input>
                        </div>
                        <div className="form-group">
                            <label>Content</label>
                            <textarea name = "desc" className="form-control" rows="3" value={this.state.desc} onChange={this.onUpdate}></textarea>
                        </div>
                        <button type="submit" className="btn btn-info btn-large">Update Blog</button>
                </form>
                <br/>
                <Link to = {`/${this.props.match.params.id}`}><button className="btn btn-info btn-large">Cancel</button></Link>
            </div>
         );
    }
}
 
export default UpdateBlog;
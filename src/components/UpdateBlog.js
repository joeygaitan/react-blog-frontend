import React, { Component } from 'react';

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

        this.props.updateBlog(this.props.match.params.id, this.state)
        this.props.ifClicked()
        this.props.history.push(`/${this.props.match.params.id}`)
    } 

    clicked =()=>{
        this.props.ifClicked()
    }
    
    render() { 
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
                <button className="btn btn-info btn-large" onClick={this.clicked}>Cancel</button>
            </div>
         );
    }
}
 
export default UpdateBlog;
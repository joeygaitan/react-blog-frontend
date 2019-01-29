import React, {Component} from 'react';
import HeaderNo from './HeaderNo';
import { Link } from 'react-router-dom';

class AddBlog extends Component {

    constructor(props){
        super(props);

        this.state = {
            header: "",
            desc: ""
        }
    }

    change = (event) =>{
        this.setState({
           [event.target.name] : event.target.value
        })
    }
    
    onSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state)

        this.props.history.push('/')
    }

    render() { 
        return (
        <div>
            <HeaderNo/>
            <div className="column">
                <div className="row"></div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <form id="post-form" onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label>Title</label>
                                <input name ="header" type="text" className="form-control" value={this.state.header} onChange={this.change}></input>
                            </div>
                            <div className="form-group">
                                    <label>Content</label>
                                    <textarea name = "desc" className="form-control" rows="3" value={this.state.desc} onChange={this.change}></textarea>
                            </div>
                            <button type="submit" className="btn btn-info btn-large">Create New Post</button>
                        </form>
                        <br/>
                        <Link to = '/'><button className="btn btn-info btn-large">Cancel</button></Link>
                    </div>
                </div>
                </div>
            </div> );
    }
}
 
export default AddBlog;
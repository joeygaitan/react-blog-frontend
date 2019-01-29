import React, { Component } from 'react';
import axios from 'axios';
import Header from './header';
import { Link } from 'react-router-dom';
import UpdateBlog from './updateblog';


class Blog extends Component {
    constructor(props){
        super(props)

        this.state = {
            blog : {},
            open: false
        }
    }
    componentDidMount(){
        this.getBlog()
    }

    getBlog = () => {
        const id = this.props.match.params.id

        axios.get(`${process.env.REACT_APP_API_URL}/blogs/${id}`)
        .then(res=>{
            const blog = res.data;
            this.setState({ blog, open: false })
        })
        .catch((error)=>{
            console.log(error);
         })
    }

    delete = () => {
       this.props.delete(this.props.match.params.id)
       this.props.history.push('/')
    }

    ifClicked = (event) => {
       this.setState({open: !this.state.open})
    }

    updateBlog = async (id, blog) => {
        axios.put(`${process.env.REACT_APP_API_URL}/blogs/${id}`, blog)
        .then(res=>{
          console.log(res.data);
          this.getBlog()
        })
        .catch((error)=>{
          console.log(error)
        })
      }

    render() {
        return ( 
            <div>
            <Header/>
            <div className="container">
                    <div className="row">
                        <div className="col-8-sm"> 
                                    <div className="card" style={{width: "18rem"}}>
                                    <div className="card-body">
                                    <h5 className="card-title">{this.state.blog.header}</h5>
                                    <p className="card-text">{this.state.blog.desc}</p>
                                    <button className="btn btn-info btn-large" onClick={this.ifClicked}>Update</button> <button className="btn btn-info btn-large" onClick={this.delete}>Delete</button> <Link to = '/'><button className="btn btn-info btn-large">Cancel</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-4-sm">
                            {this.state.open ? <UpdateBlog {...this.props} updateBlog = {this.updateBlog}/> :  null}
                        </div>
                    </div>
            </div>
            </div>
         );
    }
}
 
export default Blog;
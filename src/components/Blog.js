import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import { Link } from 'react-router-dom';
import UpdateBlog from './UpdateBlog';
import BlogItems from './BlogItems';


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

    static getDerivedStateFromProps(props, state){
        return {
            blog: props.blogs.find(ele => ele.id === props.match.params.id) || {}        
        }
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

    render() {
        return ( 
            <div>
            <Header/>
            <div className="container">
                    <div><h1 style={{scrollPaddingLeft: "30px"}}>blogs</h1></div>
                    <div className="row">
                        <div className="col-md" style={{paddingBottom: "30px"}}>
                        <BlogItems items = {this.props.blogs} UpdateBlog = {this.UpdateBlog}/>
                        </div>
                        <div className="col-md"> 
                                    <div className="card" style={{width: "18rem"}}>
                                    <div className="card-body">
                                      <h5 className="card-title">{this.state.blog.header}</h5>
                                      <p className="card-text">{this.state.blog.desc}</p>
                                    <button className="btn btn-info btn-large" onClick={this.ifClicked}>Update</button> <button className="btn btn-info btn-large" onClick={this.delete}>Delete</button> <Link to = '/'><button className="btn btn-info btn-large">Cancel</button></Link>
                                    </div>
                                    </div>
                        </div>
                        <div className="col-md" style={{paddingBottom: "30px"}}>
                            {this.state.open ? <UpdateBlog {...this.props} updateBlog = {this.props.update} ifClicked = {this.ifClicked}/> :  null}
                        </div>
                    </div>
            </div>
            </div>
         );
    }
}
 
export default Blog;
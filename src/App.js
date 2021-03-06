import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AddBlog from './components/AddBlog';
import Home from './components/Home';
import Blog from './components/Blog';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      blogs: []
    }
  }

  componentDidMount = async () => { 
    this.getBlogs()
  }
 
  getBlogs = async () => {
      axios.get(`${process.env.REACT_APP_API_URL}/blogs`)
      .then(res=>{
        const blogs = res.data;
        this.setState({ blogs })
      })
      .catch((error)=>{
        console.log(error);
      })
  }

  addBlog = async (blog) => {

    axios.post(`${process.env.REACT_APP_API_URL}/blogs`, blog)
      .then(res => {
        this.getBlogs()
      })
      .catch((error)=>{
        console.log(error);
      })
  } 

  deleteBlog = async (id) => {
  
    axios.delete(`${process.env.REACT_APP_API_URL}/blogs/${id}`)
    .then(res => {
      this.getBlogs()
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  updateBlog = async (id, blog) => {
    axios.put(`${process.env.REACT_APP_API_URL}/blogs/${id}`, blog)
    .then(res=>{
      this.getBlogs()
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  

  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
        <Route exact path='/' render = {(props) => <Home {...props} items = {this.state.blogs}/>}/>
        <Route path='/addblog' render = {(props) => <AddBlog {...props} add = {this.addBlog}/>}/>
        <Route path= '/:id' render = {(props) => <Blog {...props} delete = {this.deleteBlog} update = {this.updateBlog} blogs={this.state.blogs}/>}/>
        </Switch>
        </div>
      </BrowserRouter>
  
    );
  }
}

export default App;

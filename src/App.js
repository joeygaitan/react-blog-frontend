import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogItems from './components/blogitems';
import AddBlog from './components/addblog';
import Home from './components/home';

//add react router
class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      blogs: []
    }
  }



  componentDidMount = () => { 
    this.getBlogs()
  }
 
  getBlogs = async () => {
    try{
      const res = await fetch(`${process.env.REACT_APP_API_URL}/blogs`)
      const blogs = await res.json()
      this.setState({ blogs } )
    }
    catch(e){
      console.error(e)
    }
  }

  addBlog = async (blog) => {
    // post reqest
    const res = await fetch(`{process.env.REACT_APP_API_URL}/blogs`, {
      method: 'POST',
      body: JSON.stringify(blog),
      headers: {
        'Content-type': 'Tpplication.json',
        'Accept': 'application/json'
      },
      body: {
        "header":this.state.blogs.header,
        "desc":this.state.blogs.desc
      }
    })
    this.getBlogs()
  } 

  // async createItem(item) {
  //   const response = await fetch('http://localhost:8082/api/people', {
  //     method: 'POST',
  //     body: JSON.stringify(item),
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //     }
  //   })
  //   const person = await response.json()
  //   this.setState({people: [...this.state.people, person]})
  // }



  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path='/' render = {(props) => <Home {...props} items = {this.state.blogs}/>}/>
        <Route path='/addblog' component = {AddBlog}/>
        {/* <Route exact path='/blogs' render = {(props)=> <blogs {...props} items = {this.state.blogs}/>}/> */}
        {/* <Route exact path ='/blogs/:id' */}
        {/* <Route path='/blogs/updateblog' render = {}/> */}
        </Switch>
        {/* <Route path='/'  render={(props) => <AddBlogs {...props} items = {this.state.blogs}/>}/> */}
      </BrowserRouter>
  
    );
  }
}

export default App;

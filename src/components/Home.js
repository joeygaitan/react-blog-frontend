import React from 'react';
import BlogItems from './BlogItems';
import Header from './Header';

const Home = props => 
  <div>
    <Header/>
    <div className="container">
      <div className= "row"><h1 style={{scrollPaddingLeft: "120px"}}>blogs</h1></div>
      <BlogItems  items = {props.items}/>
    </div>
  </div>

export default Home
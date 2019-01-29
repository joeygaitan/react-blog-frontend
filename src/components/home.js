import React from 'react';
import BlogItems from './blogitems';
import Header from './header';

const Home = props => 
  <div>
    <Header/>
    <div className="container">
      <div className= "row"><h1 style={{scrollPaddingLeft: "120px"}}>blogs</h1></div>
      <BlogItems  items = {props.items}/>
    </div>
  </div>

export default Home
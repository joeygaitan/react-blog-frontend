import React from 'react';
import BlogItems from './blogitems';
import Header from './header';

const Home = props => 
  <div>
    <Header/>
    <BlogItems  items = {props.items}/>
  </div>

export default Home
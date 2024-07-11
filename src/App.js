import React from 'react';
import './App.css';
import Comment from './component/Comment';
import Footer from './component/Footer';
import Menu from './component/Menu';
import Slider from './component/Slider';

function App() {
  return (
    <div className="container-fluid">
      <Menu/>
      <Slider/>
      <Comment/>
      <Footer/>
    </div>
  );
}

export default App;

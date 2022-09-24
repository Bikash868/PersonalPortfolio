import React from 'react';
import NavBar from './NavBar';
import HomePage from './Homepage';
import About from './About'
import Footer from './Footer';
function App() {
  return (
    <div className="App flex flex-col">
      <NavBar/>
      <Footer/> 
    </div>
  );
}

export default App;

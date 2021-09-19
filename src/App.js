import React from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Cart from './pages/CartItem';
function App() {
  return (<>
  
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route  exact path="/" component={Cart}/>
      <Route exact path="/contact" component={Contact} />
 
    </Switch>
   <Footer/>
</>
  );
}

export default App;

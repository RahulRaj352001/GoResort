// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Header from './components/Header'

import {Route,Switch} from 'react-router-dom'
import Footer from './components/Footer';
function App() {
    
  return (
    <>
<header>
    <Header/>
</header>

    <Switch>

    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/rooms/:slug" component={SingleRoom}/>
    <Route component={Error}/>
    </Switch>

  <Footer/>   
    </>
  );
}

export default App;
    


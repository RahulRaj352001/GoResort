// import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Header from './components/Header'

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
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
    </>
  );
}

export default App;
    


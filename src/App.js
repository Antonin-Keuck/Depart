import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';  
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import './App.css';


function App() {  
  return (
    <Router>
    <div className="App">
      <Navbar/>
    </div>

        <Switch>
          <Route path="/" exact component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;

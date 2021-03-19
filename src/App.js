import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';  
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import {RouterData} from './Components/RouterData'
import TemplatePage from './pages/TemplatePage'
import Team from './pages/Team'
import './App.css';


function App() {  
  return (
    <Router>
    <div className="App">
      <Navbar/>
    </div>

        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/travel" exact component={Home}/>
          {/* <Route path="/team" exact component={Team}/> */}
        {RouterData.map((item, index) => {
          return (
            <Route key={index} path={item.path} exact component={() => (TemplatePage(item.title, item.icon, item.about, item.page))}/>
          )
        })}
        {/* <Route path="/team" exact component={() => (TemplatePage() ) }/> */}
        </Switch>
    </Router>
  );
}

export default App;

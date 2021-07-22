import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-circular-progressbar/dist/styles.css';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import {Home, TemplatePage, Team, Travel} from './pages'
import {RouterData} from './Components/RouterData'
import './App.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
    </div>
        <Switch>
          {/* <Route path="/" exact component={Home}/> */}
          {/* <Route path="/" exact component={Contact}/> */}
          {/* <Route path="/team" exact component={Team}/> */}
          {/* <Route path="/travel" exact component={Travel}/> */}
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

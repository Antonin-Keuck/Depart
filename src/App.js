
import 'react-circular-progressbar/dist/styles.css';
import logo from './logo.svg';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import Advancement from './Advancement'
import './App.css';



function App() {

  return (
    <div className="App">
      <Advancement status="Départ" depart="08/15/2021" greenFirst={true}/>
      <Advancement status="Retour" depart="05/27/2022"greenFirst={false}/>
    </div>
  );
}

export default App;

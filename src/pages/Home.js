import Advancement from '../Components/Advancement'


const Home = () => (
    <div>
      <Advancement status="Départ" depart="08/15/2021" greenFirst={true}key="0"/>
      <Advancement status="Retour" depart="05/27/2022"greenFirst={false} key="1"/>
    </div>
)
  

export default Home
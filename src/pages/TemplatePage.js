import './TemplatePage.css'
import Pictures from '../Components/Pictures'
import {FaRegSmileWink} from 'react-icons/fa'


const TemplatePage = (name, icon, about) => (
    <div className="tempPage-wraper">
        <div className="tempPage-header">
            <h1 className="tempPage-title"> <span className="tempPage-icon">{icon} </span>  {name} </h1>
            <h2 className="tempPage-title-2"> {about} </h2>
        </div>
        <div className="tempPage-text">
            Vous vous trouvez pour l'instant sur une page template, cela signifie que je n'ai pas encore trouvé le temps (ou la motivation de la faire <FaRegSmileWink/> )
        </div>
        <Pictures/>

    </div>
)

export default TemplatePage


{/* <div class="main">

<h1>MYLOGO.COM</h1>
<hr>

<h2>PORTFOLIO</h2>
<p>Resize the browser window to see the responsive effect.</p>

<!-- Portfolio Gallery Grid -->
<div class="row">
  <div class="column">
    <div class="content">
      <img src="mountains.jpg" alt="Mountains" style="width:100%">
      <h3>My Work</h3>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img src="lights.jpg" alt="Lights" style="width:100%">
      <h3>My Work</h3>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img src="nature.jpg" alt="Nature" style="width:100%">
      <h3>My Work</h3>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="column">
    <div class="content">
      <img src="mountains.jpg" alt="Mountains" style="width:100%">
      <h3>My Work</h3>
      <p>Lorem ipsum..</p>
    </div>
  </div>
</div>

<div class="content">
  <img src="bear.jpg" alt="Bear" style="width:100%">
  <h3>Some Other Work</h3>
  <p>Lorem ipsum..</p>
</div>

<!-- END MAIN -->
</div> */}
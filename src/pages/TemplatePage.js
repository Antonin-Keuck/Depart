import './TemplatePage.css'
import Pictures from '../Components/Pictures'
import {FaRegSmileWink} from 'react-icons/fa'
import { render } from '@testing-library/react'


const  TemplateToFill = () => (
        <div>
            <div className="tempPage-text">
            Vous vous trouvez pour l'instant sur une page template, cela signifie que je n'aie pas encore trouvé le temps (ou la motivation de la faire <FaRegSmileWink/> )
            </div>
            <div className="tempPage-picture-container">
                <Pictures/>
            </div>
        </div>
)


const TemplatePage = (name, icon, about, page) => (
    <div className="tempPage-wraper">
        <div className="tempPage-header">
            <h1 className="tempPage-title"> <span className="tempPage-icon">{icon} </span>  {name} </h1>
            <h2 className="tempPage-title-2"> {about} </h2>
        </div>
        {page ? page : <TemplateToFill/>}

    </div>
)

export default TemplatePage
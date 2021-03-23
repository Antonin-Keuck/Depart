import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {RouterData } from './RouterData'
import { IconContext } from 'react-icons';
import "./Navbar.css"



function refreshPage() {
  window.location.reload();
}

function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const sidebarHiddenIsActive = useRef(false);

  let topScroll = document.body.getBoundingClientRect().top

  const handleScroll = () => {
    const currentTop = document.body.getBoundingClientRect().top;

    if (currentTop > topScroll) {
        if (sidebarHiddenIsActive.current)
            setSidebar(true)
      setNavbar(true)
    } else {
      setNavbar(false)
      setSidebar(false)
    }
    topScroll = currentTop
  }

  const showSidebar = () => {

    setSidebar(!sidebar)
    sidebarHiddenIsActive.current = !sidebar

    if (sidebarHiddenIsActive.current == false) {
      // console.log("j'desactive")
      window.removeEventListener("click", showSidebar)
    }
    // console.log("sidebar hidden status : " + sidebarHiddenIsActive.current)
  };


  useEffect(() => {
    if (sidebarHiddenIsActive.current) {
      // console.log("j'active")
      window.addEventListener("click", showSidebar)
    } else {

      // console.log("j'desactive")
      window.removeEventListener("click", showSidebar)
    }

    // console.log("did it works ?  " + sidebarHiddenIsActive.current) 
  }, [sidebarHiddenIsActive.current])

  useEffect(() => {
    // window.addEventListener("click", (event) => {
      // console.log("sidebar hidden: " + sidebarHiddenIsActive.current)
      // if (sidebarHiddenIsActive.current)
        // setSidebar(false)
    // } );
      window.addEventListener("scroll", handleScroll)
  }, [])

    return (
      <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="wrapperTopNavbar">
          <div className={navbar ? 'navbar' : 'navbar hidden'}>
          <div className='menu-openItem'>
            <FaBars onClick={showSidebar} />
            </div>
            <Link to="/travel"  className='wraperTitle'>
            <h1 className='navbarTitle' onClick={() => setSidebar(false)} >A n t o n i n</h1>
            </Link>
          </div>
        </div>
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
              <li className='navbar-toggle' onClick={showSidebar}>
                <div className='menu-bars'>
                  <AiOutlineClose />
                </div>
              </li>
              {RouterData.map((item, index) => {
                  return (
                      <li key={index} className={item.cName} onClick={showSidebar}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
                );
            })}
            </ul>
          </nav>
        </IconContext.Provider>
      </>
    );
}

export default Navbar
import React, {useState, useEffect, useRef, useLayoutEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {SidebarData } from './SidebarData'
import { IconContext } from 'react-icons';
import "./Navbar.css"


function Navbar() {
  const [navbar, setNavbar] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  let topScroll = document.body.getBoundingClientRect().top

  const showSidebar = () => setSidebar(!sidebar);

  const handleScroll = () => {
    const currentTop = document.body.getBoundingClientRect().top;

    if (currentTop > topScroll) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
    topScroll = currentTop
  }
  
  useEffect(() => {
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
            <Link to="/" className='wraperTitle'>
            <h1 className='navbarTitle'>A n t o n i n</h1>
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
              {SidebarData.map((item, index) => {
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



// const Navbar = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(0); 
//   const [visible, setVisible] = useState(true);  

//   const handleScroll = debounce(() => {
//     const currentScrollPos = window.pageYOffset;

//     setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

//     setPrevScrollPos(currentScrollPos);
//   }, 100);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);

//   }, [prevScrollPos, visible, handleScroll]);

//   const navbarStyles = {
//     position: 'fixed',
//     height: '60px',
//     width: '100%',
//     backgroundColor: 'grey',
//     textAlign: 'center',
//     transition: 'top 0.6s' 
//   }

//   return (
//     <div style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}>  
//       Some Company Inc.
//     </div>
//   );
// };

// export default Navbar;
export default Navbar
import logo from '../images/logo.png';
import './Navbar.css'
import React, {useState, useEffect} from 'react'

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

  }, [])
  return (
    <div>
    <nav className= 'navbar background h-nav'>
        <div className="lefthalf">
                <a href="/"><img src={logo} alt="Logo" /></a>
                {(toggleMenu || screenWidth > 831) && (
                <ul className='navlist v-class'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/course">Course</a></li>
                <li><a href="/contactus">Contact us</a></li>
            </ul>
             )}
        </div>
        <div className='righthalf v-class'>
          <a href="/" className='spanlink'><h3>Codify <span>Programming</span></h3></a> 
        </div>
        <div className='burger' onClick={toggleNav}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
    </nav>
</div>
  )
}

export default Navbar
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useEffect, useRef } from 'react'
import { signout } from '../../firebase'

const Navbar = () => {

  const navRef = useRef()

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark')
      }else{
        navRef.current.classList.remove('nav-dark')
      }
    })
  }, [])

  return (
    <div className='navbar' ref={navRef}>
      
      <div className="navbar-left">

        <img src={logo} alt="Logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>

      </div>

      <div className="navbar-right">

        <img src={search_icon} alt="search icon" className='icons'/>
        
        <p>Children</p>

        <img src={bell_icon} alt="bell icon" className='icons'/>

        <div className="navbar-profile">
          
          <img src={profile_img} alt="profile image" className='profile'/>
          <img src={caret_icon} alt="profile" />

          <div className='dropdown'>
            <p onClick={()=> {signout()}}>Sign out of Kayflix</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Navbar

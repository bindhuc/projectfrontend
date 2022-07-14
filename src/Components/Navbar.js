import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className='Title'>
        <div className='sub-title1'>The</div>
        <div  className='sub-title2'>Sieren</div>
      </div>
        <div className='header'>
            <ul type="none">
                <Link to="/Home" className='Home-css'><li>Home</li></Link>
                <Link to="/Tourism" className='Home-css' ><li>Tourism</li></Link>
                <Link to="/Hollywood" className='Home-css'><li>Hollywood</li></Link>
                <Link to="/Technology" className='Home-css'><li>Technology</li></Link>
                <Link to="/Bollywood" className='Home-css'><li>Bollywood</li></Link>
                <Link to="/Food" className='Home-css'><li>Food</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar





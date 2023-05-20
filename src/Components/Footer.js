import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      
      <NavLink to='create'><button>NEW NOTE</button></NavLink>
      <NavLink to='settings'><button>SETTINGS</button></NavLink>
      

    </div>
  )
}

export default Footer

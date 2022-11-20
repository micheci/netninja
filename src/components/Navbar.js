import {Link} from 'react-router-dom'

import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className="container">
            <Link to="/">
                Workout Buddy
            </Link>
        </div>
    </header>
  )
}

export default Navbar
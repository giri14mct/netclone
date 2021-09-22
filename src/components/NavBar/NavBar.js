import React, { useState, useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'
import { movieContext } from '../../App'

const NavBar = () => {

    //For open and close icon
    const [iconClick, setIconClick] = useState(false)

    //For  Use context
    const [selectedMovie, setSelectedMovie] = useContext(movieContext)

    //Netflix logo url
    const logo_url = 'https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg'

    const clearAbout = () => {
        //For clear context
        setSelectedMovie([{
            movieName: '',
            movieImg: '',
            movieOverView: '',
            movieOrigin: '',
            releasedYear: null,
            movieRating: null
        }])
    }

    return (
        <>
            <header >
                <nav>
                    <div className='navBarContainer'>

                        {/* Home Logo */}
                        <Link to='/' className="navBarLogo" onClick={clearAbout}> <img src={logo_url} alt='' /> </Link>

                        {/* Nav Links starts here */}
                        <div className='menuIcon' onClick={() => setIconClick(!iconClick)}>
                            <i className={iconClick ? 'fas fa-times' : 'fas fa-bars'} />
                        </div>
                        <ul className={iconClick ? 'nav-menu active' : 'nav-menu'}>
                            <li className='navItem'>
                                <NavLink to='/' exact={true} activeStyle={{ color: '#5754a8' }} className='navLinks' onClick={() => setIconClick(!iconClick)} >
                                    Home
                                </NavLink>
                            </li>
                            <li className='navItem'>
                                <NavLink to='/TvShows' activeStyle={{ color: '#5754a8' }} className='navLinks' onClick={() => setIconClick(!iconClick)} >
                                    TV Shows
                                </NavLink>
                            </li>
                            <li className='navItem'>
                                <NavLink to='/Movies' activeStyle={{ color: '#5754a8' }} className='navLinks' onClick={() => setIconClick(!iconClick)} >
                                    Movies
                                </NavLink>
                            </li>
                            <li className='navItem'>
                                <NavLink to='/Popular' activeStyle={{ color: '#5754a8' }} className='navLinks' onClick={() => setIconClick(!iconClick)} >
                                    New & Popular
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default NavBar

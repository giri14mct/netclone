import React, { useContext } from 'react'
import { img_300, unavailable } from "../../config"
import { movieContext } from '../../App'
import './About.css'

const About = () => {
    //For use context
    const [selectedMovie, setSelectedMovie] = useContext(movieContext)

    return (
        <>
            <div className="aboutContainer">
                <div className='movieCard'>
                    <div className="moviePoster" >
                        <img src={selectedMovie.movieImg ? `${img_300}${selectedMovie.movieImg}` : `${unavailable}`} alt={selectedMovie.movieName} />
                    </div>
                    <div className="movieContent" >
                        <h2>{selectedMovie.movieName}</h2>
                        <h3 className='movieYear'>{`${selectedMovie.releasedYear.slice(0, 4)}`}</h3>
                        <p className='movieContentView'>{selectedMovie.movieOverView}</p>
                        <p className='movieRating'>{`Rating : ${selectedMovie.movieRating}`}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

import React, { useContext } from 'react'
import { img_300, unavailable } from "../../config"
import './HomeDisplayer.css'
import { movieContext } from '../../App'
import { Link } from 'react-router-dom'


const HomeDisplayer = ({
    id,
    poster,
    title,
    date,
    media,
    overView,
    rating
}) => {
    const [selectedMovie, setSelectedMovie] = useContext(movieContext)
    //To update Context
    const aboutDisplayer = () => {
        setSelectedMovie({
            movieName: title,
            movieImg: poster,
            movieOverView: overView,
            releasedYear: date.slice(0, 4),
            movieRating: rating
        })
    }

    return (
        <Link to='/About' className='link' onClick={aboutDisplayer}>
            <div className='homePoster'>
                <img key={id} src={poster ? `${img_300}${poster}` : `${unavailable}`} alt={title} />
            </div>
        </Link>
    )
}

export default HomeDisplayer

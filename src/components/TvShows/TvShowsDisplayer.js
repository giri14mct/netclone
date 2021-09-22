import React, { useContext } from 'react'
import '../Style/Displayer.css'
import { Link } from 'react-router-dom'
import { movieContext } from '../../App'
import { img_300, unavailable } from "../../config"

const TvShowsDisplayer = ({
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
            releasedYear: date,
            movieRating: rating
        })
    }

    return (
        <>
            <Link to='/About' className='link' onClick={aboutDisplayer}>
                <div className="displayerContainer">
                    <img className="displayerPoster" src={poster ? `${img_300}${poster}` : `${unavailable}`} alt={title} />
                    <h2 className='displayerTitle'>{title}</h2>
                    <span className='displayerTitle'>{`${date.slice(0, 4)}`}</span>
                </div>
            </Link>
        </>
    )
}

export default TvShowsDisplayer

import React, { useState, useEffect } from 'react'
import MovieDisplayer from './MovieDisplayer'
import '../Style/Parent.css'
import axios from 'axios'

const Movies = () => {
    //For update Movies data
    const [movieContent, setMovieContent] = useState([])

    //For Fetching movie data
    useEffect(() => {
        const fetchMovieContent = async () => {
            const result = await axios.get(
                'https://api.themoviedb.org/3/discover/movie?api_key=60d45c4e9e6d4672c45ca37a50c7f9be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate '
            );
            setMovieContent(result.data.results)
        }
        fetchMovieContent()
    }, [])

    return (
        <>
            <div className='parentContainer'>
                {movieContent.map((data) =>
                    <MovieDisplayer
                        key={data.id}
                        id={data.id}
                        poster={data.poster_path}
                        title={data.title || data.name}
                        date={data.release_date || data.first_air_date}
                        overView={data.overview}
                        rating={data.vote_average}
                    />
                )}
            </div>
        </>
    )
}

export default Movies

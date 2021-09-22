import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TvShowsDisplayer from './TvShowsDisplayer'
import '../Style/Parent.css'

const TvShows = () => {
    //For update TvShows data
    const [tvShowContent, setTvShowContent] = useState([])

    //For Fetching TvShow data
    useEffect(() => {
        const fetchTvShowContent = async () => {
            const result = await axios.get(
                'https://api.themoviedb.org/3/tv/popular?api_key=60d45c4e9e6d4672c45ca37a50c7f9be&language=en-US&page=1'
            );
            setTvShowContent(result.data.results)
        }
        fetchTvShowContent()
    }, [])

    return (
        <>
            <div className='parentContainer'>
                {tvShowContent.map((data) =>
                    <TvShowsDisplayer
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

export default TvShows

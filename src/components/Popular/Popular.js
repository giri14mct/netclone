import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TrendingDisplayer from './TrendingDisplayer'
import '../Style/Parent.css'

const Enquiry = () => {
    //For update Trending data
    const [trendingContent, setTrendingContent] = useState([])

    //For Fetching Trending data
    useEffect(() => {
        const fetchTrendingContent = async () => {
            const result = await axios.get(
                'https://api.themoviedb.org/3/trending/all/day?api_key=60d45c4e9e6d4672c45ca37a50c7f9be'
            );
            setTrendingContent(result.data.results)
        }
        fetchTrendingContent()
    }, [])

    return (
        <>
            <div className='parentContainer'>
                {trendingContent.map((data) =>
                    <TrendingDisplayer
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

export default Enquiry

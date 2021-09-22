import React, { useState, useEffect } from 'react'
import './Home.css'
import HomeDisplayer from './HomeDisplayer'
import axios from 'axios'
const Home = () => {
    //For Home component use
    const [trendingContent, setTrendingContent] = useState([])
    const [movieContent, setMovieContent] = useState([])
    const [tvShowContent, setTvShowContent] = useState([])

    //Fetching Trending data
    useEffect(() => {
        const fetchTrendingContent = async () => {
            const result = await axios.get(
                'https://api.themoviedb.org/3/trending/all/day?api_key=60d45c4e9e6d4672c45ca37a50c7f9be'
            );
            setTrendingContent(result.data.results)
        }
        fetchTrendingContent()
    }, [])

    //Fetching Movie data
    useEffect(() => {
        const fetchMovieContent = async () => {
            const result = await axios.get(
                'https://api.themoviedb.org/3/discover/movie?api_key=60d45c4e9e6d4672c45ca37a50c7f9be&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate '
            );
            setMovieContent(result.data.results)
        }
        fetchMovieContent()
    }, [])

    //Fetching TvShow data
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
        <div className='home'>

            {/* For Trending Content Displayer */}

            <h2 className='homeTitle'>Trending</h2>
            <div className="homeContainer">
                {trendingContent.map((data) =>
                    <HomeDisplayer
                        key={data.id}
                        id={data.id}
                        displayerTitle='Trending'
                        poster={data.poster_path}
                        title={data.title || data.name}
                        date={data.release_date || data.first_air_date}
                        overView={data.overview}
                        rating={data.vote_average}
                    />
                )}
            </div>

            {/* For TVshows Content Displayer */}

            <h2 className='homeTitle'>TvShows</h2>
            <div className='homeContainer'>
                {tvShowContent.map((data) =>
                    <HomeDisplayer
                        displayerTitle='TvShows'
                        key={data.id}
                        id={data.id}
                        poster={data.poster_path}
                        title={data.title || data.name}
                        date={data.release_date || data.first_air_date}
                        overView={data.overview}
                        rating={data.vote_average}
                        media={data.media_type}
                    />
                )}
            </div>

            {/* For Trending Content Displayer */}

            <h2 className='homeTitle'>Movies</h2>
            <div className='homeContainer'>
                {movieContent.map((data) =>
                    <HomeDisplayer
                        key={data.id}
                        id={data.id}
                        poster={data.poster_path}
                        title={data.title || data.name}
                        date={data.release_date || data.first_air_date}
                        overView={data.overview}
                        rating={data.vote_average}
                        media={data.media_type}
                    />
                )}
            </div>
        </div>
    )
}

export default Home

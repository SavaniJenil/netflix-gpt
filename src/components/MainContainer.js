import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";


const MainContainer = () => {

    const movies = useSelector(store => store.movies?.upcomingMovies);

    if(movies === null) return;
    const randomNumber = Math.floor(Math.random() * 20);

    const mainMovie = movies[randomNumber];

    const { original_title, original_language, id, overview, poster_path, release_date, vote_average, vote_count  } = mainMovie
    return (

        <div className="pt-32 bg-black md:bg-transparent md:pt-0">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground id={id} />
        </div>
    );

}

export default MainContainer;
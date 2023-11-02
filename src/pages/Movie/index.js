import Banner from "../../components/Banner"
import image from "../../assets/images/banner-player.png"
import { useLocation } from "react-router-dom"

const Movie = () => {

    let { state } = useLocation()

    let movie = state.movie[0]

    function searchForMovieOnGoogle(){
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(movie.title)}`
        window.open(searchUrl, '_blank')
    }

    return(
        <>
            <Banner image={image} />
            <section className="bg-slate-900 text-zinc-100 flex flex-col items-center ">
                <h1 className="text-3xl py-5">{movie.title}</h1>

                <div className="flex gap-1 flex-wrap text-center pb-3">
                    <p>·</p>
                    <p>{movie.year}</p>
                    <p>·</p>
                    {movie.genres.map((genre) => {
                        return(
                            <>
                                <p>{genre}</p>
                                <p>·</p>
                            </>
                        )
                    })}
                </div>
                <img src={movie.thumbnail} alt={movie.title + 'banner'} className="rounded-md" />

                <p className="py-7 text-lg px-10 md:px-24 lg:px-44 xl:px-64 2xl:px-96">{movie.extract}</p>

                <button className="uppercase my-10 p-3 rounded-md transition-colors bg-slate-700 hover:bg-slate-800" onClick={() => searchForMovieOnGoogle()}>
                    Where to watch
                </button>
            </section>
        </>
    )
}

export default Movie
import favoritar from "./favoritar.png"
import desfavoritar from "./desfavoritar.png"

import { useFavoriteContext } from "../../context/Favorites"
import { Link } from "react-router-dom"

const MovieTrack = ({ API, genre }) => {
    
    const filter = API.filter((movie) => movie.genres[0] === genre)
    const filtered = filter.slice(1, 7)

    const {favorite, addFavorite} = useFavoriteContext()

    return(
        <section className="px-5 pt-10 bg-slate-900 text-zinc-100" >
            <h2 className="text-3xl pb-4">{genre} movies</h2>

            <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 justify-items-center gap-10">
                {filtered.map((movie) => {
                    
                    const element = [movie]

                    return(
                        <div key={movie.title}>
                            <Link to={'Movie/' + movie.title} state={{movie:element}}>
                                <img src={movie.thumbnail} alt={movie.title} className="rounded-md h-96" />
                            </Link>
                            <ul className="flex justify-between px-1 py-2">
                                <li><h2>{movie.title}</h2></li>
                                <li className=" hover:cursor-pointer" onClick={() => addFavorite(movie) }>
                                    {favorite.some((fav) => fav.title === movie.title) ? <img src={desfavoritar} alt="favoritar" /> : <img src={favoritar} alt="desfavoritar" />}
                                </li>
                            </ul>
                        </div>
                    )
                })}
            </section>
        </section>
    )
}

export default MovieTrack
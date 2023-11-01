import { useState } from "react"

import favoritar from "./favoritar.png"
import desfavoritar from "./desfavoritar.png"

const MovieTrack = ({ API, genre }) => {
    
    const filter = API.filter((movie) => movie.genres[0] === genre)
    const filtered = filter.slice(1, 7)

    const [favorite, setFavorite] = useState(false)

    function favorites(title){
        console.log(title)
        setFavorite(!favorite)
    }

    return(
        <section className="px-5 pt-10 bg-slate-900 text-zinc-100" >
            <h2 className="text-2xl pb-2">{genre} movies</h2>

            <section className="flex items-center justify-between gap-10">
                {filtered.map((movie) => {
                    return(
                        <div key={movie.title}>
                            <img src={movie.thumbnail} alt={movie.title} className=" h-96" />
                            <ul className="flex justify-between px-1 py-2">
                                <li><h2>{movie.title}</h2></li>
                                <li onClick={() =>favorites(movie.title)}>{favorite ? <img src={desfavoritar} alt="Favorite icon" /> : <img src={favoritar} alt="Unfavorite icon" />  }</li>
                            </ul>
                        </div>
                    )
                })}
            </section>
        </section>
    )
}

export default MovieTrack
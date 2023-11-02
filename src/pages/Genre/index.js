import Banner from "../../components/Banner"
import image from "../../assets/images/banner-favoritos.png"
import MovieTrack from "../../components/MovieTrack"

import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Genre = () => {
    let { state } = useLocation()
    let genre = state.genre
    let [moviesToLoad, setMovies] = useState(19)

    const [Api, setApi] = useState([])

    useEffect(()=>{
        async function getApi(){
            const api = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json')
            const apiJson = await api.json()

            setApi(apiJson)
        }
        getApi()
    },[])

    function loadMore(){
        setMovies(moviesToLoad + 6)
        console.log(moviesToLoad)
    }

    return(
        <section className="bg-slate-900">
            <Banner image={image} />
            <MovieTrack API={Api} genre={genre} number={moviesToLoad} />
            <div className="flex justify-center py-16">
                <button className="uppercase p-3 rounded-md transition-colors text-zinc-100 bg-slate-700 hover:bg-slate-800" onClick={() => loadMore()}>
                    Load more
                </button>
            </div>
        </section>
    )
}

export default Genre
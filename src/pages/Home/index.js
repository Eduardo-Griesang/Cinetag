import Banner from "../../components/Banner"

import image from "../../assets/images/banner-home.png"
import { useEffect, useState } from "react"
import MovieTrack from "../../components/MovieTrack"

const Home = () => {

    const [Api, setApi] = useState([])

    useEffect(()=>{
        async function getApi(){
            const api = await fetch('https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2020s.json')
            const apiJson = await api.json()

            setApi(apiJson)
        }

        getApi()
    },[])

    console.log(Api)
 
    return(
        <>
            <Banner image={image} />

            <MovieTrack API={Api} genre="Horror" number={7} />
            <MovieTrack API={Api} genre="Action" number={7} />
            <MovieTrack API={Api} genre="Comedy" number={7} />
            <MovieTrack API={Api} genre="Drama" number={7} />
            <MovieTrack API={Api} genre="Mystery" number={7} />
            <MovieTrack API={Api} genre="Animated" number={7} />
            <div className=" bg-slate-900 py-10"></div>
        </>
    )
}

export default Home
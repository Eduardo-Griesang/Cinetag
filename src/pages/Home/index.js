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

    return(
        <>
            <Banner image={image} />

            <MovieTrack API={Api} genre="Horror" />
            <MovieTrack API={Api} genre="Action" />
            
        </>
    )
}

export default Home
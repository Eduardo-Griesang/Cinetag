import { Link } from "react-router-dom"

import scarecrow from "./Scarecrow.png"


const NotFound = () => {
    return(
        <section className="flex flex-col items-center">
            <h1 className="text-2xl py-10 pl-5 font-bold">404 NOT FOUND</h1>
            <img src={scarecrow} alt="404 Scarecrow" />
            <span className="text-lg px-2 pt-3">The page you are looking for might be removed or is temporarily unavailable.</span>
            <button className="py-12 flex "><Link to='./' className="bg-slate-900 text-zinc-100 p-3">BACK TO HOMEPAGE</Link></button>
        </section>
    )
}

export default NotFound
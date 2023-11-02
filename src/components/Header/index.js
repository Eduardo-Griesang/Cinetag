import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.png"

const Header = () => {
    return(
        <header className="flex flex-col lg:flex-row lg:px-10 justify-between py-7 transition-colors bg-slate-950 text-zinc-100 items-center">
           <Link to='./' className="pb-5 lg:pb-0"><img src={logo} alt="Logo CineTag" /></Link>

           <nav className="flex gap-20 uppercase">
                <ul>
                    <li className="hover:text-zinc-300"><Link to='./'>Home</Link></li>
                </ul>
                <ul>
                    <li className="hover:text-zinc-300"><Link to='./favorites'>Favorites</Link></li>
                </ul>
            </nav> 
        </header>
    )
}

export default Header
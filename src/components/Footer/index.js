import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <footer className="flex justify-between px-40 py-7 bg-slate-950 text-zinc-100 align-middle text-xl">
            <h5>Developed by Eduardo</h5>
            <ul className="flex gap-10">
                <li>
                    <a href="https://github.com/Eduardo-Griesang"><FontAwesomeIcon icon={faGithub} style={{color: "#f4f4f5",}} size="lg" /></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/eduardo_griesang/"><FontAwesomeIcon icon={faInstagram} style={{color: "#f4f4f5",}} size="lg" /></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/eduardo-griesang/"><FontAwesomeIcon icon={faLinkedin} style={{color: "#f4f4f5",}} size="lg" /></a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer
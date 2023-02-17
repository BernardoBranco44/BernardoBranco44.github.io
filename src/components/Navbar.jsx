import { useContext } from "react"
import { NavigationContext } from "../App";
import { Link } from "react-router-dom";
import PDF from "../assets/BernardoBranco-CV.pdf";

export default function Navbar() {

  const {ExecuteScroll, projectsRef, aboutRef, contactRef} = useContext(NavigationContext)

  return (
    <div className="navbar">
      <Link to="/">
      <svg width="88" height="60" viewBox="0 0 88 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.69873 28.4641L44 6.9282L81.3013 28.4641V71.5359L44 93.0718L6.69873 71.5359V28.4641ZM44 0L87.3013 25V75L44 100L0.69873 75V25L44 0ZM33.8693 35.9091V65H45.6449C47.8703 65 49.7169 64.6544 51.1847 63.9631C52.6525 63.2718 53.7509 62.3295 54.4801 61.1364C55.2093 59.9337 55.5739 58.5795 55.5739 57.0739C55.5739 55.5966 55.2708 54.3371 54.6648 53.2955C54.0587 52.2538 53.2775 51.4489 52.321 50.8807C51.3741 50.303 50.3845 49.9858 49.3523 49.929V49.6449C50.2992 49.4176 51.1562 49.0436 51.9233 48.5227C52.6903 48.0019 53.3011 47.3248 53.7557 46.4915C54.2102 45.6487 54.4375 44.6354 54.4375 43.4517C54.4375 42.0123 54.0871 40.7244 53.3864 39.5881C52.6951 38.4517 51.6487 37.5568 50.2472 36.9034C48.8551 36.2405 47.108 35.9091 45.0057 35.9091H33.8693ZM44.8068 60.5966H39.1392V52.0739H44.9489C46.0379 52.0739 46.9754 52.2775 47.7614 52.6847C48.5474 53.0824 49.1534 53.6316 49.5795 54.3324C50.0057 55.0237 50.2188 55.8002 50.2188 56.6619C50.2188 57.8172 49.7926 58.7642 48.9403 59.5028C48.0975 60.232 46.7197 60.5966 44.8068 60.5966ZM44.3523 48.2812H39.1392V40.2557H44.4659C46.0189 40.2557 47.1884 40.6203 47.9744 41.3494C48.7699 42.0786 49.1676 43.0066 49.1676 44.1335C49.1676 44.9858 48.9545 45.7244 48.5284 46.3494C48.1117 46.965 47.5388 47.4432 46.8097 47.7841C46.0805 48.1155 45.2614 48.2812 44.3523 48.2812Z" fill="#DF367C"/>
      </svg>
      </Link>
      <button onClick={() => ExecuteScroll(aboutRef)}><span className="navbar-index">01.</span> About</button>
      <button onClick={() => ExecuteScroll(projectsRef)}><span className="navbar-index">02.</span> Work</button>
      <button onClick={() => ExecuteScroll(contactRef)}><span className="navbar-index">03.</span> Contact</button>
      <button><a className="resume-link" href={PDF} target="_blank">Resume</a></button>

    </div>
  )
}

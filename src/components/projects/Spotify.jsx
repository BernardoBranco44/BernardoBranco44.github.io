import spotify1 from "../../assets/spotify-clone/spotify-login.png";
import spotify2 from "../../assets/spotify-clone/spotify-clone-home.png";
import spotify3 from "../../assets/spotify-clone/spotify-list.png";
import { useEffect } from "react";
import { FaGithub, FaSpotify } from "react-icons/fa";

export default function Spotify() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className="project-page-main container">
      <h1>Spotify Clone</h1>
      <div className="d-flex mt-4">
        <p className="project-desc">This is another of my practice projects. I
        used the Spotify API which I'll admit, wasn't the easiest of tasks. The
        main focus was making it look good, the functionality was more an extra.
        It does let the user login from spotify, load the actual user playlists,
        let you select songs from the discover weekly to play as remote play and
        allows you to pause and play. I couldn't deploy it for some reason that
        I have not figured out, I will return to it but I want to practice and
        get my hands on other stuff.
        </p>
        <div className="tech-div">
          <h4 className="tech">Technologies</h4>
          <p className="tech-desc">React, SpotifyAPI</p>
        </div>
        <div className="d-flex flex-column">
          {/* <a href="" target="_blank"  className="project-link">Project Demo <FaSpotify /></a> */}
          <a href="https://github.com/BernardoBranco44/spotify-clone" target="_blank"  className="code-link">Project Code <FaGithub /></a>
        </div>
      </div>
      <div id="carouselExample" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={spotify1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={spotify2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={spotify3} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

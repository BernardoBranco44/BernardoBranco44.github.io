import spotify1 from "../../assets/spotify-clone/spotify-login.png";
import spotify2 from "../../assets/spotify-clone/spotify-clone-home.png";
import spotify3 from "../../assets/spotify-clone/spotify-list.png";

export default function Spotify() {
  return(
    <div className="project-page-main container">
      <h1>Spotify Clone</h1>
      <div className="d-flex mt-4">
        <p className="project-desc">I used this project as a way to practice. One of the goals was to
          pratice using a more complex API
        </p>
        <div className="tech-div">
          <h4 className="tech">Technologies</h4>
          <p className="tech-desc">React, SpotifyAPI</p>
        </div>
        <div className="d-flex flex-column">
          <button>Project Demo</button>
          <button>Project Code</button>
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

import youtube1 from "../../assets/youtube-clone/youtube-clone-home.png"
import youtube2 from "../../assets/youtube-clone/youtube-video.png"
import youtube3 from "../../assets/youtube-clone/youtube-react-screen.png"
import youtube4 from "../../assets/youtube-clone/youtube-search.png"
import youtube5 from "../../assets/youtube-clone/youtube-channel.png"
import { useEffect } from "react";
import { FaGithub, FaYoutube } from "react-icons/fa";


export default function Youtube() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className="project-page-main container">
      <h1>Youtube Clone</h1>
      <div className="d-flex mt-4">
        <p className="project-desc">This is one of my practice projects.
        One of the goals was to force myself to use an external component
        library to get a feel for it. It is responsive and I'm happy with the
        way it turned out. First time working with this API so it was a great
        challenge, the biggest problem I have is sometimes the channel profile
        pictures won't load. Material UI's components were great to use and
        experiment, the inline styling on the components is not my favorite but
        I wanted to try it, now i know.
        </p>
        <div className="tech-div">
          <h4 className="tech">Technologies</h4>
          <p className="tech-desc">React, Material UI, Rapid API</p>
        </div>
        <div className="d-flex flex-column">
          <a href="https://bernardobranco44.github.io/youtube-clone" target="_blank" className="project-link">Project Demo <FaYoutube /></a>
          <a href="https://github.com/BernardoBranco44/youtube-clone" target="_blank" className="code-link">Project Code <FaGithub /></a>
        </div>
      </div>
      <div id="carouselExampleIndicators" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={youtube1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={youtube2} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={youtube3} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={youtube4} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={youtube5} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

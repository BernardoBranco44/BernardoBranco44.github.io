import { useEffect } from "react";
import { FaGithub, FaTruck } from "react-icons/fa";

export default function Materialised() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return(
    <div className="project-page-main container">
      <h1>Materialised</h1>
      <div className="d-flex mt-4">
        <p className="project-desc">This was the project we completed at the
        bootcamp, teams of 4 and everyone worked on both backend and frontend
        </p>
        <div className="tech-div">
          <h4 className="tech">Technologies</h4>
          <p className="tech-desc">Ruby on Rails, Bootstrap</p>
        </div>
        <div className="d-flex flex-column">
          <a href="http://www.materialised.shop/" target="_blank" className="project-link">Project Demo <FaTruck /></a>
          <a href="https://github.com/sbloxy123/materialised" target="_blank" className="code-link">Project Code <FaGithub /></a>
        </div>
      </div>
      <iframe className="w-100 video-player" src="https://www.youtube.com/embed/O-verHIhV88" title="YouTube video player"  allowFullScreen></iframe>
    </div>
  )
}

import { FaLinkedinIn, FaGithubAlt, FaArrowUp } from "react-icons/fa";

export default function Contact() {

  function ScrollToTop() {
    console.log("hello")
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return(
    <div className="footer">
      <h4 className="footer-email">bernardomspbranco@gmail.com</h4>
      <div className="footer-logos">
        <a href="https://www.linkedin.com/in/bernardo-branco4/" target="_blank" className="footer-logo">
          <FaLinkedinIn  />
        </a>
        <a href="https://github.com/BernardoBranco44" target="_blank" className="footer-logo">
          <FaGithubAlt  />
        </a>
      </div>
      <p className="footer-info">Designed and built by Bernardo Branco</p>
      <div className="footer-arrow" onClick={() => ScrollToTop()}>
        <FaArrowUp />
      </div>
    </div>
  )
}

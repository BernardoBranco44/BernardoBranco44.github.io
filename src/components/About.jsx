
export default function About() {

  return(
    <div className="about-info-container">
      <div className="about-info">
        <h3>About</h3>
        <p>
          Hello! My name is <span className="pink-text">Bernardo Branco</span>, I'm located in Portugal and I love
          coding, especially in the web development world. My interest started
          through a friend who said that I'd probably enjoy it, and as expected,
          he was right.
        </p>
        <p>
          I started learning frontend on my own and it quickly became my
          day-to-day, soon after that I enrolled in and completed <span className="pink-text">Le Wagon's
          fullstack bootcamp</span>. It opened my eyes to the fullstack world and I love
          every part of it. Now I try to improve on the things I already know and
          keep learning new ones.
        </p>
        <p>
          Here are some of the technologies I've been working on:
        </p>
          <ul>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Typescript</li>
            <li>Redux</li>
            <li>Next.js</li>
          </ul>
      </div>
      <div className="image-div">
        <div className="image-set">
          <div className="color-overlay"></div>
        </div>
      </div>
    </div>
  )
}

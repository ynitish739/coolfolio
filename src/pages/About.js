import PageLayout from '../components/Layout/PageLayout';

import HomeButton from '../components/Nav/HomeButton';
import anya from '../images/backgrounds/anya.png';

function About() {
  const TITLE = 'About Me'; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'Everything you want to know to about me ';




  const CONTENT = <>
    <section id="about">
      <div className="about-container">
        <div className="text-section">
          <p>
            <strong>Hey There! I'm Nitish 🚀</strong>
          </p>
          <p>
            So, I'm in my final year of computer science, and it's been one wild ride! I'm basically a tech chameleon who can switch between programming languages faster than you can say "code".
            My passion? Building cool stuff that solves real problems and pushes technological boundaries.
          </p>
          <p>
            My current main skills are centered around <strong>Java, Spring Boot, Node.js, React, and full-stack development</strong>, with a strong focus on creating robust and scalable applications. I've been diving deep into technologies that allow me to build end-to-end solutions that make a real difference.
          </p>
          {/* <p>
            The technologies that are currently sparking my curiosity are DevOps, Machine Learning, and emerging tech innovations. I'm always on the lookout for opportunities to expand my knowledge and push my technical boundaries.
          </p> */}
          <p>
            <strong>The Learning Superpower 💨</strong>
          </p>
          <p>
            If there's one thing I excel at, it's learning at warp speed. 450+ DSA problems, competitive coding challenges, and an insatiable curiosity are just part of my DNA. <u>Give me a new technology, and I'll not just learn it - I'll make it look easy.</u>
          </p>
          <p>
            Want to see what happens when curiosity meets code? Let's connect! 😄
          </p>
        </div>
        <div className="image-section">
          <img src={anya} alt="Your" className="about-image" />
        </div>
      </div>
    </section>

  </>;

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default About;

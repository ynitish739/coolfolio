import PageLayout from '../components/Layout/PageLayout';

// import Card from '../components/UI/Card';
import HomeButton from '../components/Nav/HomeButton';
import anya2 from '../images/backgrounds/anya2.png';
// import testImg from '../images/test-image.jpg';

function Skills() {
  const TITLE = 'Skills'; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'In short about my skills';

  const CONTENT = (
    <>
      <div className="skills-section">
        <div className="image-container">
          <img src={anya2} alt="Profile" /> {/* Replace with your image path */}
        </div>
        <div className="skills-container">
          <h2>Skills</h2>
          <ul>
            {/* <li className="category">Technical Skills</li> */}
            <li className="category">Programming Languages</li>
            <li>Java (Core, J2EE), Python, JavaScript, C/C++, PHP, HTML5, CSS3</li>
  
            <li className="category">Frameworks & Libraries</li>
            <li>
              Spring Boot, Spring MVC, Spring Security, Node.js, AngularJS, Hibernate, React
            </li>
  
            <li className="category">Databases</li>
            <li>MongoDB, MySQL, PostgreSQL</li>
  
            <li className="category">Testing & Tools</li>
            <li>JUnit 5, Mockito, Maven, Git/GitHub, OAuth 2.0</li>
  
            <li className="category">Soft Skills</li>
            <li>
              Data Structures & Algorithms, Problem Solving, Critical Thinking
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default Skills;

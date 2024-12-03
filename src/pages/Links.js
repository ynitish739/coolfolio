import PageLayout from '../components/Layout/PageLayout';

import Card from '../components/UI/Cards/Card';
import HomeButton from '../components/Nav/HomeButton';

import testImg from '../images/test-image.jpg';
import hack from '../images/icons/hack.png';
import leetcode from '../images/icons/leetcode.webp';
import linkdln from '../images/icons/linkdln.png';
import resume from '../images/icons/resume.png';
import github from '../images/icons/github.webp';

function Links() {
  const TITLE = 'Links'; // optional, null blank the title with be the location.pathname
  const SUBTITLE = 'Connect With ME';

  const CONTENT = (
    <>
      <div className="links-section">
        <div className="contact">
          <p>Email: <a href="mailto:ynitish739@gmail.com">ynitish739@gmail.com</a></p>
        </div>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/nitish-yadav-40569a238/" // Replace with your LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkdln} alt="LinkedIn" />
          </a>
          <a
            href="https://leetcode.com/u/nitish12a4372/" // Replace with your LeetCode profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={leetcode} alt="LeetCode" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/ynitish739" // Replace with your HackerRank profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={hack} alt="HackerRank" />
          </a>
          <a
            href="https://github.com/ynitish739" // Replace with your GitHub profile link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="GitHub" />
          </a>
          <a
            href="https://drive.google.com/file/d/1DD99nsBBFTtbE3ArCWsWLhCdt_kvsG11/view?usp=sharing" // Replace with your resume drive link
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={resume} alt="Resume" />
          </a>
        </div>
      </div>
    </>
  );

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default Links;

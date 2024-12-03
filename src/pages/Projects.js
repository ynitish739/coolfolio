import { useEffect, useState } from 'react';

import PageLayout from '../components/Layout/PageLayout';

import ProjectCard from '../components/UI/Cards/ProjectCard';
import HomeButton from '../components/Nav/HomeButton';

import projectsWip from '../images/projects/projectsWip.webp';
import ai from '../images/projects/ai.webp';
import pgp from '../images/projects/pgp.jpg';
import tmdb from '../images/projects/tmdb.jpg';
import todo from '../images/projects/todo.png';
import wall from '../images/projects/wall.png';
function Projects() {
  const [projects, setProjects] = useState([]);
  let projectsList = '';

  // timeout in hours to refresh the localStorage cache
  const REFRESHTIMEOUT = 5;

  // useEffect(() => {
  //   //  fetch list of repos from github, set the data state to the fetched data and store it in localStorage with a timestamp
  //   async function fetchProjects() {
  //     fetch('https://api.github.com/users/ethanernst/repos').then(response =>
  //       response.json().then(data => {
  //         console.log('fetched new data from github');
  //         setProjects(data);

  //         localStorage.setItem(
  //           'projectsCache',
  //           JSON.stringify({
  //             data: [...data],
  //             timestamp: Date.now(),
  //           })
  //         );
  //       })
  //     );
  //   }

  //   // check the age of cache and refresh the data if cache is older than the REFRESHTIMEOUT
  //   function validateCache(cache) {
  //     const cacheAgeInHours = (Date.now() - cache.timestamp) / (1000 * 60 * 60);
  //     if (cacheAgeInHours > REFRESHTIMEOUT) {
  //       console.log(
  //         'cache is older than REFRESHTIMEOUT, purging cache and fetching new data'
  //       );
  //       localStorage.removeItem('projectsCache');
  //       fetchProjects();
  //     } else {
  //       console.log('valid cache, loaded data from localStorage');
  //       setProjects(cache.data);
  //     }
  //   }

  //   // check if projectsCache key exists with a timestamp
  //   const projectsCache = JSON.parse(localStorage.getItem('projectsCache'));
  //   if (
  //     !projectsCache ||
  //     !projectsCache?.data.length ||
  //     !projectsCache?.timestamp
  //   ) {
  //     console.log('cache is invalid, purging cache and fetching new data');
  //     localStorage.removeItem('projectsCache');
  //     fetchProjects();
  //   } else {
  //     validateCache(projectsCache);
  //   }
  // }, []);

  // if (projects) {
  //   projectsList = projects.map((project, i) => (
  //     <ProjectCard
  //       key={i}
  //       image={`https://raw.githubusercontent.com/ethanernst/${project.name}/main/thumbnail.jpg`}
  //       title={project.name}
  //       description={project.description}
  //       githubUrl={project.html_url}
  //       projectUrl={project.homepage}
  //     />
  //   ));
  //   projectsList.push(
  //     <ProjectCard
  //       key={projectsList.length}
  //       image={projectsWip}
  //       title="Coming soon!"
  //       description="Another project in the works"
  //     />
  //   );
  // }

  const TITLE = 'Projects'; // optional, if null the title with be the location.pathname
  const SUBTITLE = 'Here are some projects I have been working on';

  const CONTENT = (
    <>
      <ProjectCard
        image={pgp}
        title={' Pgp based Messaging System'}
        description={'An Encrypted Messaging System that uses RSA encryption to secure messages.'}
        githubUrl={'https://github.com/ynitish739/SecureMail-End-to-End-Encrypted-Messaging-System'}
      />
      <ProjectCard
        image={todo}
        title={'Todo API'}
        description={'Fully authenticated with JWT a REST api project to manage tasks and subtasks'}
        githubUrl={'https://github.com/ynitish739/TodoApiWithJWT'}
      />
      <ProjectCard
        image={tmdb }
        title={'MoviesLocator API'}
        description={'It fetches data from The Movie Database (TMDB) to get trending movies of the week'}
        githubUrl={'https://github.com/ynitish739/TrendingMoviesProviderAPI'}
      />
      <ProjectCard
        image={ai}
        title={'Document Summarizer'}
        description={'It uses Groq Ai to Summarize your provided Document files'}
        githubUrl={'https://github.com/ynitish739/AiDocSummarizer'}
      />
      <ProjectCard
        image={wall}
        title={'Wallpaper app'}
        description={'It Displays the best anime wallpaper app you can set or download'}
        githubUrl={'https://github.com/ynitish739/anime-Wpaper'}
      />
      <ProjectCard
        image={projectsWip}
        title={'Comming Soon'}
        description={'More projects Comming Soon'}
      />

    </>
  );

  const NAV = <HomeButton />;

  return (
    <PageLayout title={TITLE} subtitle={SUBTITLE} content={CONTENT} nav={NAV} />
  );
}

export default Projects;

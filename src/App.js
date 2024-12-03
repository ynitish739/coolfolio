import { createRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RouteAnimator from './components/RouteAnimator';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Links from './pages/Links';
import NotFound from './pages/NotFound';

export const routes = [
  {
    path: '/',
    name: 'Home',
    animation: 'center',
    element: <Home />,
    nodeRef: createRef(),
  },
  {
    path: '/projects',
    name: 'Projects',
    animation: 'left',
    element: <Projects />,
    nodeRef: createRef(),
  },
  {
    path: '/about',
    name: 'About',
    animation: 'down',
    element: <About />,
    nodeRef: createRef(),
  },
  {
    path: '/links',
    name: 'Links',
    animation: 'right',
    element: <Links />,
    nodeRef: createRef(),
  },
  {
    path: '/skills',
    name: 'Skills',
    animation: 'up',
    element: <Skills />,
    nodeRef: createRef(),
  },
  {
    path: '*',
    name: '404',
    animation: 'center',
    element: <NotFound />,
    nodeRef: createRef(),
  },
];

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <RouteAnimator routes={routes} />,
//     children: routes.map(route => ({
//       index: route.path === '/',
//       path: route.path === '/' ? undefined : route.path,
//       element: route.element,
//     })),
//   },
// ]);
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RouteAnimator routes={routes} />,
      children: routes.map(route => ({
        index: route.path === '/',
        path: route.path === '/' ? undefined : route.path,
        element: route.element,
      })),
    },
  ],
  { basename: '/coolfolio' }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

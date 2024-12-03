import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  .background {
    position: absolute;
    pointer-events: none;
    top: 50%;
    left: 50%;
    overflow: hidden;

    /* filter: brightness(75%); */
    transition: transform 150ms ease-out;

    z-index: var(--z-index-home-background);
  }
`;

const Popouts = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  transition: all 0.2s ease-out;
  z-index: var(--z-index-home-popout);

  .up {
    position: inherit;
    width: 100%;
    height: 10%;
    left: 0;
    top: 0;
    transform: translateY(-100%);
    opacity: 0;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;

    transition: all 0.2s ease-in-out;
    background-color: var(--skills);
  }

  .up-active {
    opacity: 1;
    transform: translateY(0%);
  }

  .down {
    position: inherit;
    width: 100%;
    height: 10%;
    left: 0;
    bottom: 0;
    transform: translateY(100%);
    opacity: 0;
    border-top-left-radius: 100%;
    border-top-right-radius: 100%;

    transition: all 0.2s ease-in-out;
    background-color: var(--about);
  }

  .down-active {
    opacity: 1;
    transform: translateY(0%);
  }

  .left {
    position: inherit;
    width: 10%;
    height: 100%;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    opacity: 0;
    border-top-right-radius: 100%;
    border-bottom-right-radius: 100%;

    transition: all 0.2s ease-in-out;
    background-color: var(--projects);
  }

  .left-active {
    opacity: 1;
    transform: translateX(0%);
  }

  .right {
    position: inherit;
    width: 10%;
    height: 100%;
    right: 0px;
    top: 0;
    transform: translateX(100%);
    opacity: 0;
    border-top-left-radius: 100%;
    border-bottom-left-radius: 100%;

    transition: all 0.2s ease-in-out;
    background-color: var(--links);
  }

  .right-active {
    opacity: 1;
    transform: translateX(0%);
  }
`;

const Content = styled.div`
  width: 75vh;
  height: 75vh;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(4, 25%);

  z-index: var(--z-index-home-content);

  h1 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 4;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: left;

    margin: 0;
    font-size: 5rem;
    color: var(--white);
  }
`;

const Nav = styled.div`
  grid-row: 3 / span 2;
  grid-column: 1 / span 4;

  display: flex;
  align-items: start;
  gap: 1rem;

  button {
    font: inherit;
    border: 1px solid var(--white);
    border-radius: 1rem;

    flex: auto;
    padding: 2rem;
    font-size: 2rem;
    text-align: center;
    justify-content: center;

    color: var(--white);
    background-color: var(--transparent);
    backdrop-filter: blur(5px);
    transition: all 0.2s ease-out;
  }

  .projects:hover {
    border-color: var(--projects);
    background-color: var(--projects);
    scale: 105%;
  }

  .links:hover {
    border-color: var(--links);
    background-color: var(--links);
    scale: 105%;
  }

  .skills:hover {
    border-color: var(--skills);
    background-color: var(--skills);
    scale: 105%;
  }

  .about:hover {
    border-color: var(--about);
    background-color: var(--about);
    scale: 105%;
  }
`;

// function handleScreen(size) {}

function HomeLayout({ backgroundImg, title, nav, popouts, size }) {
  // const [width, height] = size;

  return (
    <Container>
      {backgroundImg}
      <Popouts>{popouts}</Popouts>
      <Content>
        <h1>{title || 'Welcome'}</h1>
        <Nav>{nav}</Nav>
      </Content>
    </Container>
  );
}

export default HomeLayout;

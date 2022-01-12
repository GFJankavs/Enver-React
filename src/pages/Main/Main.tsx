import HeroBox from '../../parts/components/HeroBox/HeroBox';
import AboutMe from '../../parts/components/AboutMe/AboutMe';
import Projects from '../../parts/components/Projects/Projects';

import './Main.scss';

const Main = () => (
  <div className="main">
    <HeroBox />
    <AboutMe />
    <Projects />
  </div>
);

export default Main;

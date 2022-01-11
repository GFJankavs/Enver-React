import './Main.scss';
import Download from '../../assets/images/download.svg';
import ButtonNavigate from '../../parts/components/Buttons/ButtonNavigate/ButtonNavigate';
import ButtonAction from '../../parts/components/Buttons/ButtonAction/ButtonAction';
import HeroBox from '../../parts/components/HeroBox/HeroBox';
import AboutMe from '../../parts/components/AboutMe/AboutMe';
import Projects from '../../parts/components/Projects/Projects';

const Main = () => {
  console.log(123);
  return (
    <div className="main">
      <HeroBox />
      <AboutMe />
      <Projects />
    </div>
  );
};

export default Main;

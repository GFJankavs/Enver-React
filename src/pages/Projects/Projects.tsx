import './Projects.scss';
import project from '../../assets/images/project.png';
import typography from '../../assets/images/typography.png';
import colors1 from '../../assets/images/colors_1.png';
import colors2 from '../../assets/images/colors_2.png';
import buttons from '../../assets/images/buttons.png';

const Projects = () => {
  console.log(123);
  return (
    <div className="projects">
      <div className="project__wrapper">
        <div className="project__heading-container">
          <h5 className="heading__5">Web - Iglesia fuente de poder</h5>
          <h1 className="heading__1">Guía de estilos</h1>
        </div>
        <img src={project} alt="project" className="projects__image" />
      </div>
      <div className="project__wrapper">
        <h2 className="heading__2">Acerca del proyecto</h2>
        <p>
          La iglesia “Funte de poder” desarrollaba sus actividades de  manera presencial en su lugar de reunión habitual, pero con la situación actual que se vive en el mundo, todo se comenzó a virtualizar y con ello los servicios de la iglesia. Esta será una web que permita conocer los medios por los cuales se pueden hacer donaciones a la iglesia para su proyecto de reconstrucción y conocer los detalles del mismo.
          <br />
          <br />
          Mi rol consistió en crear una guía de estilos y aplicarla en la creacion de los Mockups de alta fidelidad.
        </p>
      </div>
      <div className="project__wrapper">
        <h3 className="heading__3">Tipografía</h3>
        <p>
          Se difinió que la web será para un publico variado, con distintos gustos y diferentes edades, por lo que se escogió una tipografia san serif, elegante y simple, con el fin de que sea legible por todos los usuarios en sus distintas escalas.
          <br />
          <br />
          Esta tipografía está disponible de forma gratuita en Google fonts.
        </p>
        <img src={typography} alt="typography" className="projects__image" />
      </div>
      <div className="project__wrapper">
        <h3 className="heading__3">Paleta de colores</h3>
        <p>La elección de los colores se hizo en base al isologotipo de la iglesia, tomando sus colores principales y sus distintas intensidades. Eso con el fin de seguir una misma linea entre su identidad grafica y lo que será la web.</p>
        <img src={colors1} alt="colors_1" className="projects__image" />
        <img src={colors2} alt="colors_2" className="projects__image" />
      </div>
      <div className="project__wrapper">
        <h3 className="heading__3">Botones</h3>
        <p>Los botones en sus diferentes escalas, tanto para movil como para escritorio.</p>
        <img src={buttons} alt="buttons" className="projects__image" />
      </div>
    </div>
  );
};

export default Projects;

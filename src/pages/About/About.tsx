import profile from '../../assets/images/miguel.png';

import skillsList from '../../data/skillsList';

import './About.scss';

const About = () => (
  <>
    <div className="about">
      <div className="about__content">
        <img className="about__left" src={profile} alt="miguel" />
        <div className="about__right">
          <h1 className="heading__1 margin-bottom--32 heading__1--mobile">Miguel Ruz</h1>
          <p className="about__text">Soy Diseñador UI, actualmente vivo en Turbaco-Bolivar, un pueblo a las afueras de Cartagena (Colombia).</p>
          <br />
          <p className="about__text">Me agrada la idea de trabajar en equipo, pienso que es una manera de conectar con nuevas habilidades y de brindar mi conocimiento al equipo con el fin de mejorar la productividad en el desarrollo de algun producto digital. Me gusta descubrir cosas nuevas a diario y ser un activo valioso en cualquier equipo en el que me desarrolle, por lo que estoy aprendiendo constantemente e investigando acerca de las nuevas tendencias.</p>
          <br />
          <p className="about__text">
            Trato de buscar todo el Feedback posible en los proyectos, con el fin de mejorar y poder hacer diseños que no solo sean atractivos esteticamente sino que sean accesibles y funcionales por lo que me gusta trabajar muy de la mano con los stakeholders.
            Hablemos!
          </p>
          <br />
          <a href="#0" className="about__link">miguelruz1126@gmail.com</a>
        </div>
      </div>
    </div>
    <div className="skills">
      <h3 className="heading__3 heading--center">Mis habilidades</h3>
      <div className="skills__container">
        {skillsList.map(({ title, image, description }) => (
          <div className="skill__wrapper" key={title}>
            <img src={image} alt="device" className="margin-bottom--10" />
            <h3 className="heading__3 margin-bottom--10">{title}</h3>
            <p className="skill__text">{description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);

export default About;

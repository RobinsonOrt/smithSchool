import Footer from "../components/Footer";
import Nav from "../components/Nav";
import nosotrosC from "./imagenes/nosotrosC.jpg";
import card03 from "./imagenes/card03.png";
import CardNosoImgIz from "../components/CardNosoImgIz";
import CardNosoImgDer from "../components/CardNosoImgDer";


const Nosotros = () => {
  return (
    <div>
      <div>
        <Nav user={localStorage.getItem("userName")} />
      </div>
      <div>
        <CardNosoImgIz imgNoso={nosotrosC} titulo={"Nuestros Objetivos Institucionales"} texto={
          "• Fomentar el espíritu de autonomía y liderazgo basado en la transformación de las personas por medio del conocimiento. • Incentivar, crear y fortalecer hábitos de lectura con el fin de desarrollar un pensamiento crítico y creativo. • Desarrollar la competencia tanto de la lengua materna como la lengua extranjera inglesa. • Promover el desarrollo ambiental, social y comunitario fortaleciendo el ejercicio de la sociedad moderna, democrática y tolerante, de la justicia, la equidad de género los derechos humanos y el respeto a las características de las poblaciones especiales. • Desarrollar actitudes y valores que estimulen la creatividad, recreación, el uso del tiempo libre y la identidad nacional."
        } />
        <CardNosoImgDer />
        <CardNosoImgIz imgNoso={card03} titulo={"Beneficios de nuestro enfoque basado por proyectos:"} texto={"• Motiva a nuestros estudiantes a aprender, permitiéndoles seleccionar los temas que le interesan dentro del proyecto a desarrollar. • Ofrece posibilidades de introducir en el aula de clases una extensa gama de oportunidades de aprendizaje. • La familia es nuestra principal aliada. • Los educandos aprenden a través de la observación, desarrollando la habilidad del pensamiento."} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Nosotros;

import styled from "@emotion/styled";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import procesoIm from "./imagenes/proceso.png";
import bioseim from "./imagenes/bioseguridad.jpg";
import bienvIm from "./imagenes/bienvenido.png";
import preeIm from "./imagenes/preescolar.png";
import basIm from "./imagenes/basica.png";
import mediaIm from "./imagenes/media.png";
import conocenosIm from "./imagenes/conocenos.png";
import "./inicio.css";
import CardIni from "../components/CardIni";
import CarrouselIni from "../components/CarrouselIni";

const Contenedor = styled.div``;

const Carousel = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 49%;
  border-radius: 5px;
  height: 450px;
  padding-top: 15px;
`;

const DivCard = styled.div`
  padding: 100px;
`;

const ImgCard = styled.img`
  padding: 15px;
  margin: auto;
  width: 180px;
`;

const Inicio = () => {

  return (
    
    <Contenedor>
      <div>
        <Nav user={localStorage.getItem("userName")} />
      </div>
      <div className="holaa">
        <Carousel>
          <CarrouselIni bienvIm={bienvIm} procesoIm={procesoIm} bioseim={bioseim} />
        </Carousel>

        <DivCard>
          <div className="cardss">
            <CardIni imagenCard = {preeIm} tituloCard= {"EDUCACION PREESCOLAR"} textoCard= {"Acompañamos a sus hijos en los primeros pasos desde maternal hasta transición."} />
            <CardIni imagenCard = {basIm} tituloCard= {"EDUCACION BASICA"} textoCard= {"Educamos a nuestros estudiantes en los principios básicos de 1° a 9°"} />
            <CardIni imagenCard = {mediaIm} tituloCard= {"EDUCACION MEDIA"} textoCard= {"Introducimos a sus hijos a la vida universitaria en 10° y 11°."} />
          </div>
        </DivCard>
      </div>

      <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
        <div className="bg-light me-md-3 pt-3 px-2 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3">
            <h2 className="display-5">Ubicación</h2>
          </div>
          <div className="bg-body shadow-sm mx-auto">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                title="fram1"
                  className="gmap_iframe"
                  width="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Neiva Huila&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light me-md-3 pt-3 px-2 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">Conócenos</h2>
            <p className="lead">
              El Smith School mediante la implementación del modelo europeo de
              excelencia EFQM ® (European Foundation for Quality Management),
              está desarrollando el Sistema de Gestión de la Calidad, con el
              propósito de promover y crear procesos de mejora continua en todas
              las áreas de gestión, garantizando de esta manera la satisfacción
              de los clientes y la excelente prestación de los servicios
              educativos y complementarios ofrecidos por la institución.
            </p>
            <ImgCard src={conocenosIm} alt="" />
          </div>
        </div>


      </div>

      <div>
        <Footer />
      </div>
    </Contenedor>
  );
};

export default Inicio;

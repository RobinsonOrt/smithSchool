import styled from "@emotion/styled";
import card02 from "../pages/imagenes/card02.png";

const ImagenCard = styled.img`
  width: 735px;
  height: 750px;
`;

const CardNosoImgDer = () => {
    return (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
          <div className="bg-light me-md-3 pt-3 px-2 pt-md-5 px-md-5 text-center overflow-hidden">
            <div className="my-1 py-1">
              <h2 className="display-5">Nuestros Grados Escolares</h2>
              <p className="lead">
                Nuestro aprendizaje basado por proyectos<br />

                "Dígame y olvido, muéstrame y recuerdo, involúcrame y comprendo"<br /><br />

                En preescolar nuestro enfoque basado por proyectos, es una propuesta educativa fundamentada en la filosofía Reggio Emilia con la cual logramos desarrollar en los niños y niñas habilidades y destrezas, a través de experiencias significativas, exploración del entorno y preguntas motivadoras. <br />

                Siendo nuestros niños y niñas agentes activos de su aprendizaje, construyen su propio conocimiento, desarrollan eficazmente la interacción social y se les permite negociar con todo lo que el ambiente les ofrece. <br />

                Esta metodología pretende crear ricas atmósferas, procesos de cambio y posibilitar situaciones de aprendizaje que los niños y niñas han de experimentar, a través de la práctica de los pilares de la educación inicial: el juego, el arte, la literatura y la exploración del medio. El objetivo es crear una institución amable, activa, comunicativa y de investigación. 
              </p>
              <img src="..." alt="" />
            </div>
          </div>
          <div className="bg-light me-md-3 pt-3 px-2 pt-md-0 px-md-0 text-center overflow-hidden">
            <div className="bg-body shadow-sm ">
              <ImagenCard src={card02} alt="" />
            </div>
          </div>
        </div>
    );
}
 
export default CardNosoImgDer;
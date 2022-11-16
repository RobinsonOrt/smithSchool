import imgWeek from '../pages/imagenes/planning.svg'
import imgWeekEnd from '../pages/imagenes/summer.svg'
import imgAddress from '../pages/imagenes/address.svg';
import imgphone from '../pages/imagenes/phone-call.svg';

const CardsHo = () => {
  return (
    <div>
      <div className="headerHo">
        <h1 className="h1Ho ">HORARIOS DE ATENCIÓN</h1>
      </div>
      <div className="row1-container">
        <div className="boxHo box-down cyan">
          <h2 className="h2Ho">Contáctenos</h2>
          <p>Cel: 3173636145 <br /> Tel: 8675141</p>

          <img className="imgWeek" src={imgphone} alt="" />
        </div>

        <div className="boxHo red">
          <h2 className="h2Ho">Lunes a Viernes</h2>
          <h6 className="h6Ho">JORNADA DE LA MAÑANA</h6>
          <p>8 AM a 12 PM</p>
          <h6 className="h6Ho">JORNADA DE LA TARDE</h6>
          <p>2 PM a 4 PM</p>
          <img className="imgWeek" src={imgWeek} alt="" />
        </div>

        <div className="boxHo box-down blue">
          <h2 className="h2Ho">Sábados</h2>
          <h6 className="h6Ho">JORNADA CONTINUA </h6>
          <p>8 AM a 1 PM</p>

          <img className="imgWeek" src={imgWeekEnd} alt="" />
        </div>
      </div>
      <div className="row2-container">
        <div className="boxHo orange">
          <h2 className="h2Ho">Dirección</h2>

          <p>Calle 8 No. 100-01<br /> Neiva-Huila</p>

          <img className="imgWeek" src={imgAddress} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardsHo;
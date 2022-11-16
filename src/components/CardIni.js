import styled from "@emotion/styled";

const Cards = styled.div`
  padding: 10px;
  display: inline-block;
  width: 18rem;

  transition: all 0.2s;
  :hover {
    width: 20rem;
    height: 420px;
  }
`;

const ImgCard = styled.img`
  padding: 15px;
  margin: auto;
  width: 180px;
`;

const SpanCard = styled.span`
  font-weight: bold;
  text-align: center;
  color: #373a3b;
`;

const CardIni = ({imagenCard, tituloCard, textoCard}) => {
    return (
        <Cards>
            <div className="card">
            <ImgCard src={imagenCard} className="card-img-top" alt="..." />
            <div className="card-body">
                <SpanCard>{tituloCard}</SpanCard>
                <p className="card-text">
                {textoCard}
                </p>
            </div>
            </div>
        </Cards>
    );
}
 
export default CardIni;
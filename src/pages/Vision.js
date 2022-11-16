import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import CardVi from "../components/CardVi";
import './vision.css';

const DivCardMi = styled.div`
    width: 100%;
    min-height: 600px;
`;


const Vision = () => {
    return (
        <div>
            <div>
                <Nav user={localStorage.getItem("userName")} />
            </div>
            <div className="fondoVi">
                <DivCardMi className="divFondo">
                    <CardVi texto={"The Smith School, a través de un proceso de mejoramiento continuo, en el año 2024, será reconocido nacional e internacionalmente por ofrecer un servicio educativo de alta calidad y excelencia, con enfoque humanista y certificado en el idioma ingles por la Universidad de Cambridge a través de sus exámenes internacionales según el marco común europeo."} />
                </DivCardMi>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}
 
export default Vision;
import imgMision from "../pages/imagenes/mision.png"

const CardMi = () => {
    return (
        <div className="divPrincipal">
            <div className="cardMi">
                <div className="image">
                    <img src={imgMision} alt="Mision" />
                </div>
                <div className="details">
                    <div className="center">
                        <p>Ofrecer un excelente servicio público de educación formal académica personalizada, con la modalidad de inglés intensivo y verdaderamente comunicativo, en los niveles de preescolar, básica y media, orientado a formar personas con excelente desempeño académico, espíritu investigativo, pensamiento crítico y formación en valores cívicos, en un ambiente acorde con las exigencias del mundo contemporáneo.</p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardMi;
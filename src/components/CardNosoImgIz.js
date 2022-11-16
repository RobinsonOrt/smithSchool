import styled from "@emotion/styled";

const ImagenCard = styled.img`
  width: 735px;
  height: 750px;
`;

const CardNosoImgIz = ({imgNoso, titulo, texto}) => {
    return (
        <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
            <div className="bg-light me-md-3 pt-3 px-2 pt-md-0 px-md-0 text-center overflow-hidden">
                <div className="bg-body shadow-sm ">
                    <ImagenCard src={imgNoso} alt="" />
                </div>
            </div>
            <div className="bg-light me-md-3 pt-3 px-2 pt-md-5 px-md-5 text-center overflow-hidden">
                <div className="my-1 py-1">
                    <h2 className="display-5">{titulo}</h2>
                    <p className="lead">
                    {texto}
                    </p>
                    <img src="..." alt="" />
                </div>
            </div>
        </div>
    );
}
 
export default CardNosoImgIz;
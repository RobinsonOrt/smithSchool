import styled from "@emotion/styled";

const Foo = styled.footer`
  padding-left: 15px;
  padding-right: 15px;
  background: linear-gradient(to left, #4057dd, #6f80e4, #6f80e4, #f8f8f8);
  font-size: 20px;
  font-weight: bold;
  width: 100%;
  position: absolute;
  bottom: auto;
  height: 130px;
`;

const Imagen = styled.img`
  width: 80px;
`;

const ImagenLogo = styled.img`
  width: 30px;
  transition: all 0.4s;
  :hover {
    width: 50px;
  }
`;

const SpanC = styled.span`
  color: #4057dd;
  font-weight: normal;
  font-size: 15px;
`;

const Footer = () => {
  return (
    <Foo>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3  my-4 border-top  ">
        <div className="col-md-4 d-flex align-items-center">

          <Imagen src="../logo.png" alt="" />
          <SpanC className="text-muted">© 2021 The Smith School.</SpanC>
          
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://es-la.facebook.com/"
              target="_new"
            >
              <ImagenLogo src="../logoFacebook.png" alt="" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://twitter.com/?lang=es"
              target="_new"
            >
              <ImagenLogo src="../logoTwitter.png" alt="" />
            </a>
          </li>
          <li className="ms-3">
            <a
              className="text-muted"
              href="https://www.instagram.com/?hl=es"
              target="_new"
            >
              <ImagenLogo src="../logoInstagram.png" alt="" />
            </a>
          </li>
        </ul>
        
      </footer>
    </Foo>
  );
};

export default Footer;

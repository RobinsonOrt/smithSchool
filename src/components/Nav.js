import "./nav.css";
import ModalLogIn from "./ModalLogIn";
import LogIn from "./logIn";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import Logged from "./logged";
import PostulateBtn from "./PostulateBtn";
import EstudiantesBtn from "./ControlBtn";

const Span = styled.span`
  color: #4057dd;
  font-weight: bold;
  font-size: 18px;
  transition: all 0.2s;
  :hover {
    font-size: 20px;
    font-weight: bold;
  }
`;

const Lid = styled.li`
  color: black;
  transition: all 0.2s;
  :hover {
    font-size: 18px;
    background-color: #5ac0bf;
    border-radius: 5px;
  }
`;

const Nav = ({user}) => {
  return (
    <header>
      <div className="px-3 py-2 text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
            >
              <img
                src="../logo.png"
                className="bi me-2"
                width="70"
                height="62"
                role="img"
                aria-label="Bootstrap"
                alt=""
              />
              <Span>THE SMITH SCHOOL</Span>
            </Link>

            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <Lid>
                <Link to="/" className="nav-link text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi d-block mx-auto mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
                  </svg>
                  INICIO
                </Link>
              </Lid>
              <Lid>
                <Link to="/nosotros" className="nav-link text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi d-block mx-auto mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                  </svg>
                  NOSOTROS
                </Link>
              </Lid>
              <Lid>
                {
                  (user)? (localStorage.getItem("userRol")==1)?<EstudiantesBtn/>:<PostulateBtn/>:<PostulateBtn/>
                }
              </Lid>
              <Lid>
                <button
                  className="nav-link dropdown-toggle text-white btn32"
                  id="navbarDropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi d-block mx-auto mb-1"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4 2v2H2V2h2zm1 12v-2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm5 10v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm0-5V2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zM9 2v2H7V2h2zm5 0v2h-2V2h2zM4 7v2H2V7h2zm5 0v2H7V7h2zm5 0h-2v2h2V7zM4 12v2H2v-2h2zm5 0v2H7v-2h2zm5 0v2h-2v-2h2zM12 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1h-2zm-1 6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zm1 4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2z" />
                  </svg>
                  INSTITUCION
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <Lid>
                    <Link to="/mision" className="dropdown-item">
                      <span className="text-dark">Misión</span>
                    </Link>
                  </Lid>
                  <Lid>
                    <Link to="/vision" className="dropdown-item">
                      <span className="text-dark">Visión</span>
                    </Link>
                  </Lid>
                  <Lid>
                    <hr className="dropdown-divider" />
                  </Lid>
                  <Lid>
                    <Link to="/horarios" className="dropdown-item">
                      <span className="text-dark">Horarios de atencion</span>
                    </Link>
                  </Lid>
                </ul>
              </Lid>
              <Lid id="inicio">
                {
                  (user)?<Logged/>:<LogIn />
                }
                
              </Lid>
            </ul>
          </div>
        </div>
      </div>
      <ModalLogIn />

    </header>
  );
};

export default Nav;

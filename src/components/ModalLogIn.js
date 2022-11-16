import styled from "@emotion/styled";
import { API } from '../config';
import React from 'react';
import axios from 'axios';


const InputX = styled.input`
  outline: none;
  padding: 20px;
  color: white;
  width: 100%;
  height: 40px;
  border: 0;
  background-color: #385273;
`;

const ImgLogoLog = styled.img`
  background-color: #01254f;
  height: 40px;
  width: 40px;
  top: 200px;
`;

const SpanText = styled.span`
  color: red;
  font-size: 12px;
  text-align: center;
  width: 100%;
`;

const Botonlog = styled.button`
  color: white;
  font-weight: 600;
  height: 45px;
  width: 52%;
  border: none;
  position: absolute;
  z-index: -2;
  background-color: #c4bacb;
  opacity: 0.8;
  border-radius: 15px;
  margin-left: 80px;
  margin-right: 80px;
  top: 332px;
  left: 40px;
  transition: all 0.2s;
  :hover{
    background-color: #44628d;
    font-size:20px;
    height: 49px;
    width: 56%;
    left: 32px;
  }
`;

class ModalLogIn extends React.Component {

  state={
    form:{
      "email":"",
      "password":""
    },
    error:false,
    errormsg:""
  }
  enviar = e => {
    e.preventDefault();
  }
  manejadorOnChange = async e=>{
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    })
  }
  manejadorBoton = () =>{
    console.log(API);
    let url = API + "/user/login";

    axios.post(url,this.state.form)
    .then( response =>{
      if(!response.data.error){
        console.log(response);
        localStorage.setItem("token", response.data.data.token);
        localStorage.setItem("userRol", response.data.data.userRol);
        localStorage.setItem("userName", response.data.data.userName);
        localStorage.setItem("userId", response.data.data.studentAccept);
        if(response.data.data.userRol===1)
          window.location.assign("/authdir");
        if(response.data.data.userRol===2){
          window.location.assign("/authstudent");
        }
      }else{
        console.log("error");
        this.setState({
          error : true,
          errormsg : response.data.mensaje
        })
      }
    }).catch(error =>{
      console.log(error);
      this.setState({
        error : true,
        errormsg : "Presentamos un error, intente nuevamente."
      })
    })
  }
  render() {
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <img
                src="../logo.png"
                className="bi2"
                width="120"
                height="112"
                role="img"
                aria-label="Bootstrap"
                alt=""
              />
            </div>
            <form onSubmit={this.enviar} method="POST" className="form2" name="form">
              <input type="hidden" name="_token" value="" />
              <div className="modal-body">
                <div className="row">
                  <div className="divEmail col-md-2">
                    <ImgLogoLog src="https://img.icons8.com/pastel-glyph/64/ffffff/person-male--v3.png" />
                  </div>
                  <div className="divEmail col-md-10">
                    <div>
                      <InputX
                        type="email"
                        className="form-control input-lg"
                        name="email"
                        placeholder="Email ID"
                        onChange={this.manejadorOnChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="divEmail col-md-2">
                    <ImgLogoLog src="https://img.icons8.com/dotty/80/ffffff/lock-2.png" />
                  </div>
                  <div className="divEmail col-md-10">
                    <div>
                      <InputX
                        type="password"
                        className="form-control input-lg"
                        name="password"
                        placeholder="Password"
                        onChange={this.manejadorOnChange}
                      />
                    </div>
                  </div>
                </div>
                {
                  this.state.error === true &&
                  <div className="row" >
                    <SpanText>{this.state.errormsg}</SpanText>
                  </div>
                }
              </div>
              <Botonlog type="submit" onClick={this.manejadorBoton} className="boton">LOGIN</Botonlog>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ModalLogIn;
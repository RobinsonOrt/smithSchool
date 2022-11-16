import Nav from "../components/Nav";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import './postulate.css'
import isemail from 'isemail';
import { API } from '../config';
import axios from 'axios';
import React, { useState, useEffect } from 'react';


const Contenedor = styled.div`
    background-image: linear-gradient(120deg, #d3f8ff 0, #cfedff 50%, #cae2f2 100%);
`;

const Contenedor1 = styled.div`
    background-image: linear-gradient(120deg, #e8d3ff 0, #dccbf2 50%, #d1c3e5 100%);
`;

const DivSep = styled.div`
    width: 50%;

`;

const SpanA = styled.span`
    color: red;
`;

const H2 = styled.h2`
    text-align: center;
    font-weight: bold;
    color: black;
    font-family: 'Courier New', monospace;
`;

const H5 = styled.h5`
    padding-left: 5%;
    color: black;
    font-family: 'Courier New', monospace;
    font-size: 60%;
`;

const DivHe = styled.div`
    padding: 40px 15px 20px;
    background-image: linear-gradient(120deg, #dcbefc 0, #ccaff1 50%, #c4a9e9 100%);
    border-radius: 3px 3px 0px 0px;
`;


//JavaScript para la animacion del formulario

const changeStep = e => {
    const element = e.target;
    const isButtonNext = element.classList.contains('step-botton-next');
    const isButtonBack = element.classList.contains('step-botton-back');
    if (isButtonNext || isButtonBack) {
        const currentStep = document.getElementById('step-' + element.dataset.step);
        const jumpStep = document.getElementById('step-' + element.dataset.to_step);
        currentStep.addEventListener('animationend', function callback() {
            currentStep.classList.remove('active');
            jumpStep.classList.add('active');
            const opcionB = document.getElementById('li2');
            const opcionC = document.getElementById('li3');
            if (isButtonNext) {
                currentStep.classList.add('to-left');
                if (element.dataset.step == 1) {
                    opcionB.classList.add('active');
                } else if (element.dataset.step == 2) {
                    opcionC.classList.add('active');
                }
            } else {
                jumpStep.classList.remove('to-left');
                if (element.dataset.step == 2 && element.dataset.to_step == 1) {
                    opcionB.classList.remove('active');
                } else if (element.dataset.step == 3 && element.dataset.to_step == 2) {
                    opcionC.classList.remove('active');
                }
            }
            currentStep.removeEventListener('animationend', callback);
        });
        currentStep.classList.add('inactive');
        jumpStep.classList.remove('inactive');
    }
}


class Postulate extends React.Component {

    state = {
        form: {
            "tutorTypeID": "",
            "tutorID": "",
            "tutorFirstName": "",
            "tutorSecondName": "",
            "tutorSurName": "",
            "tutorSecondSurName": "",
            "tutorEmail": "",
            "tutorPhone": "",
            "tutorRelationship": "",
            "studentTypeID": "",
            "studentID": "",
            "studentFirstName": "",
            "studentSecondName": "",
            "studentSurName": "",
            "studentSecondSurName": "",
            "studentEmail": "",
            "studentPhone": "",
            "studentBornDate": "",
            "studentGrade": ""
        },
        error: false,
        errormsg: ""
    }

    enviar = e => {
        e.preventDefault();
    }
    manejadorOnChange = async e => {
        //validacion
        const btn1 = document.getElementById("btn1");
        btn1.hidden = false;
        const tutorTypeID = document.getElementById("tutorTypeID").value;
        const tutorID = document.getElementById("tutorID").value;
        const tutorFirstName = document.getElementById("tutorFirstName").value;
        const tutorSecondName = document.getElementById("tutorSecondName").value;
        const tutorSurName = document.getElementById("tutorSurName").value;
        const tutorSecondSurName = document.getElementById("tutorSecondSurName").value;
        const tutorEmail = document.getElementById("tutorEmail").value;
        const tutorPhone = document.getElementById("tutorPhone").value;
        const tutorRelationShip = document.getElementById("tutorRelationShip").value;
        if (tutorTypeID === "Seleccionar") {
            btn1.disabled = true;
        } else if (tutorID === 0 || tutorID.length < 6) {
            btn1.disabled = true;
        } else if (tutorFirstName.length < 2) {
            btn1.disabled = true;
        } else if (tutorSecondName.length < -1) {
            btn1.disabled = true;
        } else if (tutorSurName.length < 2) {
            btn1.disabled = true;
        } else if (tutorSecondSurName.length < -1) {
            btn1.disabled = true;
        } else if (!isemail.validate(tutorEmail)) {
            btn1.disabled = true;
        } else if (tutorPhone.length < 8) {
            btn1.disabled = true;
        } else if (tutorRelationShip === "Seleccionar") {
            btn1.disabled = true;
        } else {
            btn1.disabled = false;
        }

        //validation 2
        const btn2 = document.getElementById("btn2");
        const studentTypeID = document.getElementById("studentTypeID").value;
        const studentID = document.getElementById("studentID").value;
        const studentFirstName = document.getElementById("studentFirstName").value;
        const studentSecondName = document.getElementById("studentSecondName").value;
        const studentSurName = document.getElementById("studentSurName").value;
        const studentSecondSurName = document.getElementById("studentSecondSurName").value;
        const studentEmail = document.getElementById("studentEmail").value;
        const studentPhone = document.getElementById("studentPhone").value;
        const studentBornDate = document.getElementById("studentBornDate").value;
        const studentGrade = document.getElementById("studentGrade").value;
        if (studentTypeID === "Seleccionar") {
            btn2.disabled = true;
        } else if (studentID === 0 || studentID.length < 6) {
            btn2.disabled = true;
        } else if (studentFirstName.length < 2) {
            btn2.disabled = true;
        } else if (studentSecondName.length < -1) {
            btn1.disabled = true;
        } else if (studentSurName.length < 2) {
            btn2.disabled = true;
        } else if (studentSecondSurName.length < -1) {
            btn1.disabled = true;
        } else if (!isemail.validate(studentEmail)) {
            btn2.disabled = true;
        } else if (studentPhone.length < 8) {
            btn2.disabled = true;
        } else if (studentBornDate === "") {
            btn2.disabled = true;
        } else if (studentGrade === "Seleccionar") {
            btn2.disabled = true;
        } else {
            btn2.disabled = false;
        }

        //onchange
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
    manejadorBoton = () => {
        let url = API + "/student/register";

        axios.post(url, this.state.form)
            .then(response => {
                if (!response.data.error) {
                    console.log(response);
                    alert("Formulario enviado correctamente, espere informacion");
                    window.location.assign("/");
                } else {
                    alert("Revise la informacion, puede que el aspirante ya haya presentado una solicitud");
                }
            }).catch(error => {
                alert("Presentamos un error, intente nuevamente.");
            })
    }
    render() {
        return (
            <div>
                <div>
                    <Nav user={localStorage.getItem("userName")} />
                </div>
                <div className="divPos">
                    <form onSubmit={this.enviar} method="POST" className="form-postulate">
                        <div className="form-postulate-header">
                            <ul className="progressbar">
                                <li className="progressbar-option active" id="li1">Informacion del acudiente</li>
                                <li className="progressbar-option progressbar2" id="li2">Informacion del aspirante</li>
                                <li className="progressbar-option" id="li3">Politica de datos</li>
                            </ul>
                            <div className="divImgLog">
                                <img
                                    src="../logo.png"
                                    className="logoPos"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="form-postulate-body">
                            <div className="step active" id="step-1">
                                <Contenedor>
                                    <div className="step-header">

                                        <H2 className="step-title">Informacion del acudiente<H5>(Campos con <SpanA>*</SpanA> son obligatorios)</H5></H2>
                                    </div>
                                    <div className="step-body">
                                        <div className="aaa">
                                            <DivSep>
                                                <label for="tutorTypeID" className="form-label">Tipo de documento<SpanA>*</SpanA></label><br />
                                                <select className="custom-select custom-select-lg" id="tutorTypeID" name="tutorTypeID" onChange={this.manejadorOnChange} >
                                                    <option selected disabled>Seleccionar</option>
                                                    <option value="PA">Pasaporte</option>
                                                    <option value="CC">Cedula de Ciudadania</option>
                                                    <option value="CE">Cedula de Extranjeria</option>
                                                </select>
                                            </DivSep>
                                            <DivSep>
                                                <label for="tutorID" className="form-label" maxlength="4" >Documento de Identidad<SpanA>*</SpanA></label>
                                                <input type="number" className="form-control" id="tutorID" name="tutorID" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                        </div>

                                        <div className="aaa">
                                            <DivSep>
                                                <label for="tutorFirstName" className="form-label ">Primer Nombre<SpanA>*</SpanA></label>
                                                <input type="name" className="form-control" id="tutorFirstName" name="tutorFirstName" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                            <DivSep>
                                                <label for="sgNomAc" className="form-label">Segundo Nombre</label>
                                                <input type="text" className="form-control" id="tutorSecondName" name="tutorSecondName" onChange={this.manejadorOnChange} />
                                            </DivSep>
                                        </div>

                                        <div className="aaa">
                                            <DivSep>
                                                <label for="prApeAc" className="form-label ">Primer Apellido<SpanA>*</SpanA></label>
                                                <input type="text" className="form-control" id="tutorSurName" name="tutorSurName" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                            <DivSep>
                                                <label for="sgApeAc" className="form-label">Segundo Apellido</label>
                                                <input type="text" className="form-control" id="tutorSecondSurName" name="tutorSecondSurName" onChange={this.manejadorOnChange} />
                                            </DivSep>
                                        </div>

                                        <div className="aaa">
                                            <DivSep>
                                                <label for="emailAc" className="form-label ">E-mail<SpanA>*</SpanA></label>
                                                <input type="email" className="form-control" id="tutorEmail" name="tutorEmail" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                            <DivSep>
                                                <label for="telAc" className="form-label">Telefono<SpanA>*</SpanA></label>
                                                <input type="number" className="form-control" id="tutorPhone" name="tutorPhone" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                        </div>

                                        <div className="aaa">
                                            <div className="divRadio">
                                                <label for="parAc" className="form-label ">Parentesco<SpanA>*</SpanA></label>
                                                <select className="custom-select custom-select-lg" id="tutorRelationShip" name="tutorRelationShip" onChange={this.manejadorOnChange} >
                                                    <option selected disabled>Seleccionar</option>
                                                    <option value="padre">Padre</option>
                                                    <option value="madre">Madre</option>
                                                    <option value="otro">Otro</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step-footer">
                                        <button type="button" onClick={changeStep} hidden className="step-botton step-botton-next" data-to_step="2" data-step="1" id="btn1">Siguiente</button>
                                    </div>
                                </Contenedor>
                            </div>

                            <div className="step" id="step-2">
                                <Contenedor1>
                                    <DivHe className="step-header">
                                        <H2 className="step-title">Informacion del aspirante<H5>(Campos con <SpanA>*</SpanA> son obligatorios)</H5></H2>
                                    </DivHe>
                                    <div className="step-body">
                                        <div className="aaa">
                                            <DivSep>
                                                <label for="tipDocEs" className="form-label">Tipo de documento<SpanA>*</SpanA></label><br />
                                                <select className="custom-select custom-select-lg" id="studentTypeID" name="studentTypeID" onChange={this.manejadorOnChange} >
                                                    <option selected disabled>Seleccionar</option>
                                                    <option value="RC">Registro Civil</option>
                                                    <option value="TI">Tarjeta de Identidad</option>
                                                    <option value="PA">Pasaporte</option>
                                                    <option value="CC">Cedula de Ciudadania</option>
                                                    <option value="CE">Cedula de Extranjeria</option>
                                                </select>
                                            </DivSep>
                                            <DivSep>
                                                <label for="numDocEs" className="form-label">Documento de Identidad<SpanA>*</SpanA></label>
                                                <input type="number" className="form-control" id="studentID" name="studentID" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                        </div>
                                        <div className="aaa">
                                            <DivSep>
                                                <label for="prNomEs" className="form-label ">Primer Nombre<SpanA>*</SpanA></label>
                                                <input type="text" className="form-control" id="studentFirstName" required name="studentFirstName" onChange={this.manejadorOnChange} />
                                            </DivSep>
                                            <DivSep>
                                                <label for="sgNomEs" className="form-label">Segundo Nombre</label>
                                                <input type="text" className="form-control" id="studentSecondName" name="studentSecondName" onChange={this.manejadorOnChange} />
                                            </DivSep>
                                        </div>
                                        <div className="aaa">
                                            <DivSep>
                                                <label for="prApeEs" className="form-label ">Primer Apellido<SpanA>*</SpanA></label>
                                                <input type="text" className="form-control" id="studentSurName" name="studentSurName" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                            <DivSep>
                                                <label for="sgApeEs" className="form-label">Segundo Apellido</label>
                                                <input type="text" className="form-control" id="studentSecondSurName" name="studentSecondSurName" onChange={this.manejadorOnChange} />
                                            </DivSep>
                                        </div>
                                        <div className="aaa">
                                            <DivSep>
                                                <label for="emailEs" className="form-label ">Email<SpanA>*</SpanA></label>
                                                <input type="email" className="form-control" id="studentEmail" name="studentEmail" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                            <DivSep>
                                                <label for="studentPhone" className="form-label">Telefono<SpanA>*</SpanA></label>
                                                <input type="number" className="form-control" id="studentPhone" name="studentPhone" onChange={this.manejadorOnChange} required />
                                            </DivSep>
                                        </div>
                                        <div className="aaa">
                                            <DivSep>
                                                <label for="fNacEs">Fecha de Nacimiento<SpanA>*</SpanA></label>
                                                <input type="date" min="1980-12-31" max="2016-12-31" className="form-control" id="studentBornDate" name="studentBornDate" onChange={this.manejadorOnChange} />
                                            </DivSep>
                                            <DivSep>
                                                <label for="gradoEs" className="form-label">Grado al que aspiras<SpanA>*</SpanA></label>
                                                <select className="custom-select custom-select-lg" id="studentGrade" name="studentGrade" onChange={this.manejadorOnChange}>
                                                    <option selected disabled>Seleccionar</option>
                                                    <option value="PREESCOLAR">Preescolar</option>
                                                    <option value="PRIMERO">Primero</option>
                                                    <option value="SEGUNDO">Segundo</option>
                                                    <option value="TERCERO">Tercero</option>
                                                    <option value="CUARTO">Cuarto</option>
                                                    <option value="QUINTO">Quinto</option>
                                                    <option value="SEXTO">Sexto</option>
                                                    <option value="SEPTIMO">Septimo</option>
                                                    <option value="OCTAVO">Octavo</option>
                                                    <option value="NOVENO">Noveno</option>
                                                    <option value="DECIMO">Decimo</option>
                                                    <option value="ONCE">Once</option>
                                                </select>
                                            </DivSep>
                                        </div>
                                    </div>
                                    <div className="step-footer">
                                        <button type="button" onClick={changeStep} className="step-botton step-botton-back" data-to_step="1" data-step="2">Regresar</button>
                                        <button type="button" onClick={changeStep} className="step-botton step-botton-next" data-to_step="3" data-step="2" id="btn2">Siguiente</button>
                                    </div>
                                </Contenedor1>

                            </div>
                            <div className="step" id="step-3">
                                <Contenedor>
                                    <div className="step-header">
                                        <H2 className="step-title">Politica de tratamiento de datos</H2>
                                    </div>
                                    <div className="step-body">
                                        <div className="aaa">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="studentAccept" required />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Afirmo que he leído y acepto las <a target="_new" href="https://www.sic.gov.co/sobre-la-proteccion-de-datos-personales">politicas de tratamiento de datos personales.</a>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="step-footer">
                                        <button type="button" onClick={changeStep} className="step-botton step-botton-back" data-to_step="2" data-step="3">Regresar</button>
                                        <button type="submit" onClick={this.manejadorBoton} className="step-botton" id="btn3">Enviar</button>
                                    </div>
                                </Contenedor>
                            </div>
                        </div>
                    </form>
                </div>
                <div>
                    <Footer />
                </div>
            </div>

        );
    }
}

export default Postulate;
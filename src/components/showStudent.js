import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, Route, withRouter } from "react-router-dom";
import Estudiante from "../pages/Estudiante";


const ShowStudent = (stu) => {
    const verStu = ({history}) =>{
        localStorage.setItem("user", JSON.stringify(stu));
        window.location.assign("/estudiante")
        //winhistory.push("/home", { update: true });
        
    }
    return (
        <button onClick={verStu} className="btnEstu" >
        <div class="row text-center cardEstud">
            <div class="col-xl-3 col-sm-6 mb-5  cardEstud">
                <div class="bg-white rounded shadow-sm py-5 px-4 subCard"><img src="https://pngimg.com/uploads/student/student_PNG145.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                    <h5 class="mb-0">{stu.stu.studentFirstName} {stu.stu.studentSurName} {stu.stu.studentSecondSurName}</h5><span class="small text-uppercase text-muted">{stu.stu.studentID}</span>
                </div>
            </div>
        </div>
        </button>
    );
}

export default withRouter(ShowStudent);
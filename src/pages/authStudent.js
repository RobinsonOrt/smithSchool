import Nav from "../components/Nav";
import './authStudents.css';
import ShowScore from "../components/ShowScore";
import { getStudentById, getGradeId, getCoursesByGrade } from "../core/apiCore";
import React, { useState, useEffect } from 'react';
import { API } from '../config';
import Footer from "../components/Footer";

const AuthStudent = () => {
    const [student, setStudent] = useState([]);
    const [courses, setCourses] = useState([]);
    const [error, setError] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [status, setStatus] = useState();
    

    window.onload = () => {
        getStudentById(localStorage.getItem("userId")).then(data => {
            if (data.error) {
                setError(data.error);
                setErrorMsg(data.errorMsg);
                setStatus(data.status);
            } else {
                setStudent(data[0]);
                llamarid(data[0].studentGrade);
            }
        });
        
    }

    const llamarid = (grade) =>{
        getGradeId(grade).then(data => {
            if (data.error) {
                console.log("error1")
            } else {
                //console.log(data[0]);
                callCourses(data[0]._id)
            }
        })
    }

    
    const callCourses = (gradeId) =>{
        getCoursesByGrade(gradeId).then(data => {
            if (data.error) {
                console.log("error2")
            } else {
                setCourses(data);
            }
        })
    }
    
    return (
        <div>
            <div><Nav user={localStorage.getItem("userName")} /></div>
            <div className="container">
                <div className="main-body">

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card2">
                                <div className="card-body22">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://pngimg.com/uploads/student/student_PNG145.png" alt="Admin" className="rounded-circle stuPhoto" width="150" />
                                        <div className="mt-3">
                                            <h4>{student.studentFirstName} {student.studentSurName}</h4>
                                            <p className="text-secondary mb-1">{student.studentTypeID} {student.studentID}</p>
                                            <p className="text-muted font-size-sm">Grado {student.studentGrade}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card2 mt-3">
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-emoji-angry-fill" viewBox="0 0 16 16">
                                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.053 4.276a.5.5 0 0 1 .67-.223l2 1a.5.5 0 0 1 .166.76c.071.206.111.44.111.687C7 7.328 6.552 8 6 8s-1-.672-1-1.5c0-.408.109-.778.285-1.049l-1.009-.504a.5.5 0 0 1-.223-.67zm.232 8.157a.5.5 0 0 1-.183-.683A4.498 4.498 0 0 1 8 9.5a4.5 4.5 0 0 1 3.898 2.25.5.5 0 1 1-.866.5A3.498 3.498 0 0 0 8 10.5a3.498 3.498 0 0 0-3.032 1.75.5.5 0 0 1-.683.183zM10 8c-.552 0-1-.672-1-1.5 0-.247.04-.48.11-.686a.502.502 0 0 1 .166-.761l2-1a.5.5 0 1 1 .448.894l-1.009.504c.176.27.285.64.285 1.049 0 .828-.448 1.5-1 1.5z" />
                                        </svg> Quejas y reclamos sobre NOTAS.</h6>
                                        <br /><br />
                                        <p>Para cualquier queja comunicarse al correo:</p>
                                        <span className="text-secondary">smithschool@gmail.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card2 mb-3">
                                <div className="card-body22">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Nombre Completo</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {student.studentFirstName} {student.studentSecondName} {student.studentSurName} {student.studentSecondSurName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {student.studentEmail}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {student.studentPhone}
                                        </div>
                                    </div>


                                    <hr />
                                </div>
                            </div>

                            <div className="row gutters-sm">
                                <div className="col-sm-12 mb-3">
                                    <div className="card2 h-100">
                                        <div className="card2-body22">
                                            <h6 className="d-flex align-items-center mb-3 h6N"><i className="material-icons text-info mr-2">Calificaciones </i></h6>
                                            {courses.map((course) => {
                                                    
                                            return(<ShowScore course={course.courseName} courseId={course._id} studentId={localStorage.getItem("userId")}/>)
                                                    
                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>

    );
};

export default AuthStudent;
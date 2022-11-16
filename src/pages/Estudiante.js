import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { useState, useEffect } from 'react';
import { getStudentById, getGradeId, getCoursesByGrade } from "../core/apiCore";
import ScoreForAdmin from "../components/scoreForAdmin";
import './Estudiante.css'

const Estudiante = () => {
    const stu = JSON.parse(localStorage.getItem('user'));
    const [student, setStudent] = useState([]);
    const [courses, setCourses] = useState([]);

    window.onload = () => {
        llamarid(stu.stu.studentGrade)
    }

    const llamarid = (grade) => {
        getGradeId(grade).then(data => {
            if (data.error) {
                console.log("error1")
            } else {
                //console.log(data[0]);
                callCourses(data[0]._id)
            }
        })
    }


    const callCourses = (gradeId) => {
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
            <div className="container contListEs">
                <div className="main-body">

                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card2">
                                <div className="card-body22">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://pngimg.com/uploads/student/student_PNG145.png" alt="Admin" className="rounded-circle stuPhoto" width="150" />
                                        <div className="mt-3">
                                            <h4>{stu.stu.studentFirstName} {stu.stu.studentSurName}</h4>
                                            <p className="text-secondary mb-1">{stu.stu.studentTypeID} {stu.stu.studentID}</p>
                                            <p className="text-muted font-size-sm">Grado {stu.stu.studentGrade}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card2Estu mt-3">
                                <div class="container contEstu d-flex justify-content-center">
                                    <div class="cardEstu">
                                        <div class="top-container"> <img src="https://i.imgur.com/G1pXs7D.jpg" class="img-fluid profile-image" width="70" />
                                            <div class="ml-3">
                                                <h5 class="name">{stu.stu.tutorFirstName} {stu.stu.tutorSecondName} {stu.stu.tutorSurName} {stu.stu.tutorSecondSurName}</h5>
                                                <p class="mail">Parentesco: {stu.stu.tutorRelationship}</p>
                                            </div>
                                        </div>
                                        <div class="middle-container d-flex justify-content-between align-items-center mt-3 p-2">
                                            <div class="dollar-div">
                                                <div class="round-div"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-plus" viewBox="0 0 16 16">
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                                    <path fill-rule="evenodd" d="M12.5 1a.5.5 0 0 1 .5.5V3h1.5a.5.5 0 0 1 0 1H13v1.5a.5.5 0 0 1-1 0V4h-1.5a.5.5 0 0 1 0-1H12V1.5a.5.5 0 0 1 .5-.5z" />
                                                </svg></div>
                                            </div>
                                            <div class="d-flex flex-column text-right mr-2"> <span class="current-balance">{stu.stu.tutorEmail}</span> <span class="amount">{stu.stu.tutorPhone}</span> </div>
                                        </div>
                                        <div class="recent-border mt-4"> <span class="recent-orders">{stu.stu.tutorTypeID} {stu.stu.tutorID}</span> </div>
                                        <div class="wishlist-border pt-2"> <span class="wishlist">Información del Acudiente</span> </div>
                                        <div class="fashion-studio-border pt-2"> <span class="fashion-studio">The Smith School</span> </div>
                                    </div>
                                </div>
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
                                            {stu.stu.studentFirstName} {stu.stu.studentSecondName} {stu.stu.studentSurName} {stu.stu.studentSecondSurName}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {stu.stu.studentEmail}
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Phone</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {stu.stu.studentPhone}
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
                                            {courses.map((course, i) => {
                                                console.log(i)

                                                return (<ScoreForAdmin ia={i} course={course.courseName} courseId={course._id} studentId={stu.stu._id} />)

                                            })}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div><Footer /></div>
        </div>
    );
}

export default Estudiante;
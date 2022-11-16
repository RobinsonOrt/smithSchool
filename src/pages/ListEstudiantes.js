import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import ShowStudent from '../components/showStudent';
import { getCantByGrade } from '../core/apiCore'
import './listEstudiantes.css'

const ListEstudiantes = () => {
    const [cantStu, setCantStu] = useState([]);

    const loadCantByGrade = (gradeName1) => {
        getCantByGrade(gradeName1).then(data => {
            if (data.error) {
                console.log("Error")
            } else {
                setCantStu(data);
            }
        })
    }
    useEffect(() => {
        loadCantByGrade(localStorage.getItem("grade"));
    }, [])

    return (
        <div>
            <Nav user={localStorage.getItem("userName")} />
            <div class="container contListEs">
                {
                    cantStu.map((stu) => (
                        <ShowStudent stu={stu}/>
                    ))
                }
            </div>
            <Footer />
        </div>
    );
}

export default ListEstudiantes;
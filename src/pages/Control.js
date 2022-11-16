import React, { useState, useEffect } from 'react';
import { getGrades } from '../core/apiCore';
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import CardGrade from "../components/cardGrade";


const Control = () => {
    const [grades, setGrades] = useState([]);

    const loadGrades = () => {
        getGrades().then(data => {
            if (data.error) {
                console.log("Error")
            } else {
                setGrades(data)
            }
        })
    }


    useEffect(() => {
        loadGrades();
    }, [])

    return (
        <div>
            <div><Nav user={localStorage.getItem("userName")} /></div>

            <div class="container">
                {
                    grades.map((grade) => {
                        return (<CardGrade gradeName={grade.gradeName} />)
                    })
                }

            </div>

            <div><Footer /></div>
        </div>
    )
}

export default Control;
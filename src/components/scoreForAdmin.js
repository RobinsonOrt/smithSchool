import React, { useState, useEffect } from 'react';
import { getScore, setScoreA, updateScore } from '../core/apiCore'


const ScoreForAdmin = ({ course, courseId, studentId, ia }) => {
    const [update, setUpdate] = useState(0);
    const sendScoreF = e => {
        e.preventDefault();
        const score1 = document.getElementById(ia).value;
        getScore(courseId, studentId).then(data=>{
            if(data.error){
                console.log("error")
            }else{
                console.log(data[0])
                if(data[0]==undefined){
                    setScoreA(score1, courseId, studentId).then(data=>{
                        if(data.error){
                            console.log(data.error);
                        }else{
                            //console.log(data);
                        }
                    })
                }else{
                    updateScore(score1, data[0]._id).then(data=>{
                        //console.log(data)
                    })
                }
            }
        })
        document.getElementById(ia).value = "";
        setScore(score1);

    }

    const [score, setScore] = useState([]);

    getScore(courseId, studentId).then(data => {
        if (data.error) {
            console.log("error3")
        } else {
            if (data[0] == undefined) {
                setScore("No disponible")
            } else {
                setScore(data[0].score);
            }
        }
    })

    let msg = "";
    if (score === "No disponible") {
        msg = "N/A"
    } else {
        msg = score;
    }

    return (
        <div className="progressbar22 courseBar">
            <div className='divSepN'>
                <small className='courseSep1'>{course}</small>
                <small>{msg}</small>
                <div className='divFormN'>
                    <form onSubmit={sendScoreF} id="form1">
                        <input type="number" placeholder='Nota' min="0" max="5" className='inputScore' step="0.01" id={ia} required></input>
                        <button type='submit' className='btnSendScore'>Guardar</button>
                    </form>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default ScoreForAdmin;
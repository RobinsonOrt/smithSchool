import React, { useState } from 'react';
import { getScore } from '../core/apiCore'

const ShowScore = ({course, courseId, studentId}) => {
    const [score, setScore] = useState([]);
    getScore(courseId, studentId).then(data=>{
        if(data.error){
            console.log("error3")
        }else{
            if(data[0] == undefined){
                setScore("No disponible")
            }else{
                setScore(data[0].score);
            }
        }
    })
    
    let porc = 0;
    let msg = "";
    if(score === "No disponible"){
        porc = 0;
        msg = "Nota no disponible"
    }else{
        porc = (score / 5)*100;
        msg = score;
    }
    
    
    return (
        <div className="progressbar22">
            <div className='divSep'><small>{course}</small><small className='smallR'>{msg}</small></div>
            
            <div className="progress mb-3" Style={'height: 5px'}>
                <div className="progress-bar bg-primary" role="progressbar" Style={`width: ${porc}%`} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
        </div>
    );
}

export default ShowScore;
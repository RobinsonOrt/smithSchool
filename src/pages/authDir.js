import React, { useState, useEffect } from 'react';
import { getSolicitudes } from '../core/apiCore';
import CardSoli from '../components/CardSoli';
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import './authDir.css';
import Error from "../components/error";


const AuthDir = () =>{


    const [solicitudes, setSolicitudes] = useState([]);
    const [error, setError] = useState();
    const [errorMsg, setErrorMsg] = useState();
    const [status, setStatus] = useState();
    
    const loadSolicitudes = () =>{
        getSolicitudes().then(data => {
            if(data.error){
                setError(data.error);
                setErrorMsg(data.errorMsg);
                setStatus(data.status);
            }else{
                console.log(data);
                setSolicitudes(data);
            }
        })
    }

    useEffect(()=>{
        loadSolicitudes();
    }, [])

    return(
        <div>{(error)?<div><Error error={error} errorMsg={errorMsg} status={status} /></div>:<div><div>
            <Nav user={localStorage.getItem("userName")} />
        </div>
        <div className='container cont'>
            <div className='row'>
                {solicitudes.map((solicitud, i) => (
                    <div key={i} className='col-lg-4 col-md-6 col-sm-6 col-sm-6'>
                        <CardSoli solicitud={solicitud} />
                    </div>
                ))}
            </div>
        </div>
        <div>
            <Footer />
        </div></div>
            }
            
        </div>
        
    )

    
};

export default AuthDir;
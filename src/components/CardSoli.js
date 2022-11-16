import './cardSoli.css';
import { API } from "../config";
import axios from "axios";

const CardSoli = ({solicitud}) => {
    var bornDate = new Date(solicitud.studentBornDate);
    const getDate = (date)=>{
        let result = (date.getDate() + 1) + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
        return result;
    }
    const deleteSolicitud = () =>{
        const myHeader = new Headers({
            'auth-token': localStorage.getItem("token"),
            'rol': localStorage.getItem("userRol")
        });
        return fetch(
            `${API}/liststudent/delete/${solicitud._id}`,
            {
                method: 'DELETE',
                headers : myHeader
            }
        )
        .then(window.location.reload())
        .catch(err => console.log(err));
    }

    const acceptSolicitud = () => {
        let url = API + "/studentaccept/registeraccept"
        axios.post(url, {
            "tutorTypeID": solicitud.tutorTypeID,
            "tutorID": solicitud.tutorID,
            "tutorFirstName": solicitud.tutorFirstName,
            "tutorSecondName": solicitud.tutorSecondName,
            "tutorSurName": solicitud.tutorSurName,
            "tutorSecondSurName": solicitud.tutorSecondSurName,
            "tutorEmail": solicitud.tutorEmail,
            "tutorPhone": solicitud.tutorPhone,
            "tutorRelationship": solicitud.tutorRelationship,
            "studentTypeID": solicitud.studentTypeID,
            "studentID": solicitud.studentID,
            "studentFirstName": solicitud.studentFirstName,
            "studentSecondName": solicitud.studentSecondName,
            "studentSurName": solicitud.studentSurName,
            "studentSecondSurName": solicitud.studentSecondSurName,
            "studentEmail": solicitud.studentEmail,
            "studentPhone": solicitud.studentPhone,
            "studentBornDate": solicitud.studentBornDate,
            "studentGrade": solicitud.studentGrade
        })
        .then(response => {
            if(!response.data.error){
                registerUser(response.data._id);
                deleteSolicitud();
            }else{
                alert(response.data.error)
            }
        })
        .catch(error => {
            alert("Presentamos un error, Intente nuevamente");
        })
    }

    const headers = {
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    }
    const createPass = () =>{
        let passwordA = Math.floor(Math.random() * 10000000) + 1000000;
        const ps = passwordA + "16";
        return ps;
    }
    const registerUser = (studentId) =>{
        let url = API + "/usercreate/register"
        axios.post(url, {
            "name": solicitud.studentFirstName + " " +solicitud.studentSurName,
            "email": solicitud.studentEmail,
            "password": createPass(),
            "rol": "2",
            "studentAccept": studentId,
        },{
            headers: headers
        }
        )
        .then(response => {
            if(!response.data.error){
                
            }else{
                alert(response.data.error)
            }
        }).catch(error => {
            alert("Presentamos un error, Intente nuevamente");
        })
    }
    return (
        <div className='boxHoa cyan'>
            <div>
                <h2>{solicitud.studentFirstName} {solicitud.studentSecondName} {solicitud.studentSurName}</h2>
                <br />
                <h4>Identificacion: {solicitud.studentTypeID} {solicitud.studentID}</h4>
                <h4>Fecha de Nacimiento: {getDate(bornDate)}</h4>
                <h4>Grado: {solicitud.studentGrade}</h4>
                <br />
                <h4>Telefono: {solicitud.studentPhone}</h4>
                <h4>Email: {solicitud.studentEmail}</h4>
                <br />
                <button onClick={deleteSolicitud} className='btn btn-danger btn-soli'>Rechazar</button>
                <button onClick={acceptSolicitud} className='btn btn-success btn-soli'>Aceptar</button>
            </div>
        </div>
    );
}
 
export default CardSoli;


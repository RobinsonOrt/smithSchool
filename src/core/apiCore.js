import { API } from '../config';

export const getSolicitudes = () =>{
    const myHeader = new Headers({
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/liststudent/students`,
        {
            method: 'GET',
            headers : myHeader
        }
    )
    .then(response =>{
        return response.json()
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}

export const getStudentById = (id) =>{
    const myHeader = new Headers({
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/studentacc/student/${id}`,
        {
            method: 'GET',
            headers : myHeader
        }
    )
    .then(response =>{
        return response.json()
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}

export const deleteSolicitudApi = ({id}) =>{
    const myHeader = new Headers({
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/liststudent/delete/${id}`,
        {
            method: 'DELETE',
            headers : myHeader
        }
    )
    .then(console.log("Eliminado"))
    .catch(err => console.log(err));
}

export const getGradeId = (grade) =>{
    const myHeader = new Headers({
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/grade/gradename/${grade}`,
        {
            method: 'GET',
            headers : myHeader
        }
    )
    .then(response =>{
        return response.json();
        //let estadisticas = json.dates['2022-01-22'].countries.Colombia
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}

export const getCoursesByGrade = (gradeId) =>{
    const myHeader = new Headers({
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/course/listcourses/${gradeId}`,
        {
            method: 'GET',
            headers : myHeader
        }
    )
    .then(response =>{
        return response.json();
        //let estadisticas = json.dates['2022-01-22'].countries.Colombia
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}

export const getScore = (courseId, studentId) =>{
    const myHeader = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/score/scorestudent`,
        {
            method: 'POST',
            headers : myHeader,
            body: JSON.stringify({studentAccept : studentId, course : courseId})
        }
    )
    .then(response =>{
        return response.json();
        //let estadisticas = json.dates['2022-01-22'].countries.Colombia
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}

export const getCantByGrade = (gradeName) =>{
    const myHeader = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/studentaccept/grado/${gradeName}`,
        {
            method: 'GET',
            headers : myHeader,
        }
    )
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}

export const getGrades = () =>{
    const myHeader = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/grade/grades`,
        {
            method: 'GET',
            headers : myHeader,
        }
    )
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}

export const setScoreA = (score, course, studentAccept) =>{
    const myHeader = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/score/createscore`,
        {
            method: 'POST',
            headers : myHeader,
            body: JSON.stringify({score : score, course : course, studentAccept : studentAccept})
        }
    )
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}




export const updateScore = (score, scoreId) =>{
    const myHeader = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem("token"),
        'rol': localStorage.getItem("userRol")
    });
    return fetch(
        `${API}/score/updatescore`,
        {
            method: 'POST',
            headers : myHeader,
            body: JSON.stringify({scoreId : scoreId, score : score})
        }
    )
    .then(response =>{
        return response.json();
    })
    .catch(err => {
        var response={"error": "Presentamos un error, porfavor intente nuevamente", "errorMsg": "Error interno del servidor", "status": "500"}
        return response});
}
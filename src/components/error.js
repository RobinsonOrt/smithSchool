import React from "react";
const Error = ({error, errorMsg, status}) => {
    return (
        <div class='container'>
            <div class='row'>
                <div class='col-md-12'>
                    <div class='error-template'>
                        <h1>Oops!</h1>
                        <h2>{status} {errorMsg}</h2>
                        <div class='error-details'>{error}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Error;
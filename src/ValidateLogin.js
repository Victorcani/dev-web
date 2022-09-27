import React from "react";
import { Link } from "react-router-dom";
 
export default function ValidateLogin() {
    return (

        <div>
            Autentique-se por favor
            <div>
                <Link to ='/login'>Ir para Login</Link>
            </div>
        </div>
    )
}
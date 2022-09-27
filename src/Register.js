//import { dblClick } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import db from './services/firebase';

function Register() {
    const [email,setEmail]= useState('')
    const [name,setName]=useState('')
    const [birthDate,setBirthDate]=useState(new Date())
    const [password,setPassword]=useState('') 
    const [lastName, setLastName] = useState('')

    const handleRegister = () => {

        const payload = {
            name, lastName, birthDate, email, password 
        }

        db.collection('users').add(payload)
        .then(r => console.log(`${r.id}`))
        .catch(err => console.warn(err))
    }

   
    return (

        <div>
              <div>
                <Link to='/login'>Login</Link>
                </div>
                  
                <div>                    
                    <div>
                        Email
                        <input type="email" onChange={e => setEmail(e.target.value)} />
                    </div>   
                    <div>
                        Nome
                        <input type="text" onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        Data de nascimento
                        <input type="date" onChange={e => setBirthDate(e.target.value)} />
                    </div>
                    <div>
                        Senha
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        Sobrenome
                        <input type="text" onChange={e => setLastName(e.target.value)} />
                    </div>
                    <button type = 'button' onClick={handleRegister}>Registrar</button>
                 

                </div>
        </div>
    )
}

export default Register
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import db from "./services/firebase";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error,setError] = useState('')
    const navigate = useNavigate()

    const handleLogin = async () => {
   
        const query = await db.collection('users')
        .where('email','==',email)
        .get()

        query.docs.map(value => {
 
            if (value.data().password === password) {
                localStorage.setItem('authenticated', 'true')

                navigate('/main', {
                    state: {
                        name:value.data().name,
                        lastName: value.data().lastName,
                        birthDate: value.data().birthDate

                    }


                })
            } else {
                setError ('Dados Incorretos')
            }


        })

        if (query.docs.lenght <= 0){
            setError('Favor Cadastrar')
        }

    }    
    return (
        <div>
            <div>
                <Link to='/register'>Registre-se</Link>
                <Link to='/main'>Página Principal</Link>

                </div>
                    
                <div>
                    {error !== '' && <div>
                            {error}
                        </div>}

                    <div >
                        Email
                        <input type="email" onChange={e => setEmail(e.target.value)} />

                    </div>

                    <div>
                        Senha
                    <input type="password" onChange={e => setPassword(e.target.value)} />

                    </div>

                    <button type="button" onClick={handleLogin}>Logar</button>
                </div>
        </div>
    )
}

export default Login
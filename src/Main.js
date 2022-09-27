import React from "react";
import {useLocation} from "react-router";
function Main() {
    const {state} = useLocation()

    return (

        <div>
            Olá, {state.name} {state.lastName}, sua data de nascimento é {new Date(state.birthDate).toLocaleDateString('pt-BR')}
        </div>
    )
}
export default Main
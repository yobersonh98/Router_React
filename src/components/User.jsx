import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = () => {

    const {id} = useParams()

    //ESTADO
    const [persona, setPersona] = useState([]);

    useEffect(() => {
        //console.log('useEffect')
            obtenerDatos()
    
    }, [])
    
    const obtenerDatos = async () => {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const users = await data.json()

        setPersona(users)
        //console.log(users)
    }

    return (
        <div>
            <h3>{persona.name}</h3>
        <p>{persona.phone}</p>
        </div>
    )
}

export default User

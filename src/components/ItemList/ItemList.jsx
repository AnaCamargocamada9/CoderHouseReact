import React, { useEffect, useState } from 'react'


export const ItemList = () => {

const [users, setUsers] = useState([])

const [isLoading, setIsLoading] = useState(true)

useEffect(() => {
setTimeout(() =>{
    fetch('./productos.js')
    .then(response => response.json()) 
    .then(data => {
        setUsers(data);
        setIsLoading(false)
    });
},2000)

}, []) //traigo solo el array , siempre va en este lugar cuando lo llamo.





return (
    <div>

<h2>Lista de usuarios</h2>
{
    isLoading ? (<p>Cargando usuarios</p>):
    (<ul>
        {users.map(user => 
            <li key={user.id}> {user.name}, {user.age} años </li>
            )}
    </ul>) //va un ul para mapearlo, lista.
}


    </div>
 )
}


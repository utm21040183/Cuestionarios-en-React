//Semana 6 - Creación de lista dinamica.
// Use el que hicimos en clase, solo le agregué lo que faltaba

//Notas: profe, no sabía como sumar todos los valores y si lo busqué pero ya supe que es con el metodo reduce
//porque reduce el arreglo y aquí esta funcionando para sumar todo. Tiene dos parametros que son acum y curr 
//va por iteraciones y en cada una toma el valor de acum y le suma curr obviamente iniciando en 0.


//Ejemplito (es con el que entendí)

//supongamos que los valores son 5, 10, 15

//1ra iteración 0+5 (acum =5)
//2da iteración 5+10 (acum =15)
//3ra iteración 15+15(acum = 30)

import React, { useState } from "react";
import { Button, Container, FormControl } from "react-bootstrap";

export const Counter = () => {
    const [count, setCount] = useState(0); 
    const [list, setList] = useState([]); 

    //Agregué dos estados, para los valores y el total
    const [valores, setValores] = useState({}); 
    const [total, setTotal] = useState(0); 


    const agregarElementoLista = () => {
        const nList = [...list, list.length + 1]; // Añade un nuevo campo a la lista
        setList(nList); // Actualiza la lista
        setValores({ ...valores, [nList.length - 1]: '' }); // hace que al agregar otro campo esté vacío
    };


    const restarElementoLista = () => {
        if (list.length > 0) {
            const nList = list.slice(0, -1); // Elimina el último elemento
            setList(nList); // Actualiza la lista

            const nuevosValores = { ...valores }; // Crea una copia de los valores actuales
            delete nuevosValores[nList.length]; // Elimina el valor del último campo
            setValores(nuevosValores); // Actualiza los valores sin el último campo
            actualizarTotal(nuevosValores); // Recalcula el total después de eliminar
        }
    };

    // Esta funcion cambia el valor si se modifica 
    const cambiarValor = (indice, valor) => {
        const nuevosValores = { ...valores, [indice]: Number(valor) || 0 }; // Actualiza el valor en el campo
        setValores(nuevosValores); // Actualiza el estado de los valores
        actualizarTotal(nuevosValores); // Recalcula el total 
    };

    // actualiza la suma total de los valores ingresados
    const actualizarTotal = (valores) => {
        const suma = Object.values(valores).reduce((acum, curr) => acum + curr, 0); // Suma todo
        setTotal(suma); // Actualiza el total
    };

    
    const incrementar = () => {
        setCount(count + 1);
    };

   
    const decrementar = () => {
        setCount(count - 1);
    };

    return (
        <Container>
           
            <h3>{count}</h3>
            <Button onClick={() => incrementar()}>add</Button>
            <Button onClick={() => decrementar()}>decrease</Button>
            <hr />
            
            {/*Agregué arriba de la lista el campo donde se muestra el total de la suma*/}
            <center><h3>Total: {total}</h3></center>
            <h3>Lista dinámica</h3>

            {list.map((valor, i) => (
                <div key={i}>
                    <p>Cifra: {i + 1}</p>
                    <FormControl
                        className="mb-3"
                        type="number"
                        value={valores[i] || ''} 
                        onChange={(e) => cambiarValor(i, e.target.value)} 
                    />
                </div>
            ))}

            <Button onClick={() => agregarElementoLista()}>Add</Button>
            <Button onClick={() => restarElementoLista()}>Rest</Button>
        </Container>
    );
};

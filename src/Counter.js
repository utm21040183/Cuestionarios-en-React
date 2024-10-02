import React from "react";

import { useState } from "react"
import { Button, Container, FormControl } from "react-bootstrap"

export const Counter = () => {

    const [count, setCount] = useState(0)

    const [list, SetList] = useState([1])

    const addListElement = () => {
        const nList = list
        list.push(nList.length + 1)
        SetList([...nList])

    }

    
    const restListElement = () => {
        const nList = list
        list.pop(nList.length + 1)
        SetList([...nList])

    }


    const increment = () =>  {
        setCount(count+1)
    }

    const decrement = () =>  {
        setCount(count-1)
    }

    return (
        <Container>
                    <h3>{count}</h3>
                    <Button  onClick={()=>increment()}>add</Button>
                    <Button  onClick={()=>decrement()}>decrease</Button>
                    <hr></hr>
                    <h3>Lista dinamica</h3>

                    {
                        list.map((value, i)=>(

                           <>
                           
                             <p> Cifra: {i+1}</p>
                            <FormControl className="mb-3"></FormControl>
                             </>

                        ))

                        
                    }

                    
                     <Button  onClick={()=>addListElement()}>add</Button>
                     <Button  onClick={()=>restListElement()}>decrease</Button>
        </Container>
    )
}
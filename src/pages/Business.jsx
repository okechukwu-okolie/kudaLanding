import styled from 'styled-components'
import { useState } from 'react'

const Business =()=>{

    const [add, setAdd]= useState(0)

    let addition = ()=>{
        setAdd(add + 1)
    }
    let minus = ()=>{
        setAdd(add - 1)
    }
    let reset = ()=>{
        setAdd(0)
    }



    return(
        <Container>
            <h1>{add}</h1>
            <button onClick={minus}>minus</button>
            <button onClick={reset}>reset</button>
            <button onClick={addition}>addition</button>

        </Container>
    )
}
export default Business

const Container = styled.div`
width: 500px;
height: 500px;
border-radius: 50%;
background-color: lightgreen;
text-align: center;
margin: auto;
margin-top: 50px;
align-content: center;

h1{
    margin-top: -130px;
    font-size: 150px;
}
button{
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    transition:background-color,color .5s ease-in;
    margin: 0px 20px 0px 20px;
    margin-top: -30px;

}
button:hover{
    color: white;
    background-color: red;
}
    

`
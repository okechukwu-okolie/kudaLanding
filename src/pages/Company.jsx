import styled from 'styled-components'
import { useState } from 'react'

const Company =()=>{

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
export default Company

const Container = styled.div`
width: 500px;
height: 500px;
border-radius: 50%;
background-color: lightgoldenrodyellow;
text-align: center;
margin: auto;
margin-top: 50px;
align-content: center;

@media (max-width: 768px){
    width: 300px;
    height: 300px;
}

h1{
    margin-top: -130px;
    font-size: 150px;

    @media (max-width:768px){
        margin-top: 10px;
        font-size: 100px;
    
    }
}
button{
    padding: 10px;
    margin-top: 10px;
    font-size: 20px;
    border: none;
    background-color: white;
    color: black;
    cursor: pointer;
    transition: 0.3s;
    margin: 0px 20px 0px 20px;
    margin-top: -30px;

    @media (max-width:768px){
        
        font-size: 15px;
        margin-top: 10px;
    
}
}
    
button:hover{
    color: white;
    background-color: green;
}
`
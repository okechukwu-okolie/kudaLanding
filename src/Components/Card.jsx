import styled from 'styled-components'


function Card(props){

    return(
        <Container>
            
            <div>
                <span>{props.icon}</span>
            </div>
            <h3>{props.text}</h3>
            
        </Container>
    )
}
export default Card

const Container = styled.div`
margin-top: 100px;
width: 310px;
height: 100px;
background-color:white;
border: transparent;
box-shadow: 2px 2px 4px #40196D;

div{
    padding: 10px;
}

span{
    padding: 7px;
    border-radius: 50%;
    background-color: #DFE3FF;
}
h3{
    font-size: 14px;
    padding-left: 15px;
}
    
`
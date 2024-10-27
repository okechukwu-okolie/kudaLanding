import styled from 'styled-components'


function Address(props){

    return(
        <Container>
            <h2>{props.location}</h2>
            <p>{props.address1}</p>
            <p>{props.address2}</p>
            <p>{props.address3}</p>
        </Container>
    )
}

export default Address

const Container = styled.div`

        color: #40196D;
    

    h2{
        font-size: 16px;
        font-weight: 800;
        margin-bottom: 20px;
    }
    p{
        font-size: 13px;
        line-height: 2.2;
    }
`
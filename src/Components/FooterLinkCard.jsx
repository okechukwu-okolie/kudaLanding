import styled from 'styled-components'


function FooterLinkCard(props){

    return(
        <Container>

            <h1>{props.heading}</h1>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
            <p>{props.text3}</p>
            <p>{props.text4}</p>
            <p>{props.text5}</p>
            <p>{props.text6}</p>
            <p>{props.text7}</p>
            <p>{props.text8}</p>

        </Container>
    )
}

export default FooterLinkCard
const Container = styled.div`
    margin-bottom: 40px;

    @media (max-width: 768px) {
    
    }

h1{
    font-size: 17px;
    font-weight: 800;
    margin-bottom: 13px;
    color: #40196D;
    @media (max-width: 768px) {
        font-size: 17px;
}
}
p{
    font-size: 13px;
    margin-bottom: 13px;
    color: #40196D;
}
`

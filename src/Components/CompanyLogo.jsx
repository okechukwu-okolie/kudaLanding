import styled from 'styled-components'

function CompanyLogo(props){

    return(
        <Container>
            <img src={props.logo} alt="" />
        </Container>
    )
}
export default CompanyLogo

const Container = styled.div`
    
    width: 150px;
    height: 200px;
    
`
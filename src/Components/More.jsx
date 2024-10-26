import styled from'styled-components'

function More (props){

    return(
        <Container>
            <h1>More for you</h1>
            <Card>
                <img src={props.icon} alt="" />
                <h2>{props.title}</h2>
                <p>{props.text1}</p>
                <p>{props.text2}</p>
                <p>{props.text3}</p>
                <a href="#">{props.link}</a>
            </Card>

        </Container>
    )
}

export default More

const Container = styled.div`





`
const Card = styled.div`
        /* margin-top: 100px; */
max-width: 350px;
min-height: 300px;
/* background-color: yellow; */
box-shadow: 1px 1px 3px #80447F;
border-radius: 10px;
`
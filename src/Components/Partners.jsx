import styled from 'styled-components'

function Partner(){

    return(
        <Container>
            
                <h2>
                Our Partners
                </h2>
                <div>
                    <img src="/valar.png" alt="" />
                    <img src="/entree.png" alt="" />
                    <img src="/sbi.png" alt="" />
                    <img src="/target.png" alt="" />
                    <img src="/visa.png" alt="" />
                </div>
            

        </Container>
    )
}
export default Partner

const Container = styled.div`
    background-color: #FBFBFB;

    h2{
        text-align: center;
        padding-top: 60px;
    }
    div{
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        padding: 20px;
        img{
            width: 180px;
            margin: 10px;
        }
    }
`
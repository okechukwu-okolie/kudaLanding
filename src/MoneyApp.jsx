import styled from 'styled-components'


function MoneyApp(){

    return(
        <>
        <Container>
            <div>
                <h2>The money app for <br />Africans.</h2>
                <p>Save, spend, send and invest money across borders.</p>
                <button>Join Kuda</button>
            </div>
            <div>
                <img src="/public/moneyApp.png" alt="" />
            </div>

        </Container>
        <hr />
        
        </>
    )
}
export default MoneyApp

const Container = styled.div`
    
    width: 85%;
    background-color: #EFF1FF;
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 80px;
    border-radius: 10px;


    h2{
        margin-bottom: 20px;
        font-size: 35px;
        font-weight: 900;
        color: #40196D;

    }
    img{
        
    }
    p{
        margin-bottom: 20px;
        color: #40196D;
    }
    button{
        font-size: 16px;
        font-weight: 800;
        background-color:  #40196D;
        color: white;
        padding: 12px 30px;
        border: none;
        border-radius: 10px;

    }
`
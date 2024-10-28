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
                <img src="/moneyApp.png" alt="" />
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
    flex-wrap: wrap;
    margin: auto;
    margin-top: 100px;
    margin-bottom: 80px;
    border-radius: 10px;

    @media (max-width:768px){
        img{
            width: 100%;
            margin-top: 60px;
        }
        h2{
            text-align: center;
        }
        p{
            text-align: center;
            font-size: 14px;
        }
        button{
           margin-left: 50%;
        }
    }


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
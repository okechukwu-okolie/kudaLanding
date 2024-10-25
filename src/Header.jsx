import styled from "styled-components"

function Header(){


    return(
        <Container>
           <LogoNav>
                <Logo>
                    <img src="/public/kudaLogo.png" alt="" />
                    <h1>kuda.</h1>
                </Logo>
                <div>
                    <Navigation>
                        <ul>
                            <li>Personal</li>
                            <li>Business</li>
                            <li>Company</li>
                            <li>Help</li>
                        </ul>
                    </Navigation>
                </div>
            </LogoNav>   
            <ButtonFlag>
                <button>Sign in</button>
                <button>Join Kuda</button>
                <span>
                    <img src="/public/flag.png" alt="" />
                </span>
            </ButtonFlag>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: #f8f9fa;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const LogoNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 60px;
        height: 60px;
    }

    h1{
        color: #40186E;
    }
`

const Navigation = styled.div`
    ul {
        list-style: none;
        display: flex;
    }
    li {
        margin-right: 20px;
    }
`
const ButtonFlag=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;


    span{
        width: 50px;
        height: 50px;
        background-color: red;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    img{
        width: 30px;
    }
`
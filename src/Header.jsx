import styled from "styled-components"
import { IoMdArrowDropdown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";

function Header(){


    return(
        <Container>
            <LogoNav>
                <Logo>
                    <img src="/public/kudaLogo.png" alt="" />
                    <h1>kuda.</h1>
                </Logo>
                {/* <div> */}
                    <Navigation>
                        <ul>
                            <li>Personal<IoMdArrowDropdown /></li>
                            <li>Business<IoMdArrowDropdown /></li>
                            <li>Company<IoMdArrowDropdown /></li>
                            <li>Help<IoMdArrowDropdown /></li>
                        </ul>
                    </Navigation>
                {/* </div> */}
            </LogoNav>   
            <ButtonFlag>
                <button id="btn1">Sign in</button>
                <button id="btn2">Join Kuda</button>
                <span>
                    <img src="/public/flag.png" alt="" />
                </span>
                <span id="hamburger">
                    <RxHamburgerMenu />
                </span>
            </ButtonFlag>
        </Container>
    )
}

export default Header

const Container = styled.div`
    background-color: #FFFFFF;
    padding: 15px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 0;

    @media (max-width:768px){
        padding: 10px 10px;
    }

   
`

const LogoNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    /* @media (max-width:320px){
           margin-left: -30px;
            
        } */
`
const Logo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    img{
        width: 35px;
        height: 35px;


        @media (max-width:768px){
            width: 25px;
            height: 25px;
    }
        
    }

    h1{
        color: #40186E;
        font-size: 25px;
        font-weight: 750;
        cursor: pointer;

        @media (max-width:768px){
            font-size: 20px;
            font-weight: 750;
    }
    }
`

const Navigation = styled.div`
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        margin-left: 100px;
        cursor: pointer;
    }
    li {
        margin-right: 20px;
        font-size: 15px;
        font-weight: 500;
        color: #40186E;
        font-weight: 700;
    }

    @media (max-width:768px) {
        display:none;
    }
`
const ButtonFlag=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    
    @media (max-width:768px){
           margin-left: 95px;
           gap:6px
            
        }

    #btn1{
        border: none;
        color: #40186E;
        font-size: 13px;
        background-color: transparent;
        font-weight: 700;
        cursor: pointer;

        @media (max-width:768px) {
        display:none;
    }
    }
    #btn2{
        border: none;
        background-color: #40186E;
        color: white;
        font-size: 15px;
        font-weight: 700;
        padding: 9px 20px;
        border-radius: 12px;
        cursor: pointer;

        @media (max-width:768px) {
        display:none;
    }
    }
    span{
        width: 30px;
        height: 30px;
        background-color: #9BB4B8;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    img{
        width: 20px;
    }
    #hamburger{
        display: none;

        @media (max-width:768px){
            display:inline;
            background-color: transparent;
            color:#40186E;
            margin-top: 15px;
            
        }
    }
`
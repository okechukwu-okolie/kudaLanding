import styled from "styled-components"
import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowRight } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import {useState} from 'react'

function Header(){

    const [slide,setSlide]=useState(false);
    

    const hamburger =()=>{
        setSlide(!slide)
    
    }
   

    return(
        <Container>
            <LogoNav>
                <Logo>
                    <Link to={'/'}><img src="/kudaLogo.png" alt="" /></Link>
                    <Link to={'/'}><h1>kuda.</h1></Link>
                </Logo>
                {/* <div> */}
                    <Navigation>
                        <ul>
                            <Link to={'/'}><li>Personal<IoMdArrowDropdown /></li></Link>
                            <Link to={'/business'}><li>Business<IoMdArrowDropdown /></li></Link>
                            <Link to={'company'}><li>Company<IoMdArrowDropdown /></li></Link>
                            <Link to={'help'}><li>Help<IoMdArrowDropdown /></li></Link>
                        </ul>
                    </Navigation>
                {/* </div> */}
            </LogoNav>   
            <ButtonFlag>
                <button id="btn1">Sign in</button>
                <button id="btn2">Join Kuda</button>
                <span>
                    <img src="/flag.png" alt="" />
                </span>
                <span id="hamburger"  >
                    <RxHamburgerMenu  onClick={hamburger }  />
                </span>
                <div  className={slide ? "div" : "div-none"}>
  
                    <div className="nav">
                    <button id="btn4">Join Kuda</button>
                    <button id="btn3">Sign in</button>
                

                            <ul>
                                <Link to={'/'}><li>Personal<MdArrowRight /></li></Link>
                                <Link to={'/business'}><li>Business<MdArrowRight /></li></Link>
                                <Link to={'company'}><li>Company<MdArrowRight /></li></Link>
                                <Link to={'/business'}><li>Developer<MdArrowRight /></li></Link>
                                <Link to={'/company'}><li>Contact Us<MdArrowRight /></li></Link>
                                <Link to={'/help'}><li>Help<MdArrowRight /></li></Link>
                            </ul>
                        </div>
                </div>
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
        text-decoration:none;

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
    .div{

       @media (min-width:768px){
        display: none;
       }

        .nav{
            display: block;
            width:310px;
            height: 600px;
            position:absolute;
            right: 0px;
            top: 60px;
            background-color: #ffffffd3;
            
            

            #btn3{
                border: none;
                color: #40186E;
                font-size: 13px;
                background-color: #d6d5d5;
                padding: 12px 20px;
                width:100px;
                font-weight: 900;
                border-radius: 12px;
                cursor: pointer;
        

  
    }
    #btn4{
        border: none;
        background-color: #40186E;
        color: white;
        font-size: 15px;
        font-weight: 700;
        padding: 9px 20px;
        border-radius: 12px;
        cursor: pointer;
        margin-left: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-right: 30px;

    
    }

            ul{
                list-style: none;
            }
            li{
                font-size: 14px;
                padding-left: 20px;
                padding-top: 10px;
                font-weight: 700;
                border-bottom: 1px solid lightgray;
                padding-bottom: 5px;
                padding-top: 30px;
                padding-right: 20px;
            }
        }
    }

    .div-none{
        display: none;
    }
`



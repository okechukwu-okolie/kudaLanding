import styled from 'styled-components'
import FooterLinkCard from './Components/FooterLinkCard'


function FooterLinkCards(){

    return(
        <Container>
            
            <FootFlex>
            <div>
                <img src="/public/kudaLogo.png" alt="" />
                <span>kuda.</span>
            </div>
                <FooterLinkCard  heading='Personal'
                                text1='Discover Personal'
                                text2='Transfer & Spend'
                                text3='Save'
                                text4='Investments'
                                text5='Kuda card'
                                text6=''
                                text7=''
                                text8=''/>
                                
                <FooterLinkCard  heading='Business'
                                text1='Discover Business'
                                text2='Business Registration'
                                text3='softPOS'
                                text4='Invoicing'
                                text5='POS Machine'
                                text6='Business Loan'
                                text7='Business API'
                                text8='Join Kuda Business'/>

                <FooterLinkCard  heading='Company'
                                                text1='Blog'
                                                text2='Press'
                                                text3='Join Our Team'
                                                text4='About Us'
                                                text5=''
                                                text6=''
                                                text7=''
                                                text8=''/>

                <FooterLinkCard  heading='Help'
                                                text1='Get Help'
                                                text2='Scam Awareness'
                                                text3=''
                                                text4=''
                                                text5=''
                                                text6=''
                                                text7=''
                                                text8=''/>

                <FooterLinkCard  heading=''
                                                text1=''
                                                text2=''
                                                text3=''
                                                text4=''
                                                text5=''
                                                text6=''
                                                text7=''
                                                text8=''/>
            </FootFlex>

            <AppStores>
                    <Flex1>
                        <div>
                            <img src="/public/apple.png" alt="" />
                        </div>
                        <div>
                            <p>
                                Download on the
                            </p>
                            <h3>
                                App   Store
                            </h3>
                        </div>
                    </Flex1>
                    <Flex2>
                    <div>
                            <img src="/public/playstore.png" alt="" />
                        </div>
                        <div>
                            <p>
                                GET IT ON
                            </p>
                            <h3>
                                Google Play
                            </h3>
                        </div>
                    </Flex2>
                    <Flex3>
                        <div>
                            <img src="/public/www.png" alt="" />
                        </div>
                        <div>
                            <p>
                                Sign in to K Kuda
                            </p>
                            <h3>
                                On The Web
                            </h3>
                        </div>
                    </Flex3>
                </AppStores>
                <LastNote>
                    Products may vary by country or market.
                </LastNote>
        </Container>
    )
}

export default FooterLinkCards
const Container = styled.div`
        width: 80%;
        margin: auto;
        margin-top: 80px;
        

        div{
            /* display: flex; */
        }
        span{
            font-size: 35px;
            font-weight: 900;
            color:#40196D;
            /* margin-left: -8px; */
            /* margin-top: -20px; */
        }
        img{
            width: 45px;
            margin: -10px;
        }
            
`

const FootFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
`
const AppStores = styled.div`
    display:flex;
    justify-content: left;
    text-align: center;
    margin-left: 90px;

    @media (max-width:768px){
        
        display: block;
        
    }
    
`


const Flex1 = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: black;
    width: 100px;
    padding: 5px 15px;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 10px;

    @media (max-width:768px){
        padding: 3px 13px;
        
        img{
        padding-top: 5px;
        width: 25px;
        text-align: center;
    }
    }

    img{
        padding-top: 5px;
        width: 25px;
        text-align: center;
    }
    p{
        color: white;
        font-size: 9px;
        /* text-align: center; */
        padding-top: 5px;
        margin: 0px;
    }
    h3{
        color: white;
        font-size: 12px;
        padding: 0px;
        margin-top: -5px;
    }
    
    
`


const Flex2 = styled.div`
     display: flex;
     justify-content: space-between;
    background-color: black;
    width: 100px;
    padding: 5px 15px;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 10px;

    @media (max-width:768px){
        padding: 3px 13px;
        
        img{
        padding-top: 5px;
        width: 25px;
        text-align: center;
    }
    }

    img{
        padding-top: 5px;
        width: 25px;
        text-align: center;
    }
    p{
        color: white;
        font-size: 9px;
        /* text-align: center; */
        padding-top: 5px;
        
    }
    h3{
        color: white;
        font-size: 12px;
        padding: 0px;
        margin-top: -5px;
    }
`

const Flex3 = styled.div`
     display: flex;
     justify-content: space-between;
    background-color: #40196D;
    width: 100px;
    padding: 5px 15px;
    border-radius: 5px;
    margin-right: 20px;
    margin-bottom: 10px;

    @media (max-width:768px){
        padding: 3px 13px;
        
        img{
        padding-top: 5px;
        width: 25px;
        text-align: center;
    }
    }

    img{
        padding-top: 5px;
        width: 25px;
        text-align: center;
    }
    p{
        color: white;
        font-size: 9px;
        /* text-align: center; */
        padding-top: 5px;
        
    }
    h3{
        color: white;
        font-size: 12px;
        padding: 0px;
        margin-top: -5px;
    }
`
const LastNote = styled.div`
    text-align: center;
    color: purple;
    margin: 10px 0px;
    font-size: 14px;
`
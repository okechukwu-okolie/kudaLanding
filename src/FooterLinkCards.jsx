import styled from 'styled-components'
import FooterLinkCard from './Components/FooterLinkCard'


function FooterLinkCards(){

    return(
        <Container>
            <div>
                <img src="/public/kudaLogo.png" alt="" />
                <span>kuda.</span>
            </div>
            <FootFlex>
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
        </Container>
    )
}

export default FooterLinkCards
const Container = styled.div`
        
        margin-top: 80px;
        display: flex;
        justify-content: space-evenly;

        div{
            
        }
        span{
            font-size: 35px;
            font-weight: 900;
            margin-left: -8px;
            margin-top: -20px;
        }
        img{
            width: 45px;
        }
            
`

const FootFlex = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-basis: 80%;
`
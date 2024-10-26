import styled from 'styled-components'
import CompanyLogo from './Components/CompanyLogo';
import Partner from './Components/Partners';

function Testimonials(){

    return(
        <Container>
            <div>
                <h2>
                    Don’t just take our word for it
                </h2>
                <img src="/public/scrollingImage.png" alt="" />
            </div>
            <Flex>
                <CompanyLogo logo='/public/TClogo-removebg-preview.png'/>
                <CompanyLogo logo='/public/econsSummit-removebg-preview.png'/>
                <CompanyLogo logo='/public/fintech.png'/>
                <CompanyLogo logo='/public/bbc.png'/>
                <CompanyLogo logo='/public/cnbc.png'/>
                <CompanyLogo logo='/public/euroMoney.png'/>
            </Flex>
            <Partner/>

        </Container>
    );
}
export default Testimonials

const Container = styled.div`

    margin-top: 150px;


    h2{
        text-align: center;
        font-size: 35px;
        font-weight: 900;
        color:#40196D;
    }
    img{
        width: 100%;
        margin-top: 50px;
    }
    
`
const Flex = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
    @media (max-width: 768px){
        flex-wrap: wrap;
    }
`
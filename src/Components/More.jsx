import styled from'styled-components'
import { MdKeyboardArrowRight } from "react-icons/md";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { GiSwapBag } from "react-icons/gi";


function More (){

    return(
        <Container>
            <h1>More for you</h1>
            <CardContainer>
            <Card>
            <div>{<BsSuitcaseLgFill />}</div>
                <h2>Kuda Business</h2>
                <p>Grow your business with our all-in-one <br />business manager. Get a POS, bulk <br />transfers, payroll and more.</p>
                
                <a href="#">Learn more<MdKeyboardArrowRight /></a>
            </Card>
            <Card>
            <div>{<FaPaperPlane />}</div>
                <h2>Transfer & Spend</h2>
                <p>Send money for free to any Nigerian <br />account with 25 free transfers every <br />month.</p>
              
                <a href="#">Learn more<MdKeyboardArrowRight /></a>
            </Card>
            <Card>
            <div>{<GiSwapBag />}</div>
                <h2>Loans</h2>
                <p>Get up to ₦150,000 in your Kuda account <br />easily and repay in convenient <br />instalments.</p>
                
                <a href="#">Learn more<MdKeyboardArrowRight /></a>
            </Card>
            </CardContainer>
            

        </Container>
    )
}

export default More

const Container = styled.div`
        max-width: 90%;
        margin: auto;

        h1{
            text-align: center;
            margin-bottom: 60px;
            font-size: 40px;
            font-weight: 900;
            color: #40196D;
        }

`
const Card = styled.div`
        
    width: 290px;
    height: 210px;
    /* background-color: yellow; */
    box-shadow: 1px 1px 9px #80447F;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 30px;
    div{
        font-size: 20px;
        width: 40px;
        height: 40px;
        background-color: #F3F5FF;
        justify-content: center;
        display: flex;
        align-items: center;
        border-radius: 50%;
    }
    

    h2{
        font-size: 25px;
        font-weight: 900;
        margin:20px 0px ;
        color: #40196D;
       
    }
    p{
        color: grey;
        font-size: 13px;
        font-size: 900;
        margin-bottom: 10px;
    }
`
const CardContainer =styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`
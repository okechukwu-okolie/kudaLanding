import styled from 'styled-components'
import { CiCircleMinus } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { GiSuitcase } from "react-icons/gi";
import { FaPaperPlane } from "react-icons/fa";
import { GiSwapBag } from "react-icons/gi";
import More from './Components/More';


function Table(){

    return(
        <Container>
            <h2>Choose the freedom you need.</h2>
            <table>
                <tr>
                    <th></th>
                    <th>Other Banks</th>
                    <Kuda> <img src="/public/kudaLogo.png" alt="" />Kuda.</Kuda>
                </tr>
            </table>
            <tr>
                <DataHeader><b>Transfer Fee</b></DataHeader>
                <td><CiCircleMinus />Up to ₦50 plus V.A.T.</td>
                <td><CiCircleCheck />25 free transfers every month</td>
            </tr>
            <tr>
                <DataHeader><b>Card Delivery</b></DataHeader>
                <td><CiCircleMinus />🤨</td>
                <td><CiCircleCheck />Yes</td>
            </tr>
            <tr>
                <DataHeader><b>Card Delivery</b></DataHeader>
                <td><CiCircleMinus />🤨</td>
                <td><CiCircleCheck />Yes</td>
            </tr>
            <tr>
                <DataHeader><b>Card Maintenance Fee</b></DataHeader>
                <td><CiCircleMinus />Up to ₦50 per quarter</td>
                <td><CiCircleCheck />No</td>
            </tr>
            <tr>
                <DataHeader><b>Alerts</b></DataHeader>
                <td><CiCircleMinus />Charge for SMS alerts</td>
                <td><CiCircleCheck />Free instant notifications</td>
            </tr>
            <tr>
                <DataHeader><b>Annual Interest</b></DataHeader>
                <td><CiCircleMinus />4%</td>
                <td><CiCircleCheck />Up to 15%</td>
            </tr>
            <tr>
                <DataHeader><b>Bill Payment Fee</b></DataHeader>
                <td><CiCircleMinus />Up to ₦100 per bill</td>
                <td><CiCircleCheck />No</td>
            </tr>
            <tr>
                <DataHeader><b>Instant Reversals</b></DataHeader>
                <td><CiCircleMinus />😔</td>
                <td><CiCircleCheck />Yes</td>
            </tr>
            <tr>
                <DataHeader><b>Maintenance</b></DataHeader>
                <td><CiCircleMinus />Yes</td>
                <td><CiCircleCheck />No</td>
            </tr>
            <MoreFlex>
            
            <div>
                <More icon ={<GiSuitcase />}/>
                <More icon ={<FaPaperPlane />}/>
                <More icon = {<GiSwapBag />}/>
            </div>
            </MoreFlex>
        </Container>
    )
}
export default Table

const Container = styled.div`
    display: flexbox;
    
    flex-wrap: wrap;

    h2{
        font-size: 35px;
        margin: 80px 0px;
        font-weight: 900;
        text-align: center;
        color:#5C3B7F;
    }

    background-color:white;
    max-width: 80%;
    margin: auto;
    /* text-align: center; */
    margin-bottom: 200px;

table{
   min-height: 100px;
    border-collapse: collapse;
}
th{
    width: 400px;
}
td{
    width:400px;
    min-height: 300px;
    border-collapse: collapse;
}
    tr,td{
        border: 1px solid grey;
        border-collapse: collapse;
    }
    th{
        text-align: left;
    }
`
const Kuda = styled.div`
margin-top: 20px;
    width: 400px;
     text-align: left;
     /* border: 1px solid grey; */
     border-collapse: collapse;
     width: 357px;
     display: flex;
     justify-content: left;
     align-items: center;
    color:#5C3B7F;
     font-size: 35px;
     font-weight: 800;


     img{
        width: 50px;
    }
`
const DataHeader = styled.div`
    width:354px;
    min-height: 50px;
    text-align: left;
    border: 1px solid grey;
    border-collapse: collapse;
    display: flex;
    align-items: center;
    justify-content: center;
`
const MoreFlex =styled.div`
   div{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
   }
h1{
    font-size: 40px;
    font-weight: 800;
    margin: 60px 0;
    text-align:center;
    color: #80447F;
}
    
`
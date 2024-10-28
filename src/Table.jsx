import styled from 'styled-components'
import { CiCircleMinus } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";



function Table(){

    return(
        <Container>
            <h2>Choose the freedom you need.</h2>
            <table>
                <tr>
                    <th></th>
                    <th>Other Banks</th>
                    <Kuda> <img src="/kudaLogo.png" alt="" />Kuda.</Kuda>
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
             
        </Container>
    )
}
export default Table

const Container = styled.div`
    /* display: flexbox; */
    
    /* flex-wrap: wrap; */

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
    width: 80%;
}
th{
    width: 400px;
    border: 1px solid grey;
}
text-align: left;
td{
    width:400px;
    min-height: 300px;
    border: 1px solid grey;
    /* border-collapse: collapse; */

    @media (max-width:768px){
        display: block;
    }
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

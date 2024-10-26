import Card from "./Components/Card";
import { IoIosCard,IoIosPie } from "react-icons/io";
import { LuNetwork } from "react-icons/lu";
import { FaPaperPlane } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";
import styled from 'styled-components'


function Cards(){

    return(
        <Container>
            <Card icon={<IoIosCard />} text='Order a Kuda card on the app with pickup and delivery options'/>
            <Card icon={<IoIosPie />} text='Enjoy cashless payment options online and offline.'/>
            <Card icon={<LuNetwork />} text='Pay your essential bills and buy gift cards easily.'/>
            <Card icon={<FaPaperPlane />} text='Get 25 free transfers to Nigerian banks every month.'/>
            <Card icon={<FaPiggyBank />} text='Save money automatically any time you spend.'/>
        </Container>
    );
}

export default Cards

const Container = styled.div`
    /* height: 100vh; */
    width: 75%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 250px;
    
    `
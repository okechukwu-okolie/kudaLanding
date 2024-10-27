import styled from 'styled-components'
import Address from './Components/Address'


function AddressAndSocials(){

    return(
        <Container>
            <img src="/public/socials.png" alt="" />
            <Address location='Lagos'
                    address1='1-11 Commercial Avenue,'
                    address2='Yaba, Lagos,'
                    address3='Nigeria'/>

            <Address location='London'
                    address1='5 New Street Square,'
                    address2='London, EC4A 3TW,'
                    address3='United Kingdom'/>

            <Address location='Cape Town'
                    address1='146 Campground Road,'
                    address2='Snakepit Building, Level 4,'
                    address3='Newlands, Cape Town'/>

            <Address location='Canada'
                                address1='3080 Yonge Street,'
                                address2='Suite 6060, Toronto,'
                                address3='Ontario M4N 3N1'/>

        </Container>
    )
}

export default AddressAndSocials

const Container = styled.div`
        display: flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        width:80%;
        margin: auto;
        margin-top: 80px;
`
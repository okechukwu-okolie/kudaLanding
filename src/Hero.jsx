import { FaApple } from "react-icons/fa";
import styled from 'styled-components'

function Hero(){


    return(

        <Container>
            <MainHeading>
                <h1>
                    The money app  for<br /> Africans.
                </h1>
                <p>
                    Make free transfers, enjoy cashless 
                    payment<br /> options and earn interest
                    on your savings with<br /> Kuda.
                </p>
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
                </AppStores>
                    <Cbn>
                    <img src="/public/cbn.png" alt="" />
                    </Cbn>
            </MainHeading>
            <GroupB>
                <img src="/public/heroPhone.png" alt="" />
            </GroupB>

        </Container>
    )
}

export default Hero
const Container = styled.div`
    max-width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 50px 0 0 0;
    font-family: Mulish;
    
`
const MainHeading = styled.div`
    padding: 0p9x 0px;


    h1,p{
        color:#40186E;
    }
    h1{
        font-size: 2.5rem;
        line-height: 1;
        font-weight: 900;
        margin-bottom: 40px;
    }
    p{
        font-size: 18px;
        font-weight: 700;
        margin-bottom: 20px;
    }
    
`
const AppStores = styled.div`
    display:flex;
    
`


const Flex1 = styled.div`
    display: flex;
    background-color: black;
    width: fit-content;
    padding: 3px 13px;
    border-radius: 5px;
    margin-right: 20px;

    img{
        padding-top: 5px;
        width: 30px;
        text-align: center;
    }
    p{
        color: white;
        font-size: 10px;
        text-align: center;
        padding-top: 5px;
        margin: 0px;
    }
    h3{
        color: white;
        font-size: 17px;
        padding: 0px;
        margin-top: -5px;
    }
    
    
`


const Flex2 = styled.div`
    display: flex;
    background-color: black;
    width: fit-content;
    padding: 3px 13px;
    border-radius: 5px;

    img{
        padding-top: 5px;
        width: 30px;
        text-align: center;
    }
    p{
        color: white;
        font-size: 10px;
        text-align: center;
        padding-top: 5px;
        margin: 0px;
    }
    h3{
        color: white;
        font-size: 17px;
        padding: 0px;
        margin-top: -5px;
    } 
`

const Cbn = styled.div`
    margin-top: 30px;

`

const GroupB = styled.div`
    
`
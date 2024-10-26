import styled from "styled-components";


function ImageTextTemplate(props){

    return(
        <Container>
            <div>
                <img src={props.image} alt="" />
            </div>
             <div>
                <h2>
                   
                   <div> {props.main1}</div>
                   <div>{props.main2}</div>
                   <div>{props.main3}</div>
                   <div>{props.main4}</div>
                </h2>
                <p>
                <div>{props.added1}</div>
                <div>{props.added2}</div>
                <div>{props.added3}</div>
                <div>{props.added4}</div>
                </p>
                <a href="#">
                    {props.link}{props.icon}
                </a>
            </div>
            
         
            
        </Container>
    )
}
export default ImageTextTemplate

const Container = styled.div`
     display: flex;
    justify-content: space-evenly;
    width: 85%;
    margin: 0 auto;
    margin-top: 150px;

    @media (max-width:768px){
        display: block;
        text-align: center;
    }

    h2{
        font-weight: 900;
        font-size: 36px;
        line-height: 1.25;
        color:#40196D;
        margin-bottom: 40px;
        margin-top: 80px;
        
    }
    p{
        color:gray;
        font-size: 14px;
        margin-bottom: 20px;
    }
    img{

        @media (max-width:768px){
        width: 285px;
        margin-top: 30px;
    }
    }
`
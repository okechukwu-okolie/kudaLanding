import styled from "styled-components"
import TextImageTemplate from "./TextImageTemplate"
import ImageTextTemplate from "./ImageTextTemplate"
import { MdKeyboardArrowRight } from "react-icons/md";

 

function TextImageTemplates(){

    return(
        <Container>
            <TextImageTemplate main1 = 'Your phone +   ' 
                                main2 ='our app +'
                                main3='a debit card'
                                main4='= a simpler life.'
                                added1=' We designed a money app for your lifestyle, and you'
                                added2="can get a debit card to go with it. That's all you need"
                                added3='to make the right money moves.'
                                link= 'Open An Account in Minutes' icon ={ <MdKeyboardArrowRight />}
                                image='/womanHoldingPhone.png'/>

            <ImageTextTemplate  image='/paymentOptions.png'
                                main1 = 'It’s your money, we just  ' 
                                main2 ='help you manage it'
                                main3=''
                                main4=''
                                added1=' Save it, spend it, send it. It’s up to you. Whatever you'
                                added2="choose to do with your money, we’ll make sure it’s"
                                added3='done better and free of charge. We take responsibility'
                                added4='for that.'
                                link= '' icon =''
                        />

            <TextImageTemplate main1 = 'Save money as you spend   ' 
                                main2 ='it, seriously.'
                                main3=''
                                main4=''
                                added1=' You can’t avoid spending. That’s how you pay for your'
                                added2="needs. But we can help you put money away every"
                                added3='time you pay for something. Just set a percentage to'
                                added4='save and watch your money grow.'
                                link= 'See all our Savings' icon ={ <MdKeyboardArrowRight />}
                                image='/piggyBank.png'/>

            <ImageTextTemplate  image='/kudaCard.png'
                                main1 = 'Turn off access, turn on ' 
                                main2 ='safety.'
                                main3=''
                                main4=''
                                added1=' Life happens. Milk spills. Debit cards go missing. If'
                                added2="that ever happens, you can block your missing card on"
                                added3='the app so no one can use it. We’d like to see them try.'
                                added4=''
                                link= 'Learn more about Cards' icon ={ <MdKeyboardArrowRight />}
                        />


<TextImageTemplate              main1 = 'We’re always happy to ' 
                                main2 ='help you.'
                                main3=''
                                main4=''
                                added1=' You can chat with us on the app, slide into our DMs,'
                                added2="tweet, leave an Instagram comment, send an email or"
                                added3='call. However you choose to reach out, there’ll always'
                                added4='be a friendly person there to make your life easy.'
                                link= 'Get Help' icon ={ <MdKeyboardArrowRight />}
                                image='/customerCare.png'/>

            <ImageTextTemplate  image='/coinJar.png'
                                main1 = 'Fees as clear as glass.' 
                                main2 =''
                                main3=''
                                main4=''
                                added1=' We’re serious about free banking, and we will never,'
                                added2="ever charge you for anything without your consent."
                                added3=''
                                added4=''
                                link= 'See all our fees' icon ={ <MdKeyboardArrowRight />}
                        />
        </Container>
    )
}
export default TextImageTemplates

const Container = styled.div`
    
`
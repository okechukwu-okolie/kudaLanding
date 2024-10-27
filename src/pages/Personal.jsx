import Cards from "../Cards"
import More from "../Components/More"
import Hero from "../Hero"
// import Table from "../Table"
import Testimonials from "../Testinonials"
import TextImageTemplates from "../TextImageTemplates"



function Personal(){

    return(
        <div>
            <Hero/>
            <Cards/>
            <TextImageTemplates/>
            <Testimonials/>
            {/* <Table/> */}
            <More/>
        </div>
    )
}
export default Personal
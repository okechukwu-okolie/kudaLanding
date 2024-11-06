
import './App.css'
// import Cards from './Cards'
// import TextImageTemplates from './TextImageTemplates'
import Header from './Header'
// import Hero from './Hero'
// import Testimonials from './Testinonials'
// import Table from './Table'
// import More from './Components/More'
import MoneyApp from './MoneyApp'
import FooterLinkCards from './FooterLinkCards'
import AddressAndSocials from './AddressAndSocials'
import FinalFooter from './FinalFooter'
import { Route,Routes } from 'react-router-dom'
import Personal from './pages/Personal'
import Business from './pages/Business'
import Company from './pages/Company'
import Help from './pages/Help'
import GetRequest from './pages/GetRequest'


function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Personal/>}/>
        <Route path='/business' element={<Business/>}/>
        <Route path='/company' element={<Company/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/getRequest' element={<GetRequest/>}/>
      

      </Routes>
      <MoneyApp/>
      <FooterLinkCards/>
      <AddressAndSocials/>
      <FinalFooter/>
      
    </>
  )
}

export default App

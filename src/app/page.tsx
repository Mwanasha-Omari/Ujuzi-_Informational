import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import OurServices from "./Services";
import Team from "./Team";
import FooterContent from "./Footer";


export default function Home() {
  return (
  <main > 
      <Navbar/>   
      <LandingPage/>
      <OurServices/>
      <Team/>
      <FooterContent/>
    </main>
  );
}




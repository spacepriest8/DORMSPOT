import NavBar from "../components/landingpage/NavBar/NavBar";
import Header from "../../src/components/landingpage/Header/Header";
import Hero from "../components/landingpage/Hero/Hero";
import Details from "../components/landingpage/Details/Details";
import FindRoomate from "../components/landingpage/FindRoomate/FindRoomate";
import Testimonial from "../components/landingpage/Testimonials/Testimonial";
import Contact from "../components/landingpage/Contact/contact";
import Footer from "../components/landingpage/Footer/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <Hero />
      <Details />
      <FindRoomate />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}
export default Home;

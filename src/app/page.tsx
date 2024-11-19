"use client"
import Aboutus from "./Components/Aboutus";
import Career from "./Components/Carrer";
import ContactUs from "./Components/Contactus";
import Header from "./Components/Header";
import Banner from "./Components/Home/Banner/Banner";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";

export default function Home() {
  return (
    <div >
      <Banner />
      <Services />
      <Aboutus />
      <Portfolio />
      <ContactUs />
      <Career />

    </div>
  );
}

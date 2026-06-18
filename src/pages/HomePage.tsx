import "../App.css";
import Customers from "../components/Customers/Customer";
import Design from "../components/Design/Design";
import Discover from "../components/Discover/Discover";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Leading from "../components/Leading/Leading";
import Powerfull from "../components/Powerful/PowerFull";
import Speed from "../components/Speed/Speed";
import Testimonials from "../components/Testimonials/Testimonials";
import { headerData } from "../data/data";
import { DesignItems } from "../data/data";
import { footerMenu, socials } from "../data/data";

const HomePage = () => {
  return (
    <>
      <Header header={headerData} />
      <Hero />
      <Leading />
      <Discover />
      <Powerfull />
      <Customers />
      <Speed />
      <Testimonials />
      <Design items={DesignItems} />
      <Footer footer={footerMenu} social={socials} />
    </>
  );
};

export default HomePage;

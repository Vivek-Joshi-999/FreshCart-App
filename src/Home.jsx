import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/hero";
import Cards from "./components/categories/Cards";
import Items from "./components/product/Items";
import Ritems from "./components/recommended/Ritems";
import Special from "./components/Special/Special"
import Features from "./components/Feature/Features"
import Footer from "./components/footer/Footer";
 

const Home = () => {
  return (
    <div className="  bg-[#f3f8f3]  ">
      <Navbar></Navbar>
      <Hero></Hero>
    <Cards></Cards>
    <Items></Items>
    <Ritems></Ritems>
    <Special></Special>
    <Features></Features>
    <Footer></Footer>
    </div>
  );
};

export default Home;

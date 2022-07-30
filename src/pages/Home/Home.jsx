import React, { useRef } from "react";
import "./home.css";
import Banner from "../../components/home/banner/Banner";
import Menu from "./../../components/common/menu/Menu";
import Footer from "./../../components/common/footer/Footer";
import CartCountButton from "./../../components/common/cartCountButton/CartCountButton";
import { menuItemsData } from "../../components/common/menu/data";

const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () =>
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  return (
    <div>
      {/* banner */}
      <Banner handleScrollMenu={handleScrollMenu} />
      {/* menu */}
      <Menu list={menuItemsData} ref={menuRef} />
      {/* footer */}
      <Footer />
      {/* cart count button */}
      <CartCountButton />
    </div>
  );
};

export default Home;

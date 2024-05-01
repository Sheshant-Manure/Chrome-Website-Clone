import { useEffect, useState } from "react";
import Carousel from "./components/Carousel/Carousel";
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Page1 from "./pages/Page1";


function App() {
  
  const [y, setY] = useState(0)
  useEffect(()=>{
    const handleScroll = () => {
      setY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll',handleScroll);
  },[])

  return (
    <>
      <Navbar y={y} />
      <Hero />
      <Menu y={y} />
      <Carousel y={y}/>
      <Page1 y={y} />
    </>
  );
}

export default App;

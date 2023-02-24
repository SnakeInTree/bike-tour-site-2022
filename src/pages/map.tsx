import { useSelector } from "react-redux";
import Head from "next/head";
import { LazyMap } from "./components/Map/index";
import Buttons from "./components/Buttons/Button";
import Drawer from "./components/Drawer/Drawer";
import Carousel from "./components/Carousel/Carousel";

import { RootState } from "@/store/store";

const Home = () => {
  
  const { showDrawer, showCarousel } = useSelector((state:RootState) => state.uiDisplay);
  
  return (
    <>
      <Head>
        <title>Bike Tour Map</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Buttons />
        {!showCarousel && <LazyMap />}
        {showDrawer && <Drawer />}
        {showCarousel && <Carousel />}
      </main>
    </>
  );
};

export default Home;
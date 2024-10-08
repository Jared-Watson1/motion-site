import { useEffect, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import background from "./assets/background.png";
import MainMotionComponent from "./MainMotionComponent";
import MotionTextComponent from "./MotionTextComponent";
import BuyMotionComponent from "./BuyMotionComponent";
import TokenomicsComponent from "./TokenomicsComponent.jsx";
import FooterComponent from "./FooterComponent";
import loadingGif from "./assets/loading.gif";
import whiteLogo from "./assets/white_logo.png";
import fallingMoneyGif from "./assets/falling_money.gif";
import mainVideoGif from "./assets/main_video.gif";
import motionSpiralGif from "./assets/motion-spiral.gif";
import telegramButtonGif from "./assets/telegram_button.gif";
import chartButtonGif from "./assets/chart_button.gif";
import twitterButtonGif from "./assets/twitter_button.gif";
import motionCircleRightLoopGif from "./assets/motion_circle_right_loop.gif";
import number1 from "./assets/number_1.png";
import number2 from "./assets/number_2.png";
import number3 from "./assets/number_3.png";
import motionDoughnutGif from "./assets/motion-doughnut.gif";
import textsGif from "./assets/texts.gif";
import pieChartPng from "./assets/pie_chart.png";
import motionLinearHorizontalGif from "./assets/motion_linear_horizontal.gif";
import motionGlobeWhiteGif from "./assets/motion_globe_white.gif";
import tokenomicsInfoPng from "./assets/tokenomics_info.png";
import footerGif from "./assets/footer.gif";

function App() {
  const [loading, setLoading] = useState(true);
  const backgroundRef = useRef(null);
  const ticking = useRef(false);

  useEffect(() => {
    // Function to preload images
    const preloadImages = () => {
      const images = [
        background,
        whiteLogo,
        fallingMoneyGif,
        mainVideoGif,
        motionSpiralGif,
        telegramButtonGif,
        chartButtonGif,
        twitterButtonGif,
        motionCircleRightLoopGif,
        number1,
        number2,
        number3,
        motionDoughnutGif,
        textsGif,
        pieChartPng,
        motionLinearHorizontalGif,
        motionGlobeWhiteGif,
        tokenomicsInfoPng,
        footerGif,
        // Add any other images used in your components
      ];

      const promises = images.map((image) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = image;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(promises)
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          console.error("Failed to load images", err);
          setLoading(false);
        });
    };

    preloadImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          if (backgroundRef.current) {
            const scrollTop = window.pageYOffset;
            backgroundRef.current.style.backgroundPositionY = `${
              scrollTop * 0.5
            }px`;
          }
          ticking.current = false;
        });
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-black">
        <img
          src={loadingGif}
          alt="Loading animation displaying motion graphics"
          className="w-3/5 h-auto md:w-4/7 lg:w-5/9 object-contain"
        />
      </div>
    );
  }

  return (
    <div
      ref={backgroundRef}
      className="flex flex-col min-h-screen w-screen bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <div className="flex-grow">
        <MainMotionComponent />
        <div className="my-5 lg:my-20" />
        <MotionTextComponent />
        <div className="my-5 lg:my-20 pt-20 mb-20" />
        <BuyMotionComponent />
        <div className="my-5 lg:my-20 pt-20 mt-20" />
        <TokenomicsComponent />
      </div>
      <FooterComponent />
      <Analytics />
    </div>
  );
}

export default App;

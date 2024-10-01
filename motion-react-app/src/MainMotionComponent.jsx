import { useState } from "react"; // Import useState hook for toggle functionality
import logo from "./assets/white_logo.png";
import moneyGif from "./assets/falling_money.gif";
import mainVideo from "./assets/main_video.gif"; // Main Motion Video GIF for center
import spiralGif from "./assets/motion-spiral.gif";
import motionGlobeSlow from "./assets/motion_globe_slow.gif"; // Import new globe GIF
import telegramButton from "./assets/telegram_button.gif"; // Telegram button GIF
import chartButton from "./assets/chart_button.gif"; // Chart button GIF
import twitterButton from "./assets/twitter_button.gif"; // Twitter button GIF
import copyIcon from "./assets/copy_icon.png"; // Import the copy icon
import menuButton from "./assets/menu_button.png"; // Import the Menu Button
import menuGif from "./assets/menu.gif"; // Import the Side Menu GIF
import menuHeaderGif from "./assets/le_menu_de_motion.gif"; // Import the Menu Header GIF
import dexscreenerIcon from "./assets/dexscreener_icon.png"; // Import social media icons
import telegramIcon from "./assets/telegram_icon.png";
import xIcon from "./assets/x_icon2.png";
import instagramIcon from "./assets/instagram_icon.png";
import tiktokIcon from "./assets/tiktok_icon2.png";
import closeButton from "./assets/close_button.png"; // Import Close Button

const MainMotionComponent = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling side menu

  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  // Function to copy contract address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
  };

  // Function to toggle the menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center lg:min-h-screen">
      {/* Top logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-5 w-24 md:w-20"
      />

      {/* Falling Money GIF */}
      <img
        src={moneyGif}
        alt="Falling Money"
        className="absolute top-0 left-0 w-full h-[calc(100vh-200px)] opacity-80 lg:absolute top-0 left-0 w-full h-full object-cover opacity-80"
      />

      {/* Spiral GIF */}
      <img
        src={spiralGif}
        alt="Spiral Motion"
        className="absolute top-10 right-2 md:top-16 md:right-16 w-20 md:w-36"
      />

      {/* Menu Button */}
      <button
        className="absolute top-5 right-5 z-20"
        onClick={toggleMenu}
        style={{ background: "none", border: "none" }}
      >
        <img
          src={menuButton}
          alt="Menu Button"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>

      {/* Side Menu */}
      {menuOpen && (
        <div
          className="fixed top-0 right-0 w-[375px] h-full z-30 bg-transparent overflow-hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }} // Semi-transparent background
        >
          {/* Menu GIF */}
          <img
            src={menuGif}
            alt="Menu GIF"
            className="absolute top-0 right-0 w-full h-full object-cover"
          />

          {/* Close Button */}
          <button
            className="absolute top-4 right-4 z-10"
            onClick={toggleMenu}
            style={{ background: "none", border: "none" }}
          >
            <img src={closeButton} alt="Close Menu" className="w-8 h-8" />
          </button>

          {/* Menu Content */}
          <div className="relative z-10 flex flex-col items-center mt-16 px-4">
            {/* Menu Header */}
            <img
              src={menuHeaderGif}
              alt="Menu Header"
              className="w-full mb-4"
            />

            {/* Text Items */}
            <div className="mt-4 text-black space-y-4">
              <p className="text-lg">no emotion, just motion.</p>
              <p className="text-lg">how to buy motion.</p>
              <p className="text-lg">tokenomics.</p>
            </div>
          </div>

          {/* Social Media Icons - Horizontally Aligned */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-around items-center px-4 z-10">
            <a
              href="https://dexscreener.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={dexscreenerIcon}
                alt="Dexscreener"
                className="w-8 h-8"
              />
            </a>
            <a
              href="https://t.me/motioncoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegramIcon} alt="Telegram" className="w-8 h-8" />
            </a>
            <a
              href="https://x.com/motioncoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={xIcon} alt="X" className="w-8 h-8" />
            </a>
            <a
              href="https://instagram.com/motioncoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://tiktok.com/@motioncoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
            </a>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 pt-5 mt-0 text-center w-full px-4 flex flex-col items-center md:pt-5 lg:pt-30">
        <img
          src={mainVideo}
          alt="Main Motion Video"
          className="w-96 md:w-[32rem] h-auto lg:w-[32rem] h-auto"
        />

        {/* Contract Address and Buttons */}
        <div className="flex flex-col md:items-center justify-between space-y-6 md:space-y-0 md:space-x-6 mt-6">
          {/* Contract Address */}
          <div
            className="bg-gray-900 bg-opacity-75 text-white py-2 px-4 rounded-lg border border-white flex items-center space-x-2 cursor-pointer"
            onClick={copyToClipboard}
          >
            <p className="text-sm md:text-lg font-mono flex items-center">
              CA: <span className="ml-1">{contractAddress}</span>
            </p>
            <img
              src={copyIcon}
              alt="Copy Icon"
              className="w-4 h-4 md:w-5 md:h-5"
            />
          </div>
          {/* Copy success message */}
          {copySuccess && (
            <p className="text-green-400 mt-2 text-sm pt-5">
              THE MOTION CORPORATION THANKS YOU FOR YOUR SERVICE
            </p>
          )}

          {/* Buttons with GIFs */}
          <div className="flex pt-2 flex-row items-center space-y-0 space-x-4 md:pt-6 lg:pt-6">
            {/* Telegram Button */}
            <a
              href="https://t.me/motioncoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={telegramButton}
                alt="Telegram Button"
                className="w-full md:w-28 lg:w-32 h-auto"
              />
            </a>

            {/* Chart Button */}
            <a
              href="https://yourchartlink.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={chartButton}
                alt="Chart Button"
                className="w-full md:w-28 lg:w-32 h-auto"
              />
            </a>

            {/* Twitter Button */}
            <a
              href="https://x.com/motioncoineth"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={twitterButton}
                alt="Twitter Button"
                className="w-full md:w-28 lg:w-32 h-auto"
              />
            </a>
          </div>
        </div>

        {/* Motion Globe Slow GIF - Parallel to Spiral GIF, Bottom-left and twice the size */}
        <img
          src={motionGlobeSlow}
          alt="Motion Globe Slow"
          className="hidden md:block absolute bottom-5 left-2 md:bottom-16 md:left-16 w-40 md:w-72 lg:w-80 mt-10"
        />
      </div>
    </div>
  );
};

export default MainMotionComponent;

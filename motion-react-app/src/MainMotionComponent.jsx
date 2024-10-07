// src/MainMotionComponent.jsx
import { useState } from "react";
import logo from "./assets/white_logo.png";
import moneyGif from "./assets/falling_money.gif";
import mainVideo from "./assets/main_video.gif";
import spiralGif from "./assets/motion-spiral.gif";
import motionGlobeSlow from "./assets/motion_globe_slow.gif";
import telegramButton from "./assets/telegram_button.gif";
import chartButton from "./assets/chart_button.gif";
import twitterButton from "./assets/twitter_button.gif";
import copyIcon from "./assets/copy_icon.png";
import menuButton from "./assets/menu_button.png";
import menuGif from "./assets/menu.gif";
import menuHeaderGif from "./assets/le_menu_de_motion.gif";
import dexscreenerIcon from "./assets/dexscreener_icon.png";
import telegramIcon from "./assets/telegram_icon.png";
import xIcon from "./assets/x_icon2.png";
import instagramIcon from "./assets/instagram_icon.png";
import tiktokIcon from "./assets/tiktok_icon2.png";
import closeButton from "./assets/close_button.png";

const MainMotionComponent = () => {
  const [copySuccess, setCopySuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXX";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center lg:min-h-screen font-anton">
      {/* Top logo */}
      <img
        src={logo}
        alt="Logo"
        className="absolute top-5 left-5 w-20 md:w-26 lg:w-40"
        loading="lazy"
      />

      {/* Falling Money GIF */}
      <img
        src={moneyGif}
        alt="Falling Money"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-80"
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
        aria-label="Open Menu"
      >
        <img
          src={menuButton}
          alt="Menu Button"
          className="w-6 h-6 md:w-8 md:h-8"
        />
      </button>

      {/* Side Menu and Overlay */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggleMenu}
          ></div>

          {/* Side Menu */}
          <div className="fixed top-0 right-0 w-[375px] md:w-[450px] lg:w-[500px] h-full z-50 bg-transparent flex flex-col">
            {/* Menu GIF */}
            <img
              src={menuGif}
              alt="Menu GIF"
              className="absolute inset-0 w-full h-full object-cover z-10"
            />

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-30"
              onClick={toggleMenu}
              style={{ background: "none", border: "none" }}
              aria-label="Close Menu"
            >
              <img src={closeButton} alt="Close Menu" className="w-8 h-8" />
            </button>

            {/* Menu Content and Fixed Buttons */}
            <div className="relative z-20 flex flex-col h-full">
              {/* Scrollable Content */}
              <div className="flex-grow overflow-y-auto px-6 pt-6 flex flex-col items-center">
                {/* Menu Header */}
                <img
                  src={menuHeaderGif}
                  alt="Menu Header"
                  className="w-10/12 mb-4"
                />

                {/* Menu Sections */}
                <div className="mt-4 text-black text-center space-y-6">
                  {/* hors d'oeuvres */}
                  <div>
                    <h2 className="text-lg font-bold">hors doeuvres</h2>
                    <ul className="space-y-1">
                      <li>uptober launch</li>
                      <li>dev with motion</li>
                      <li>chads take notice</li>
                      <li>???</li>
                    </ul>
                  </div>

                  {/* apéritif */}
                  <div>
                    <h2 className="text-lg font-bold">apéritif</h2>
                    <ul className="space-y-1">
                      <li>giphy</li>
                      <li>motion status</li>
                      <li>china wakes up</li>
                      <li>motion creator</li>
                    </ul>
                  </div>

                  {/* entrée */}
                  <div>
                    <h2 className="text-lg font-bold">entrée</h2>
                    <ul className="space-y-1">
                      <li>tiktok</li>
                      <li>instagram</li>
                      <li>beeple everyday</li>
                    </ul>
                  </div>

                  {/* digestif */}
                  <div>
                    <h2 className="text-lg font-bold">digestif</h2>
                    <ul className="space-y-1">
                      <li>youtube</li>
                      <li>CEX rampage</li>
                      <li>party like suga</li>
                      <li>dance like ansem</li>
                      <li>10,000 holders</li>
                    </ul>
                  </div>

                  {/* coffee */}
                  <div>
                    <h2 className="text-lg font-bold">coffee</h2>
                    <ul className="space-y-1">
                      <li>binance listing</li>
                      <li>$1.00/$motion</li>
                      <li>1,000,000 holders</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Fixed Buttons at the Bottom */}
              <div className="px-6 py-4 bg-transparent">
                <div className="flex justify-center items-center space-x-2">
                  <a
                    href="https://dexscreener.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Dexscreener"
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
                    aria-label="Telegram"
                  >
                    <img
                      src={telegramIcon}
                      alt="Telegram"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="https://x.com/motioncoineth"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X"
                  >
                    <img src={xIcon} alt="X" className="w-8 h-8" />
                  </a>
                  <a
                    href="https://instagram.com/motioncoineth"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="w-8 h-8"
                    />
                  </a>
                  <a
                    href="https://tiktok.com/@motioncoineth"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="TikTok"
                  >
                    <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="relative z-10 pt-5 mt-0 text-center w-full px-4 flex flex-col items-center md:pt-5 lg:pt-30">
        <img
          src={mainVideo}
          alt="Main Motion Video"
          className="w-96 md:w-[32rem] h-auto lg:w-[32rem]"
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
              aria-label="Telegram Button"
              className="flex transform hover:scale-105 transition-transform duration-300"
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
              aria-label="Chart Button"
              className="flex transform hover:scale-105 transition-transform duration-300"
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
              aria-label="Twitter Button"
              className="flex transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={twitterButton}
                alt="Twitter Button"
                className="w-full md:w-28 lg:w-32 h-auto"
              />
            </a>
          </div>
        </div>

        {/* Motion Globe Slow GIF */}
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

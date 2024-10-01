import { useState } from "react"; // Import useState hook for copy functionality
import logo from "./assets/white_logo.png";
import moneyGif from "./assets/falling_money.gif";
import mainVideo from "./assets/main_video.gif"; // Main Motion Video GIF for center
import spiralGif from "./assets/motion-spiral.gif";
import motionGlobeSlow from "./assets/motion_globe_slow.gif"; // Import new globe GIF
import telegramButton from "./assets/telegram_button.gif"; // Telegram button GIF
import chartButton from "./assets/chart_button.gif"; // Chart button GIF
import twitterButton from "./assets/twitter_button.gif"; // Twitter button GIF
import copyIcon from "./assets/copy_icon.png"; // Import the copy icon

const MainMotionComponent = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  // Function to copy contract address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
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

          {/* Buttons with GIFs */}
          <div className="flex pt-2 flex-row items-center space-y-0 space-y-0 space-x-4 md:pt-6 lg:pt-6">
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

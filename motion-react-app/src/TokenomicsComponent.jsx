import pieChart from "./assets/pie_chart.png"; // Pie chart image
import motionGif from "./assets/motion_linear_horizontal.gif"; // Motion linear GIF
import globeGif from "./assets/motion_globe_white.gif"; // Globe GIF
import tokenomicsInfo from "./assets/tokenomics_info.png"; // Tokenomics info image
import chartButton from "./assets/motion_chart_btn.png"; // Chart button GIF
import buyButton from "./assets/motion_btn.png"; // Buy button GIF
import copyIcon from "./assets/copy_icon.png"; // Copy icon
import { useState } from "react"; // Import useState for copy functionality

const TokenomicsComponent = () => {
  const [copySuccess, setCopySuccess] = useState(false);

  const contractAddress = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

  // Function to copy contract address to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative w-full text-white flex flex-col items-center justify-center px-8 md:px-16 lg:px-24 py-16">
      {/* Motion GIF at the top */}
      <div className="absolute top-10 w-full h-16 md:h-40 lg:h-25 z-10">
        <img
          src={motionGif}
          alt="Motion Linear"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Globe GIF in the background - shifted down and to the left */}
      <div className="absolute bottom-[-100px] left-[-250px] w-full h-full opacity-20 z-0">
        <img
          src={globeGif}
          alt="Globe"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Area */}
      <div className="relative z-30 w-full flex flex-col items-center justify-center space-y-16 mt-48">
        {/* Tokenomics Header and Info */}
        <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-6xl space-y-16 lg:space-y-0">
          {/* Pie Chart */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
            <img
              src={pieChart}
              alt="Pie Chart"
              className="w-64 h-auto lg:w-[28rem]"
            />
          </div>

          {/* Tokenomics Info Image with Header */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-20 relative">
            <img
              src={tokenomicsInfo}
              alt="Tokenomics Info"
              className="w-64 h-auto lg:w-[28rem]"
            />
            {/* Tokenomics Header Positioned Below the Image */}

            <h1 className="mt-4 lg:mt-8 w-full text-right text-3xl lg:text-4xl bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text">
              TOKENOMICS
            </h1>
          </div>
        </div>

        {/* Contract Address and Buttons Aligned to Left */}
        <div className="w-full flex flex-col items-start space-y-6">
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
            <p className="text-green-400 mt-2 text-sm">
              THE MOTION CORPORATION THANKS YOU FOR YOUR SERVICE
            </p>
          )}

          {/* Buttons with GIFs */}
          <div className="flex pt-2 flex-row items-center space-y-0 space-x-4 md:pt-6 lg:pt-6 pb-8">
            {/* Buy Motion Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={buyButton}
                alt="Buy Motion Button"
                className="w-24 h-auto md:w-28 lg:w-32"
              />
            </a>

            {/* Motion Chart Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={chartButton}
                alt="Motion Chart Button"
                className="w-24 h-auto md:w-28 lg:w-32"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenomicsComponent;

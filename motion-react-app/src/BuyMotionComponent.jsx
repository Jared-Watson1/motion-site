import rightGif from "./assets/motion_circle_right_loop.gif"; // Import the GIF for the right
import number1 from "./assets/number_1.png"; // Number 1 graphic
import number2 from "./assets/number_2.png"; // Number 2 graphic
import number3 from "./assets/number_3.png"; // Number 3 graphic

const BuyMotionComponent = () => {
  return (
    <div className="relative w-full px-8 md:px-16 lg:px-24 py-16 flex flex-col md:flex-row">
      {/* Mobile GIF: Visible on small screens, behind text, faded */}
      <div className="md:hidden absolute top-10 left-0 w-full h-full flex justify-center z-0">
        <img
          src={rightGif}
          alt="Motion Circle Right Loop"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
        />
      </div>

      {/* Text Content: Positioned above GIFs, with padding on medium screens to prevent overlapping */}
      <div className="relative z-10 text-white max-w-2xl md:pr-40">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text mb-8">
          HOW TO BUY $MOTION?
        </h1>

        {/* Steps */}
        <div className="space-y-8 text-base md:text-xl">
          {/* Step 1 */}
          <div className="flex items-start space-x-4">
            <img
              src={number1}
              alt="Number 1"
              className="w-10 md:w-16 lg:w-20"
            />
            <div>
              <h3 className="text-red-500 font-bold text-xl md:text-3xl">
                DOWNLOAD A WALLET.
              </h3>
              <p className="text-white">
                Download a Phantom wallet on browser extension or on the app
                store. This wallet will act as a digital safe where you can keep
                your $MOTION tokens & interact with Ethereum activities.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-start space-x-4">
            <img
              src={number2}
              alt="Number 2"
              className="w-10 md:w-16 lg:w-20"
            />
            <div>
              <h3 className="text-green-500 font-bold text-xl md:text-3xl">
                SECURE YOUR ETH.
              </h3>
              <p className="text-white">
                Purchase Ethereum within the Phantom wallet itself (using
                MoonPay), or use an exchange to deposit Ethereum into your
                wallet address.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-start space-x-4">
            <img
              src={number3}
              alt="Number 3"
              className="w-10 md:w-16 lg:w-20"
            />
            <div>
              <h3 className="text-blue-500 font-bold text-xl md:text-3xl">
                GET MOTION.
              </h3>
              <p className="text-white">
                Head to Uniswap to purchase your $MOTION. Paste the $MOTION
                contract address to swap your ETH into $MOTION.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right GIF for larger screens: Visible on medium and larger, behind text on medium, fully visible on lg and above */}
      <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 w-[20rem] md:w-[35rem] lg:w-[40rem] h-auto opacity-20 lg:opacity-100 z-0">
        <img
          src={rightGif}
          alt="Motion Circle Right Loop"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default BuyMotionComponent;

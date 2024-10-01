import doughnutGif from "./assets/motion-doughnut.gif"; // Import doughnut GIF
import textGif from "./assets/texts.gif"; // Import text GIF

const MotionTextComponent = () => {
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center justify-center md:px-16 lg:px-5">
      {/* Doughnut GIF */}
      <div className="flex-shrink-0 w-full lg:w-1/2 mt-8 flex justify-center">
        <img
          src={doughnutGif}
          alt="Motion Doughnut"
          className="h-auto w-full md:w-[30rem] lg:w-[60rem] h-auto"
        />
      </div>

      {/* Text Content */}
      <div className="w-full flex flex-row px-8 lg:w-1/2 text-white max-w-2xl mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
        {/* Heading with gradient text */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-red-500 via-green-500 to-blue-500 text-transparent bg-clip-text mb-4 text-center lg:text-left">
          NO EMOTION. JUST MOTION.
        </h1>

        {/* Text GIF */}
        <div className="w-full flex justify-center lg:justify-start pr-0 lg:pr-5">
          <img src={textGif} alt="Motion Text" className="w-full h-auto" />
        </div>
      </div>
    </div>
  );
};

export default MotionTextComponent;

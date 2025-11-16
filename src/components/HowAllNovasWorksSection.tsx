import howItWorksVideo from '../assets/how-it-works-video.png';

const HowAllNovasWorksSection = () => {
  return (
    <div className="pt-[124px] min-h-dvh">
      <div className="flex flex-col justify-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44">
        <div className="mx-auto">
          <h2 className="capitalize pb-5 font-semibold font-inter text-[30px] lg:text-[36px] max-w-[750px] text-center text-primary-text">
            How AllNova Works
          </h2>
          <p className="max-w-[790px] text-center text-secondary-text text-[14px] md:text-[20px] font-normal">
            Your Path to Success: From Choosing the Perfect Freelancer to Seamless Deliveries at Your Virtual Doorstep!
          </p>
        </div>
        <div className="flex flex-row gap-5 mt-16 overflow-hidden rounded-lg">
          <img src={howItWorksVideo} alt="How AllNovas works" />
        </div>
      </div>
    </div>
  );
};

export default HowAllNovasWorksSection;
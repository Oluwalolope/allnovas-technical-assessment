import Accordion from "./faq/Accordion";

const FrequentlyAskedQuestions = () => {
  return (
    <div className="py-[120px]">
      <div className="flex flex-col justify-center w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44">
        <div className="mx-auto">
          <h2 className="capitalize pb-7 font-semibold font-inter text-[30px] lg:text-[36px] max-w-[750px] text-center text-primary-text faq-pattern">
            Frequently asked questions 
          </h2>
          <p className="max-w-[648px] text-center text-secondary-text text-[14px] md:text-[20px] font-normal">
            These are the commonly asked questions on Allnovas. Still have some questions? <span className='text-primary-color hover:underline cursor-pointer'>Email us</span> 
          </p>
        </div>

        <Accordion />
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
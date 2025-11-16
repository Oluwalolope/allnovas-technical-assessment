import { useRef, type FormEvent } from "react";

const Newsletter = () => {
    const emailRef = useRef<HTMLInputElement | null>(null);
    const handleSignUp = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = emailRef.current?.value;
        window.alert(`You have succesfully signed up to our newsletter with this email address: ${email}`);
      };
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center gap-x-[100px] w-full max-w-[1512px] mx-auto px-4 md:px-6 lg:px-[138px] pb-44">
        <div className="mx-auto">
          <h2 className="capitalize pb-3 font-bold font-inter text-[24px] text-primary-text text-center md:text-start">
            Become the smartest person in the room.
          </h2>
          <p className="max-w-[648px] text-center md:text-start text-secondary-text text-[14px] md:text-[18px] font-normal">
            Subscribe for practical insights and proven strategies straight to your inbox
          </p>
        </div>

        <div className="mx-auto">
          <form onSubmit={handleSignUp} className='mt-6 gap-5 flex flex-col lg:flex-row'>
                <input type='email' placeholder='Enter your email' id='email' name='email'  className='h-[55px] font-inter text-[16px] font-medium border border-[#D2D6DB] px-4 py-[18px]  hover:border-[#515151] focus:border-[#515151] transition-all duration-300 rounded-xl bg-white' required />
                <button type='submit' aria-roledescription='Press this button to sign up to our newsletter' className='bg-primary-color rounded-xl h-14 px-[21px] whitespace-nowrap text-white hover:bg-neutral-color hover:text-primary-color transition-colors duration-300 cursor-pointer'>
                    Unlock Insights
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
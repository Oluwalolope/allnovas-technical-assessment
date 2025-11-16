import whyChooseUsImage from "../assets/why-choose-us.png";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <section className="mt-[180px] py-16 px-6 md:px-12 overflow-hidden min-h-dvh">
      <div className="w-full max-w-[1512px] mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="hidden md:block h-full rounded-[10px] overflow-hidden"
        >
          <img src={whyChooseUsImage} alt="why choose us" className="w-full h-full object-cover"
            draggable={false}/>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-start font-medium text-primary-text text-[36px] capitalize pb-5"
          >
            Elevate Your Workflow with Allnovas.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-start text-md md:text-lg text-secondary-text font-normal text-[20px] max-w-[492px]"
          >
           Here&apos;s how Allnovas can help you do what you do
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-start ml-8  text-sm md:text-base mt-10 space-y-8 why-choose-us-list"
          >
            <li>
                <div className="space-y-2 inline-block">
                    <h3 className="font-semibold text-[20px] text-primary-text capitalize">verified freelancers</h3>
                    <p className="text-[16px] text-secondary-text font-normal">Every talent is vetted and reviewd for quality assurance</p>
                </div>
            </li>

            <li>
                <div className="space-y-2 inline-block">
                    <h3 className="font-semibold text-[20px] text-primary-text capitalize">smart matching</h3>
                    <p className="text-[16px] text-secondary-text font-normal">Instantly connect with freelancers tailored to your needs</p>
                </div>
            </li>

            <li>
                <div className="space-y-2 inline-block">
                    <h3 className="font-semibold text-[20px] text-primary-text capitalize">secure payments</h3>
                    <p className="text-[16px] text-secondary-text font-normal">Only release funds when milestones are met</p>
                </div>
            </li>
          </motion.ul>
        </motion.div>
        
      </div>
    </section>
  );
};

export default WhyChooseUs;
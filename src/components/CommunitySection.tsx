import communityIllustration from "../assets/community-illustration.png";
import { motion } from "framer-motion";
import OurUsers from "./OurUsers";

const CommunitySection = () => {
  return (
    <section className="mt-[180px] py-16 px-6 md:px-12 overflow-hidden min-h-dvh">
      <div className="w-full max-w-[1512px] mx-auto grid md:grid-cols-2 gap-20 items-center community-background-pattern">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
            <motion.h3 className="text-center md:text-start text-secondary-color font-semibold pb-0.5">
            Tribe
          </motion.h3>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-start font-semibold text-primary-text text-[36px] capitalize pb-5 community-pattern"
          >
            Unlock Your Full Potential Using Our Community 
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-start text-md md:text-lg text-secondary-text font-normal text-[20px] max-w-[593px]"
          >
           Where talents connect, collaborate and grow together. Find your space to learn, connect and grow
          </motion.p>

            <motion.button  className='bg-primary-color hover:bg-neutral-color hover:text-primary-color text-white rounded-2xl py-3.5 px-[21px] mt-10 mx-auto md:mx-0 block items-center cursor-pointer box-border transition-all duration-300 ease-out'>
              <p className="font-medium text-center">Join Community</p>
            </motion.button>
          
        <OurUsers />
        </motion.div>
        
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="hidden md:block h-full rounded-[10px] overflow-hidden"
        >
          <img src={communityIllustration} alt="community illustration" className="w-full h-full object-cover"
            draggable={false}/>
        </motion.div>
      </div>
    </section>
  );
};

export default CommunitySection;
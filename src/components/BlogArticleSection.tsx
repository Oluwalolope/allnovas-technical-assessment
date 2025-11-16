import { motion } from "framer-motion";
import { BLOGS, type Blog } from "../lib/constants";

const BlogCard = ({ image, slug, title }: Blog) => {
  return (
    <article>
      <img
        src={image}
        alt={title}
        className="w-full max-w-[395px] h-[275px] rounded-[22px] mb-4"
        draggable={false}
      />
      <h4 className="text-primary-text text-[20px] font-semibold text-center">
        {title}
      </h4>

      <a href={slug} className="flex justify-center">
        <button className="bg-[#171717] hover:bg-neutral-color hover:text-primary-color text-white rounded-2xl py-2 px-5 mt-10 mx-auto md:mx-0 inline-flex items-center gap-x-2 cursor-pointer box-border transition-all duration-300 ease-out">
          <p className="font-medium text-center">View Post</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </a>
    </article>
  );
};

const BlogArticleSection = () => {
    const containerAnimation = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0,
      },
    },
  };

  const arrowAnimation = {
    initial: { x: 0 },
    hover: { x: 130 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };
  const textAnimation = {
    initial: { x: 0 },
    hover: { x: -40 },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 0,
    },
  };
  return (
    <section className="mt-[180px] py-16 px-6 md:px-12 overflow-hidden min-h-dvh">
      <div className="w-full max-w-[1512px] mx-auto md:mx-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="flex flex-row justify-between items-center">
              <motion.h3 className="text-center md:text-start text-secondary-color font-semibold pb-0.5">
                Insights
              </motion.h3>

              <motion.button
        initial="initial"
        whileHover="hover"
        variants={containerAnimation}
        className='inline-flex flex-row items-center px-[18px] py-2.5 text-primary-color gap-x-2.5 cursor-pointer'
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          variants={arrowAnimation}
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </motion.svg>
        <motion.p variants={textAnimation}>Browse Template</motion.p>
      </motion.button>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-start font-semibold text-primary-text text-[36px] capitalize pb-5"
          >
            Latest Articles
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-start text-md md:text-lg text-secondary-text font-normal text-[20px] max-w-[593px]"
          >
            Check out the latest updates and free resources from Allnova.
          </motion.p>

          <div className="grid justify-items-center gap-x-6 gap-y-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
            {BLOGS.slice(0, 3).map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogArticleSection;

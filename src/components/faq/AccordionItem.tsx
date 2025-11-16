import { AnimatePresence, motion } from "framer-motion";
import type { faq } from "../../lib/constants";

type AccordionItemProps = {
  question: faq;
  onViewDetails: () => void;
  isExpanded: boolean;
};

const AccordionItem = ({
  question,
  onViewDetails,
  isExpanded,
}: AccordionItemProps) => {
  return (
    <motion.li exit={{ opacity: 0 }}>
      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onViewDetails}
        className="border-b border-[#E5E7EB] pb-8 mt-8 cursor-pointer"
      >
        <header className="flex flex-row justify-between items-center">
          <div>
            <h2 className="font-semibold text-[20px] text-primary-text">
              {question.title}
            </h2>
          </div>
          <button>
            <motion.svg
              animate={{ rotate: isExpanded ? 180 : 0 }}
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
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </motion.svg>
          </button>
        </header>
        <div className="challenge-item-details">
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="pt-3"
              >
                <p className="font-normal text-[16px] text-secondary-text">
                  {question.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.article>
    </motion.li>
  );
};

export default AccordionItem;

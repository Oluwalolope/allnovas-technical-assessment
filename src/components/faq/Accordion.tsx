import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import AccordionItem from "./AccordionItem.tsx";
import AccordionTabs from "./AccordionTabs.tsx";
import { FREQUENTLY_ASKED_QUESTIONS, type faq } from "../../lib/constants.ts";
export type TabType = "general" | "freelancing" | "account" | "transfer";

const filteredQuestions: Record<
  "general" | "freelancing" | "account" | "transfer",
  faq[]
> = {
  general: FREQUENTLY_ASKED_QUESTIONS.filter(
    (question) => question.status === "general"
  ),
  freelancing: FREQUENTLY_ASKED_QUESTIONS.filter(
    (question) => question.status === "freelancing"
  ),
  account: FREQUENTLY_ASKED_QUESTIONS.filter(
    (question) => question.status === "account"
  ),
  transfer: FREQUENTLY_ASKED_QUESTIONS.filter(
    (question) => question.status === "transfer"
  ),
};

const Accordion = () => {
  const [selectedType, setSelectedType] = useState<TabType>("general");
  const [expanded, setExpanded] = useState<string | null>(null);

  const handleSelectType = (newType: TabType) => {
    setSelectedType(newType);
    setExpanded(null);
  };

  const handleViewDetails = (id: string) => {
    setExpanded((prevId) => {
      if (prevId === id) {
        return null;
      }

      return id;
    });
  };

  const displayedQuestions = filteredQuestions[selectedType];

  return (
    <div className="p-4">
      <AccordionTabs
        onSelectType={handleSelectType}
        selectedType={selectedType}
      >
        <AnimatePresence mode="wait">
          {displayedQuestions.length > 0 && (
            <motion.ol
              key={selectedType}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              className="mt-16"
            >
              {displayedQuestions.map((question) => (
                <AccordionItem
                  key={question.id}
                  question={question}
                  onViewDetails={() => handleViewDetails(question.id)}
                  isExpanded={expanded === question.id}
                />
              ))}
            </motion.ol>
          )}
        </AnimatePresence>
      </AccordionTabs>
    </div>
  );
};

export default Accordion;

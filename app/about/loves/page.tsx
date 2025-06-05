"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { AnimatePresence, motion } from "framer-motion";
import loves from "@/data/loves.json";

const Loves = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container flex justify-center"
    >
      <Accordion type="single" collapsible className="w-full max-w-xl p-3">
        <AccordionItem value="item-1">
          <AccordionTrigger
            aria-label="Toggle the list of things I love"
            className="text-lg font-bold text-black"
          >
            😻 Everything I Love! 😍
          </AccordionTrigger>
          <AnimatePresence>
            <AccordionContent className="text-base text-gray-700 space-y-3 mt-2">
              {loves.map((item) => (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  key={item.id}
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              ))}
            </AccordionContent>
          </AnimatePresence>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default Loves;

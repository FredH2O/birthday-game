"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/neobrutalism-ui/accordion";
import ImageCard from "@/components/neobrutalism-ui/image-card";
import { AnimatePresence, motion } from "framer-motion";

const Loves = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container flex flex-col items-center justify-center max-w-md"
    >
      <p className="text-center mt-10 font-semibold italic text-md max-w-sm">
        When I grow up, I want to take care of animals - especially cats and
        other pets. These are some of my favorite things… but I have so many
        more I love that aren&apos;t even listed here!
      </p>

      <Accordion type="single" collapsible className="w-full max-w-xl p-3 mt-6">
        <AccordionItem value="item-1">
          <AccordionTrigger
            aria-label="Toggle the list of things I love"
            className="text-lg font-bold text-black"
          >
            🐈‍⬛ When I grow up.. ⬆️
          </AccordionTrigger>

          <AnimatePresence>
            <AccordionContent className="text-base py-10 flex flex-col gap-5 text-gray-700 space-y-6 mt-2">
              <div className="space-y-5">
                <ImageCard
                  caption="Pet Shelter Helper 🐾"
                  imageUrl="/Images/cat-vet.jpg"
                  className="w-full"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  I want to help animals who don’t have homes - give them food,
                  hugs, and safe places to sleep. I’d love to work at a pet
                  shelter where I can take care of kittens, puppies, and all the
                  animals who need love.
                </motion.p>
              </div>

              <div className="space-y-5">
                <ImageCard
                  caption="Kitten in a Basket 🐱"
                  imageUrl="/Images/cat-dream.jpg"
                  className="w-full"
                />
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  Sometimes I just want to hold a kitten in a warm basket and
                  read them a story. Maybe I’ll have a cozy cat café one day — a
                  quiet place where people and pets feel happy together.
                </motion.p>
              </div>
            </AccordionContent>
          </AnimatePresence>
        </AccordionItem>
      </Accordion>
    </motion.div>
  );
};

export default Loves;

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Adore = () => {
  return (
    <Accordion type="single" collapsible className="w-full max-w-xl">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-bold text-black">
          😻 Everything I Love! 😍
        </AccordionTrigger>
        <AccordionContent className="text-base text-gray-700 space-y-3 mt-2">
          <p></p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Adore;

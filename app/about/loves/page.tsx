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
        <AccordionTrigger className="text-lg font-bold text-pink-600">
          😻 Everything I Love! 😍
        </AccordionTrigger>
        <AccordionContent className="text-base text-gray-700 space-y-3 mt-2">
          <p>
            ✏️ <strong>Drawing cute things</strong> with my sister Ashley is one
            of my favorite things to do. We spend hours doodling magical
            animals, pretty princesses, and all the sparkly stuff we can
            imagine!
          </p>
          <p>
            📺 My <strong>favorite cartoon is Teen Titans</strong>! I love how
            funny and brave the characters are — especially Starfire because
            she’s so sweet and kind 💫.
          </p>
          <p>
            🎮 I also play <strong>Roblox</strong> all the time! I love dressing
            up my avatar and playing games with my friends — especially anything
            with cute pets and colorful worlds!
          </p>
          <p>
            🎀 I absolutely adore <strong>Sanrio characters</strong>, especially
            Hello Kitty, My Melody, and Kuromi. Their world is so pink and fun
            and full of smiles!
          </p>
          <p>
            🦄 <strong>Unicorns are magical</strong> — they’re sparkly, sweet,
            and full of imagination. If I could have one as a pet, I would name
            her “Princess Stardust”!
          </p>
          <p>
            💗 And of course... <strong>PINK</strong> is my most favorite color
            in the whole world! It makes everything feel warm and pretty and
            full of love.
          </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Adore;

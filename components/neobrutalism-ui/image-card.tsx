import { cn } from "@/lib/utils";
import Image from "next/image";

type Props = {
  imageUrl: string;
  caption: string;
  className?: string;
  description?: string;
};

export default function ImageCard({
  imageUrl,
  caption,
  className,
  description,
}: Props) {
  return (
    <figure
      className={cn(
        "w-[300px] overflow-hidden rounded-base border-2 border-border bg-main font-base shadow-shadow",
        className
      )}
    >
      <Image
        priority
        width={500}
        height={500}
        className="w-full aspect-4/3"
        src={imageUrl}
        alt="image"
      />
      <figcaption className="border-t-2 text-main-foreground border-border p-4">
        {caption}
      </figcaption>
      <p className="text-center px-3 pb-3 italic text-sm font-light">
        {description}
      </p>
    </figure>
  );
}

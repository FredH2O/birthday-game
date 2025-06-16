import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/neobrutalism-ui/menubar";
import Link from "next/link";

const Navigation = () => {
  return (
    <header className="">
      <Menubar className="w-full flex justify-center">
        <MenubarMenu>
          <MenubarTrigger asChild>
            <Link href="/">Home</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>About Me</MenubarTrigger>
          <MenubarContent className="self-center">
            <MenubarItem asChild>
              <Link href="/about/loves">All the Things I Adore 😍</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/about/hates">What Makes Me Go “No Thanks!” 😨</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem asChild>
              <Link href="/about/food">Yummy Food I Can’t Resist 😋</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/about/sweets">Sweet Treats I Love the Most 🍭</Link>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem asChild>
              <Link href="/about/dreams">
                When I Grow Up, I Want To Be... 🌟
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Games</MenubarTrigger>
          <MenubarContent>
            <MenubarItem asChild>
              <Link href="/games/know-me">Are We Besties?</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/games/cat-game">Cat Game</Link>
            </MenubarItem>
            <MenubarItem asChild>
              <Link href="/games/rock-paper-scissors">
                Rock, Paper, Scissors!
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};

export default Navigation;

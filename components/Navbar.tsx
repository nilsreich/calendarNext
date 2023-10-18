import { ModeToggle } from "@/components/ModeToggle";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { Button } from "@/components/ui/button";
import { MenuIcon, ChevronLeft, ChevronRight } from "lucide-react";

export const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-1 border-b">
      <Button variant={"ghost"}>
        <MenuIcon />
      </Button>
      <div className="grow">Kalendar</div>
      <div className="flex items-center">
        <Button variant={"ghost"}>
          <ChevronLeft />
        </Button>
        <Button variant={"outline"}>today</Button>
        <Button variant={"ghost"}>
          <ChevronRight />
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <LocaleSwitcher />
      </div>
    </div>
  );
};

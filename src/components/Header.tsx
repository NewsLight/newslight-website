import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-soft group-hover:shadow-glow transition-all duration-300">
              <Sun className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-semibold text-foreground">
              Newslight
            </span>
          </a>
          
          <div className="hidden md:flex items-center gap-8">
            <Button variant="nav" className="text-sm">
              Home
            </Button>
            <Button variant="nav" className="text-sm">
              About
            </Button>
            <Button variant="nav" className="text-sm">
              Contact
            </Button>
          </div>
          
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <Sun className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

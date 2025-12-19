import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Replace with your actual form submission endpoint
      // Example: Formspree (https://formspree.io/), Netlify Forms, or your own API
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({
          title: "You're on the list!",
          description: "We'll notify you when Newslight launches.",
        });
        setEmail("");
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }

    setIsLoading(false);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-warm opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6 font-body text-sm font-medium">
            <Mail className="w-4 h-4" />
            <span>Stay Updated</span>
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Be the first to know
          </h2>
          
          <p className="font-body text-lg text-muted-foreground mb-10">
            Join our waitlist for exclusive updates and early access when Newslight launches.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-card border-border/50 focus:border-primary"
            />
            <Button 
              type="submit" 
              variant="hero"
              disabled={isLoading}
              className="group"
            >
              {isLoading ? (
                "Joining..."
              ) : (
                <>
                  Subscribe
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;

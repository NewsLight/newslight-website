import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center bg-gradient-hero pt-20">
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="animate-fade-up max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8 font-body text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Coming Soon</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-foreground leading-tight mb-6">
            Your community,{" "}
            <span className="text-primary italic">brought to light.</span>
          </h1>
          
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Authentic local news powered by AI. Dedicated to everything happening in your neighborhood.
          </p>
        </div>
      </div>
      
      {/* Decorative gradient orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default Hero;

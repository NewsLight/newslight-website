import { Layers, Heart, Cpu } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Everything in One Place",
    description: "We aggregate the fragmented updates from community clubs, city halls, and local organizations into one seamless mobile feed.",
  },
  {
    icon: Heart,
    title: "Stories That Matter",
    description: "From a local youth athlete's big win to the real reasons behind your property tax shift—we bring the 'hidden' news to light.",
  },
  {
    icon: Cpu,
    title: "Human-First AI",
    description: "We use cutting-edge technology to keep costs low, so we can invest in the one thing that matters: real local journalism.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-warm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-all duration-500 group animate-fade-up-delay-${index + 1}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

import heroBg from "@/assets/hero-bg.jpg";
import { BarChart3, TrendingUp, Database } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Data visualization background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 mb-8 animate-fade-in-up">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
          <span className="text-xs font-medium text-primary">
            Inteligência de dados para o seu negócio
          </span>
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Transformamos{" "}
          <span className="text-gradient">dados</span>
          <br />
          em decisões
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Análise, organização e consultoria de dados para empresas de pequeno e
          médio porte. Dashboards Power BI que impulsionam resultados.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#portfolio"
            className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Ver Portfólio
          </a>
          <a
            href="#servicos"
            className="rounded-lg border border-border bg-secondary/50 px-8 py-3.5 text-base font-semibold text-foreground hover:bg-secondary transition-colors"
          >
            Nossos Serviços
          </a>
        </div>

        {/* Stats */}
        {/* <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-20 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            { icon: BarChart3, label: "Dashboards Criados", value: "50+" },
            { icon: TrendingUp, label: "Aumento Médio em Eficiência", value: "35%" },
            { icon: Database, label: "Dados Processados", value: "1M+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-xl p-6 glow-card"
            >
              <stat.icon className="h-6 w-6 text-primary mx-auto mb-3" />
              <p className="font-display text-3xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  {
    image: portfolio1,
    title: "Dashboard de Vendas",
    category: "Varejo",
    description:
      "Painel completo de análise de vendas com KPIs, tendências mensais e segmentação de clientes.",
  },
  {
    image: portfolio2,
    title: "Controle Financeiro",
    category: "Finanças",
    description:
      "Dashboard financeiro com análise de receitas, despesas, margens de lucro e projeções.",
  },
  {
    image: portfolio3,
    title: "Gestão Operacional",
    category: "Logística",
    description:
      "Monitoramento de operações em tempo real com mapas, indicadores de estoque e cadeia de suprimentos.",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Nossos trabalhos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Portfólio</span> Power BI
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass rounded-xl overflow-hidden glow-card group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

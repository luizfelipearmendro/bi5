import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Dashboard de Concessionária de Veículos",
    category: "Varejo",
    description:
      "Dashboard interativo para análise de desempenho comercial, com indicadores de vendas, evolução mensal e segmentação por perfil de cliente.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMGZmNjA3ZmMtOWEyNC00ZGFmLWEwYjItMWE5NDgxOWY5YWM0IiwidCI6ImUzMGIwMTUyLTQ4OWMtNDllYS05NGY2LWRiMmNlZDQ0ZDBmZCJ9",
    link:
      "https://app.powerbi.com/view?r=eyJrIjoiMGZmNjA3ZmMtOWEyNC00ZGFmLWEwYjItMWE5NDgxOWY5YWM0IiwidCI6ImUzMGIwMTUyLTQ4OWMtNDllYS05NGY2LWRiMmNlZDQ0ZDBmZCJ9",
  },
  {
    image: portfolio2,
    title: "Dashboard para Fornecedora de Brownies",
    category: "Logística",
    description:
      "Painel desenvolvido como demonstração para apoiar o controle financeiro e operacional, reunindo faturamento, perdas produtivas, níveis de estoque e indicadores de eficiência.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiZDg3YzMxZWItNDk0ZC00ZjJjLWFjMzQtMjllM2U4YWY5Nzg1IiwidCI6ImUzMGIwMTUyLTQ4OWMtNDllYS05NGY2LWRiMmNlZDQ0ZDBmZCJ9",
    link:
      "https://app.powerbi.com/view?r=eyJrIjoiZDg3YzMxZWItNDk0ZC00ZjJjLWFjMzQtMjllM2U4YWY5Nzg1IiwidCI6ImUzMGIwMTUyLTQ4OWMtNDllYS05NGY2LWRiMmNlZDQ0ZDBmZCJ9",
  },
  {
    image: portfolio3,
    title: "Dashboard para faturamento para Óticas",
    category: "Logística",
    description:
      "Dashboard voltado ao acompanhamento de faturamento e desempenho operacional de óticas, com controle de vendas, perdas, estoque e indicadores para apoio à tomada de decisão.",
    embedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMWVlZDhkNmEtMzYyZi00ZjZiLTk0Y2EtYjEyMWUxMzMxN2IxIiwidCI6ImUzMGIwMTUyLTQ4OWMtNDllYS05NGY2LWRiMmNlZDQ0ZDBmZCJ9",
    link:
      "https://app.powerbi.com/view?r=eyJrIjoiMWVlZDhkNmEtMzYyZi00ZjZiLTk0Y2EtYjEyMWUxMzMxN2IxIiwidCI6ImUzMGIwMTUyLTQ4OWMtNDllYS05NGY2LWRiMmNlZDQ0ZDBmZCJ9",
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
            <div className="glass rounded-xl overflow-hidden glow-card group">
              <div className="relative h-96 overflow-hidden bg-muted">
                <iframe
                  src={project.embedUrl}
                  className="w-full h-full border-0"
                  loading="lazy"
                  allow="fullscreen"
                  allowFullScreen
                />
                <div className="absolute top-4 left-4 z-10">
                  <span className="rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="mt-4 opacity-20 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Ver dashboard completo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
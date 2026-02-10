import {
  BarChart3,
  Database,
  LineChart,
  Settings,
  FileSpreadsheet,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Dashboards Power BI",
    description:
      "Criação de painéis interativos e visuais que transformam dados brutos em insights acionáveis para sua empresa.",
  },
  {
    icon: Database,
    title: "Organização de Dados",
    description:
      "Estruturação e limpeza de bases de dados para garantir qualidade e confiabilidade nas suas análises.",
  },
  {
    icon: LineChart,
    title: "Análise de Dados",
    description:
      "Identificação de padrões, tendências e oportunidades escondidas nos seus dados empresariais.",
  },
  {
    icon: Settings,
    title: "Automação de Relatórios",
    description:
      "Automatização de processos repetitivos de geração de relatórios, economizando tempo da sua equipe.",
  },
  {
    icon: FileSpreadsheet,
    title: "ETL & Integração",
    description:
      "Extração, transformação e carga de dados de múltiplas fontes em um único ambiente analítico.",
  },
  {
    icon: Lightbulb,
    title: "Consultoria Estratégica",
    description:
      "Orientação especializada para implementar uma cultura data-driven no seu negócio.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            O que fazemos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="glass rounded-xl p-8 glow-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

import { Linkedin } from "lucide-react";

const members = [
  { name: "Mateus Augusto Silva", role: "Análise de Dados" },
  { name: "Cleber Rufino Miranda", role: "Consultoria & Estratégia" },
  { name: "João Pedro da Silva Gonçalves", role: "Power BI Developer" },
  { name: "Gustavo Lima Capistrano Martins", role: "Engenharia de Dados" },
  { name: "Luiz Felipe Dias Armendro", role: "ETL & Integração" },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

const Team = () => {
  return (
    <section id="equipe" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Quem somos
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Nossa <span className="text-gradient">Equipe</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
            Cinco profissionais apaixonados por dados, unidos pelo objetivo de
            democratizar a inteligência de negócios.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {members.map((member) => (
            <div
              key={member.name}
              className="glass rounded-xl p-6 text-center glow-card group hover:border-primary/30 transition-all duration-300"
            >
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-4 border border-primary/20">
                <span className="font-display text-xl font-bold text-primary">
                  {getInitials(member.name)}
                </span>
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

import { Linkedin } from "lucide-react";

import Mateus from "@/assets/team/mateus.jpg";
import Cleber from "@/assets/team/cleber.jpg";
import Joao from "@/assets/team/joao.jpg";
import Gustavo from "@/assets/team/gustavo.jpg";
import Luiz from "@/assets/team/luiz.jpg";

const members = [
  //{ name: "Mateus Augusto Silva", role: "Análise de Dados" },
  //{ name: "Cleber Rufino Miranda", role: "Consultoria & Estratégia" },
  //{ name: "João Pedro da Silva Gonçalves", role: "Power BI Developer" },
  //{ name: "Gustavo Lima Capistrano Martins", role: "Engenharia de Dados" },
  //{ name: "Luiz Felipe Dias Armendro", role: "ETL & Integração" },
  {
    name: "Cleber Rufino Miranda",
    role: "",
    photo: Cleber,
    linkedin: "https://www.linkedin.com/in/cleber-rufino-240890290"
  },
  {
    name: "João Pedro da S. Gonçalves",
    role: "",
    photo: Joao,
    linkedin: "https://www.linkedin.com/in/"
  },
  {
    name: "Gustavo Lima C. Martins",
    role: "",
    photo: Gustavo,
    linkedin: "https://www.linkedin.com/in/gustavo-capistrano-594399330?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
  },
  {
    name: "Luiz Felipe Dias Armendro",
    role: "",
    photo: Luiz,
    linkedin: "https://www.linkedin.com/in/luiz-felipe-dias-armendro-07240a260"
  },
  {
    name: "Mateus Augusto Silva",
    role: "",
    photo: Mateus,
    linkedin: "https://www.linkedin.com/in/mateus-asilva/"
  },
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
              <div className="h-20 w-20 rounded-full overflow-hidden mx-auto mb-4 border border-primary/20 bg-muted">
                {member.photo ? (
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/30">
                    <span className="font-display text-xl font-bold text-primary">
                      {getInitials(member.name)}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="font-display text-sm font-semibold text-foreground mb-1">
                {member.name}
              </h3>
              <div className="flex justify-center mt-2">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`LinkedIn de ${member.name}`}
                >
                  <Linkedin size={16} />
                </a>
              </div>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

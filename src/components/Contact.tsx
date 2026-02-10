import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-3">
            Vamos conversar
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Pronto para transformar seus{" "}
            <span className="text-gradient">dados</span>?
          </h2>
          <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
            Entre em contato e descubra como a BI5 pode ajudar sua empresa a
            tomar decisões mais inteligentes.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            {[
              { icon: Mail, label: "E-mail", value: "contato@bi5.com.br" },
              { icon: Phone, label: "Telefone", value: "(11) 99999-0000" },
              { icon: MapPin, label: "Localização", value: "São Paulo, SP" },
            ].map((item) => (
              <div
                key={item.label}
                className="glass rounded-xl p-6 glow-card"
              >
                <item.icon className="h-6 w-6 text-primary mx-auto mb-3" />
                <p className="text-xs text-muted-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-foreground">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          <a
            href="mailto:contato@bi5.com.br"
            className="inline-flex rounded-lg bg-primary px-10 py-4 text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

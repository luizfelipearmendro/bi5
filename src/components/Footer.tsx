const Footer = () => (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold text-gradient">BI5</span>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} BI5. Todos os direitos reservados.
        </p>
      </div>
    </footer>
);

export default Footer;

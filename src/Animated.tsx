const Animated = ({ children, animation = "fade-up" }) => {
  return (
    <div data-aos={animation}>
      {children}
    </div>
  );
};

export default Animated;
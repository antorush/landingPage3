interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <section className={`block relative w-full py-[80px] ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;

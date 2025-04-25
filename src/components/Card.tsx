const Card = ({ children }: { children: React.ReactNode }) => {
  return <div className="border-2 border-b-amber-600 p-5 max-w-fit">{children}</div>;
};

export default Card;

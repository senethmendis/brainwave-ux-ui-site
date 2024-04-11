const Heading = ({ className, title }) => {
  return (
    <div className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20`}>
      {title && <h1 className="h2">{title}</h1>}
    </div>
  );
};

export default Heading;

const HeadingTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="hidden sm:block w-[152px] h-1 linear_to_right"></div>
      <h1 className="uppercase text-base text-center gradient-text sm:text-2xl font-bold text-primary-blue">
        {title}
      </h1>
      <div className="hidden sm:block w-[152px] h-1 linear_to_left"></div>
    </div>
  );
};

export default HeadingTitle;

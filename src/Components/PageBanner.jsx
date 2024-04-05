const PageBanner = ({ content }) => {
  return (
    <div className="linear_bg">
      <div className="flex max-lg:flex-wrap-reverse px-3 md:px-28 py-16 justify-between max-lg:justify-center items-center">
        <div className="w-auto xl:w-[639px] text-white">
          <h1 className="text-4xl sm:text-[50px] font-bold uppercase leading-none">
            {content.title}
          </h1>
          {content.text && <p>{content.text}</p>}
        </div>
        <div className={`w-[${content.imageWidth}]`}>
          <img
            src={content.image}
            alt={content.title}
            className={`w-[${content.imageWidth}]`}
          />
        </div>
      </div>
    </div>
  );
};

export default PageBanner;

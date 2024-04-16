const Table = ({ title, data }) => {
  return (
    <div className="w-full">
      <div className="linear_bg px-3 py-1">
        <h1 className="uppercase text-white text-lg lg:text-xl min-[1450px]:text-[30px] font-bold m-0 p-[5px]">
          {title}
        </h1>
      </div>
      <table className="w-full mt-4 text-sm font-semibold text-primary-blue md:text-base min-[1450px]:text-xl">
        {data.map((item, index) => (
          <tr key={index}>
            <td className="text-left">{item.name}</td>
            <td className="text-left">{item.amount}</td>
            <td className="text-right">{item.date}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Table;

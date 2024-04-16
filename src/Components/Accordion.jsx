import { useState } from "react";
import arrowDown from "../img/accordion-arrow-down.svg";

const Accordion = ({ data }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="p-2 sm:p-5 flex justify-between border border-solid border-gray-shade-1 cursor-pointer" onClick={() => setOpen(!open)}>
        <p className="text-base sm:text-xl font-bold gradient-text">{data.question}</p>
        <button onClick={() => setOpen(!open)}>
          <img src={arrowDown} alt="arrow icon for accordion" />
        </button>
      </div>
      {open && (
        <div className="p-2 sm:p-5 flex justify-between border border-solid border-gray-shade-1">
          <p className="text-sm sm:text-xl">{data.answer}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;

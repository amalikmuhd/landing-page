/* eslint-disable react/prop-types */
import { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-second-border-color border-[1px] px-10 rounded my-4 py-4">
      <div onClick={toggleAccordion} className="py-2">
        <div className="flex justify-between items-center">
          <span
            className={`font-semibold space-grotesk text-xl rounded ${
              isOpen ? 'text-[#1565D8]' : 'text-initial'
            }`}
          >
            {title}
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform ${
              isOpen ? 'rotate-20' : ''
            } ${isOpen ? 'text-[#1565D8]' : 'text-initial'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v12M6 12h12"
              />
            )}
          </svg>
        </div>
      </div>
      {isOpen && <div className="py-1 text-left font-normal">{children}</div>}
    </div>
  );
};

export default AccordionItem;

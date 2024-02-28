/* eslint-disable react/prop-types */
// src/components/Accordion.js
import { useState } from 'react';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-bg-color border-2 px-10 rounded my-4">
      <div onClick={toggleAccordion} className="py-2">
        <div className="flex justify-between items-center">
          <span>{title}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      {isOpen && <div className="pl-4 py-2">{children}</div>}
    </div>
  );
};

export default AccordionItem;

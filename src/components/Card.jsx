/* eslint-disable react/prop-types */
import { HomeBackground } from '../assets/assets';
const Card = ({ children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${HomeBackground})`,
      }}
      className="bg-center bg-cover bg-base-russian bottom-0 text-white font-space-grotesk px-4 w-full font-Open-sans"
    >
      {children}
    </div>
  );
};

export default Card;

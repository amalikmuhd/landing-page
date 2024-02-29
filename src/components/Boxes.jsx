import BoxData from "../data/BoxData";
import CardTwo from "./CardTwo";

const Boxes = () => {
  return (
    <div className="flex flex-wrap w-[80%] mx-auto justify-between font-space-grotesk">
      {BoxData.map((items, index) => (
        <CardTwo
          key={index}
          text={items.text}
          titleText={items.titleText}
          cardBackground={items.cardBackground}
          cardImage={items.cardImage}
        />
      ))}
    </div>
  );
};

export default Boxes;

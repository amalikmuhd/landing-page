import { transactionImage } from "../assets/assets";
import { BannerImage3 } from "../assets/assets";
import { sendData2 } from "../data/SendReceiveCryptoData";
import TextImageCard from "./TextImageCard";

const list = sendData2

const SendRecieve = () => {
  return (
    <div
      style={{ backgroundImage: `url(${BannerImage3})` }}
      className="bg-center bg-cover bg-no-repeat lg:h-[700px] p-0"
    >
      <div className=" lg:h-[700px] p-3 flex items-center">
        <TextImageCard
          image={transactionImage}
          darkColor={true}
          flexReverse={true}
          list={list}
        />
      </div>
    </div>
  );
};

export default SendRecieve;

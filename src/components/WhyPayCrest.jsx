import { CryptoImage } from "../assets/assets";
import { sendData1 } from "../data/SendReceiveCryptoData";
import TextImageCard from "./TextImageCard";

const WhyPayCrest = () => {
  const list = sendData1
  return (
    <div className="bg-white p-[10px] lg:p-[20px]">
      <div className="lg:w-[60%] mx-auto text-center flex flex-col items-center">
        <h6 className="text-center text-[#202F3A] w-24 text-[12px] bg-[#9BBFF0] bg-opacity-10 rounded-lg font-space-grotesk p-1 font-semibold">
          Why Paycrest
        </h6>
        <h2 className="text-[30px] font-bold my-[1.5rem] font-space-grotesk">
          A New Era of Borderless Payments
        </h2>
        <p className="leading-[1.8] text-[16px] font-space-grotesk">
          Paycrest is ushering in a new era of decentralized payments for Africa
          that are fast, affordable, and accessible to all. Our protocol
          leverages cryptocurrency networks toenable instant transactions
          directly to local bank accounts or mobile money wallets, without
          recipients needing to understand blockchain technology.
        </p>
      </div>
      <TextImageCard image={CryptoImage} list={list}/>
    </div>
  );
};

export default WhyPayCrest;

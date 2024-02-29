import { Landing4 } from "../assets/assets";
import AppText from "../components/AppText";
import Banner from "../components/Banner";
import BottonBanner from "../components/BottomBanner";
import Card from "../components/Card";
import Boxes from "../components/Boxes";
import Advert from "../components/Advert";
import Centric from "../components/Centric";
import SendRecieve from "../components/SendRecieve";
import WhyPayCrest from "../components/WhyPayCrest";
import Button from "../components/Button";

const Landingpage = () => {
  return (
    <>
      <Card>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left md:mx-auto lg:items-center min-h-screen w-full md:w-3/4">
          <div className="w-full lg:w-3/4 flex flex-col justify-between ">
            <div className="h-3/5 flex flex-col">
              <div className="font-space-grotesk mt-1 flex flex-col items-center">
                <h2 className="font-bold text-3xl text-center lg:text-6xl mb-2 lg:my-2">
                  Decentralized exchange infrastructure for businesses in Africa
                </h2>
                <p className="my-2 text-md lg:text-lg text-center mt-3">
                  Expand your financial reach. Paycrest bridges cryptocurrencies
                  with local currencies for seamless cross-border transactions.
                </p>
                <Button
                  title="Get started"
                  style={`w-1/2 py-4 bg-[#1565D8] rounded-lg mt-10`}
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
      <Banner />
      <WhyPayCrest />
      <SendRecieve />

      <div className="bg-[#F1F6FF] sm:py-0 lg:py-24 ">
        <AppText
          tag={"Our Solutions"}
          title={"A New Era of Borderless Payments"}
          subtitle={
            "Paycrest is ushering in a new era of decentralized payments for Africa that are fast, affordable, and accessible"
          }
        />
      </div>

      <Advert />

      <Centric
        style={"md:flex-row"}
        image={Landing4}
        card={"For Developers"}
        title={"Developer-centric APIs"}
        subtitle={
          "Paycrest facilitates smooth integration of crypto payment services into any application with comprehensive documentation of APIs and SDKs."
        }
        button={"View Documentation"}
      />

      <div className="sm:py-0 lg:py-24">
        <AppText
          tag={"Product Benefit"}
          title={"Making Blockchain Payments Work for Everyone"}
          subtitle={
            "Bridging the gap between cryptocurrencies and local currencies in Africa and other frontier markets."
          }
        />
      </div>
      <Boxes />
      <BottonBanner />
    </>
  );
};

export default Landingpage;

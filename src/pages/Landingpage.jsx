import BottonBanner from "../components/BottomBanner";
import Card from "../components/Card";
import CardTwo from "../components/CardTwo";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar";
import SendRecieve from "../components/SendRecieve";
import TextImageCard from "../components/TextImageCard";
import WhyPayCrest from "../components/WhyPayCrest";

const cardArr = [
  {
    titleText: "Trustless Payments",
    text: "Paycrest eliminates the need for intermediaries through an innovative peer-to-peer protocol, improving security.",
    cardImage: "/money-transfer 1.png",
    cardBackground: "dark",
  },
  {
    titleText: "Negligible Fees",
    text: "Avoid the high fees of traditional remittances and payment systems. Paycrest Protocol leverages Layer 2 blockchain networks for efficiency.",
    cardImage: "/discount-pricetag-sale 1.png",
    cardBackground: "",
  },
  {
    titleText: "Uncapped Volumes",
    text: "Send any amount without artificially imposed limits. Our liquidity aggregation unlocks unlimited capacity.",
    cardImage: "/money-transfer 1.png",
    cardBackground: "dark",
  },
  {
    titleText: "Instant Settlement",
    text: "Receive local payouts directly to bank accounts or mobile wallets in seconds through real-time settlement",
    cardImage: "/discount-pricetag-sale 1.png",
    cardBackground: "",
  },
  {
    titleText: "Non-Custodial",
    text: "Maintain control of your assets. Paycrest never takes custody of user funds at any point.",
    cardImage: "/money-transfer 1.png",
    cardBackground: "dark",
  },
  {
    titleText: "Financial Inclusion",
    text: "Expand access to fast, affordable payments in Africaeven to the unbanked through seamless crypto-fiat exchange.",
    cardImage: "/discount-pricetag-sale 1.png",
    cardBackground: "",
  },
];
const Landingpage = () => {
  return (
    <>
      <NavBar />
      <Card>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left md:mx-auto lg:items-center min-h-screen w-full md:w-3/4">
          <div className="w-full lg:w-1/2 flex flex-col justify-between ">
            <div className="h-3/5 flex flex-col">
              <div className="font-space-grotesk mt-12">
                <h2 className="font-bold text-3xl mb-2 lg:my-2">
                  Decentralized exchange infrastructure for businesses in Africa
                </h2>
                <p className="my-2 text-lg">
                  Expand your financial reach. Paycrest bridges cryptocurrencies
                  with local currencies for seamless cross-border transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
      <WhyPayCrest />
      <SendRecieve />
      {/* <TextImageCard /> */}
      <div className="flex flex-wrap w-[80%] mx-auto justify-between">
        {cardArr.map((items) => (
          <CardTwo
            text={items.text}
            titleText={items.titleText}
            cardBackground={items.cardBackground}
            cardImage={items.cardImage}
          />
        ))}
      </div>

      <BottonBanner />
      <Footer />
    </>
  );
};

export default Landingpage;

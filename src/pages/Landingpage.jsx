import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Solution from '../components/Solution';
import Centric from '../components/centric';


const Landingpage = () => {
  return (
    <>
      <NavBar />
      <Card>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left md:mx-auto lg:items-center min-h-screen w-full md:w-3/4 ">
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
      
      <Solution style = {'md:flex-row'} main={'Our Solutions'} sub={'A New Era of Borderless Payments'} text={'Paycrest is ushering in a new era of decentralized payments for Africa that are fast, affordable, and accessible'} margin = {'flex flex-col pb-[64px] pt-[100px]'} Image={"./landing1.png"} card={'For Senders'} title = {'Send Cryptocurrency'} subtitle = {'Convert your cryptocurrencies into local fiat currency and transfer them seamlessly to any bank account or mobile wallet.'} button = {'Start sending now'}/>
      <Solution style = {'md:flex-row-reverse'} Image ={"./landing2.png"} card={'For Liquidity Providers'} title = {'Provide Liquidity'} subtitle = {'Provide liquidity and earn passive income through operating automated liquidity provision nodes'} button = {'Become a provider'}/>
      <Solution style = {'md:flex-row'} Image={"./landing3.png"} card={'For Developers'} title = {'Build on Paycrest Protocol'} subtitle = {'Develop applications and decentralised applications (dApps) leveraging Paycrest Protocol REST APIs or smart contracts'} button = {'Explore developer docs'}/>
      <Centric style = {'md:flex-row'} Image={"./landing4.png"} card={'For Developers'} title = {'Developer-centric APIs'} subtitle = {'Paycrest facilitates smooth integration of crypto payment services into any application with comprehensive documentation of APIs and SDKs.'} button = {'View Documentation'}/>
      <Footer />
    </>
  );
};

export default Landingpage;

/* eslint-disable react/jsx-no-undef */
import { Landing4 } from '../assets/assets';
import AppText from '../components/AppText';
import Banner from '../components/Banner';
import BottonBanner from '../components/BottomBanner';
import Boxes from '../components/Boxes';
import Advert from '../components/Advert';
import Centric from '../components/Centric';
import WhyPayCrest from '../components/WhyPayCrest';
import Hero from '../components/Hero';

const Landingpage = () => {
  return (
    <>
      <Hero />
      <Banner />
      <WhyPayCrest />
      <div className="bg-[#F1F6FF] sm:py-0 lg:py-24">
        <AppText
          tag={'Our Solutions'}
          title={'A New Era of Borderless Payments'}
          subtitle={
            'Paycrest is ushering in a new era of decentralized payments for Africa that are fast, affordable, and accessible'
          }
        />
      </div>

      <Advert />

      <Centric
        style={'md:flex-row'}
        image={Landing4}
        card={'For Developers'}
        title={'Developer-centric APIs'}
        subtitle={
          'Paycrest facilitates smooth integration of crypto payment services into any application with comprehensive documentation of APIs and SDKs.'
        }
        button={'View Documentation'}
      />

      <div className="sm:py-0 lg:py-24">
        <AppText
          tag={'Product Benefit'}
          title={'Making Blockchain Payments Work for Everyone'}
          subtitle={
            'Bridging the gap between cryptocurrencies and local currencies in Africa and other frontier markets.'
          }
        />
      </div>
      <Boxes />
      <BottonBanner />
    </>
  );
};

export default Landingpage;

import { Landing1, Landing2, Landing3 } from '../assets/assets';
import ColListItem from './ColListItem';

const Advert = () => {
  return (
    <>
      <div className="flex justify-center bg-[#F1F6FF] font-space-grotesk font-Open-sans flex-col">
        <div
          className={`flex md:flex-row flex-col justify-center items-center`}
        >
          <ColListItem
            card="For Senders"
            title={'Send Cryptocurrency'}
            subtitle={
              'Convert your cryptocurrencies into local fiat currency and transfer them seamlessly to any bank account or mobile wallet.'
            }
            button={'Start sending now'}
          />
          <img height={463} src={Landing1} className="lg:w-4/12 md:w-full" />
        </div>
      </div>

      <div className="flex justify-center bg-[#F1F6FF] font-space-grotesk font-Open-sans flex-col">
        <div
          className={`flex md:flex-row flex-col justify-center items-center my-10`}
        >
          <img height={463} src={Landing2} className="lg:w-3/12 md:w-full" />

          <ColListItem
            card="For Liquidity Providers"
            title={'Provide Liquidity'}
            subtitle={
              'Provide liquidity and earn passive income through operating automated liquidity provision nodes'
            }
            button={'Become a provider'}
          />
        </div>
      </div>

      <div className="flex justify-center bg-[#F1F6FF] font-space-grotesk font-Open-sans flex-col">
        <div
          className={`flex md:flex-row flex-col justify-center items-center my-10`}
        >
          <ColListItem
            card="For Developers"
            title={'Build on Paycrest Protocol'}
            subtitle={
              'Develop applications and decentralised applications (dApps) leveraging Paycrest Protocol REST APIs or smart contracts'
            }
            button={'Explore developer docs'}
          />
          <img src={Landing3} className="lg:w-3/12 w-8/12 mt-8 lg:mt-0" />
        </div>
      </div>
    </>
  );
};

export default Advert;

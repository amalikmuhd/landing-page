import { PhoneAboutIcon, SupoortAboutIcon } from '../assets/assets';
import AboutusCard from '../components/AboutusCard';
import BottonBanner from '../components/BottomBanner';

const Aboutus = () => {
  return (
    <div className="font-space-grotesk font-Open-sans w-full">
      <div className="w-full  flex md:flex-row flex-col justify-center lg:px-[120px] px-[20px] bg-[#0D0C2B] text-[#fff]">
        <h2 className="font-bold text-center lg:pt-[216px] pt-[120px] md:pb-[50px] lg:pb-[69px] text-[30px] lg:text-[56px]">
          How can we help you?
        </h2>
      </div>
      <div className="lg:px-[200px] px-[20px] bg-white">
        <div className="pt-[60px] text-center">
          <p className="font-medium">
            Or choose a category to quickly find the help you need
          </p>
        </div>
      </div>

      <h2 className="font-bold text-center pt-[120px] md:pb-[50px] text-[30px] lg:text-[56px]">
        General
      </h2>

      <div className=" flex flex-col container mx-auto text-center justify-center items-center">
        <h2 className="font-bold text-center text-[30px] lg:text-[56px]">
          Still have a questions?
        </h2>
        <div className="w-5/12">
          <h3 className="font-light text-center pt-[20px] md:pb-[50px] text-[30px] lg:text-[18px]">
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We wil answer to you shortly!
          </h3>
        </div>
      </div>
      {/* <div className=" flex container mx-auto text-center justify-center gap-10">
        <div className="w-4/12 py-20 rounded border-bg-color border-2 px-10">
          <h3 className="font-light text-center pt-[20px] md:pb-[50px] text-[30px] lg:text-[18px]">
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We wil answer to you shortly!
          </h3>
        </div>
        <div className="w-4/12 border-bg-color border-2">
          <h3 className="font-light text-center pt-[20px] md:pb-[50px] text-[30px] lg:text-[18px]">
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We wil answer to you shortly!
          </h3>
        </div>
      </div> */}
      <div className=" flex container mx-auto text-center justify-center gap-10">
        <AboutusCard
          icon={SupoortAboutIcon}
          title={'support@paycrest.io'}
          subtitle={'Alternative way to get anwsers faster.'}
        />
        <AboutusCard
          icon={PhoneAboutIcon}
          title={'+1 (234) 567-8900'}
          subtitle={'We are always happy to help.'}
        />
      </div>

      <BottonBanner
        title={'Facilitate cross-border payments to and from Africa'}
      />
    </div>
  );
};

export default Aboutus;

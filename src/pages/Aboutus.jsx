import { useState } from 'react';
import {
  BookIcon,
  MoneyIcon,
  PhoneAboutIcon,
  SupoortAboutIcon,
  ThumbsIcon,
} from '../assets/assets';
import AboutusCard from '../components/AboutusCard';
import AccordionItem from '../components/AccordionItem';
import BottonBanner from '../components/BottomBanner';

const Aboutus = () => {
  const [tab, setTab] = useState('General');
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

      <div className="flex container mx-auto text-center justify-center gap-10 my-20">
        <AboutusCard
          onclick={() => setTab('General')}
          styles={tab === 'General' ? 'shadow-2xl' : null}
          icon={BookIcon}
          iconWidth={40}
          title={'General'}
          subtitle={'All you need to know about Paycrest protocol.'}
        />
        <AboutusCard
          onclick={() => setTab('Providers')}
          styles={tab === 'Providers' ? 'shadow-2xl' : null}
          icon={MoneyIcon}
          iconWidth={40}
          title={'Providers'}
          subtitle={
            'How to tap into a fast-growing market for crypto-to-fiat transactions.'
          }
        />
        <AboutusCard
          onclick={() => setTab('Senders')}
          styles={tab === 'Senders' ? 'shadow-2xl' : null}
          icon={ThumbsIcon}
          iconWidth={40}
          title={'Senders'}
          subtitle={
            'How to help your customers cash out their crypto into local fiat money.'
          }
        />
      </div>

      {tab === 'General' ? (
        <>
          <h2 className="font-bold text-center pt-[20px] md:pb-[50px] text-[30px] lg:text-[36px]">
            General
          </h2>

          <div className="container mx-auto text-center justify-center gap-10 mb-10 w-7/12">
            <AccordionItem title="What is Paycrest?">
              <p>
                Paycrest is a decentralized peer-to-peer protocol that enables
                the seamless exchange of cryptocurrencies for local currencies
                across Ethereum and other EVM-based networks.
              </p>
            </AccordionItem>
            <AccordionItem title="How can you use Paycrest?">
              <p>Content for section 2 goes here.</p>
            </AccordionItem>
            <AccordionItem title="Does Paycrest work for customer or business?">
              <p>Content for section 3 goes here.</p>
            </AccordionItem>
            <AccordionItem title="Does Paycrest power cross-border payments?">
              <p>Content for section 4 goes here.</p>
            </AccordionItem>
            <AccordionItem title="What is Paycrest Direct Charge?">
              <p>Content for section 5 goes here.</p>
            </AccordionItem>
          </div>
        </>
      ) : tab === 'Providers' ? (
        <>
          <h2 className="font-bold text-center pt-[20px] md:pb-[50px] text-[30px] lg:text-[36px]">
            Providers
          </h2>

          <div className="container mx-auto text-center justify-center gap-10 mb-10 w-7/12">
            <AccordionItem title="Who is a Provider?">
              <p>
                Paycrest is a decentralized peer-to-peer protocol that enables
                the seamless exchange of cryptocurrencies for local currencies
                across Ethereum and other EVM-based networks.
              </p>
            </AccordionItem>
            <AccordionItem title="How can you use Paycrest?">
              <p>Content for section 2 goes here.</p>
            </AccordionItem>
            <AccordionItem title="Does Paycrest work for customer or business?">
              <p>Content for section 3 goes here.</p>
            </AccordionItem>
            <AccordionItem title="Does Paycrest power cross-border payments?">
              <p>Content for section 4 goes here.</p>
            </AccordionItem>
            <AccordionItem title="What is Paycrest Direct Charge?">
              <p>Content for section 5 goes here.</p>
            </AccordionItem>
          </div>
        </>
      ) : tab === 'Senders' ? (
        <>
          <h2 className="font-bold text-center pt-[20px] md:pb-[50px] text-[30px] lg:text-[36px]">
            Senders
          </h2>

          <div className="container mx-auto text-center justify-center gap-10 mb-10 w-7/12">
            <AccordionItem title="Who is a Sender?">
              <p>
                Paycrest is a decentralized peer-to-peer protocol that enables
                the seamless exchange of cryptocurrencies for local currencies
                across Ethereum and other EVM-based networks.
              </p>
            </AccordionItem>
            <AccordionItem title="How can you use Paycrest?">
              <p>Content for section 2 goes here.</p>
            </AccordionItem>
            <AccordionItem title="Does Paycrest work for customer or business?">
              <p>Content for section 3 goes here.</p>
            </AccordionItem>
            <AccordionItem title="Does Paycrest power cross-border payments?">
              <p>Content for section 4 goes here.</p>
            </AccordionItem>
            <AccordionItem title="What is Paycrest Direct Charge?">
              <p>Content for section 5 goes here.</p>
            </AccordionItem>
          </div>
        </>
      ) : null}

      {/*  */}

      <div className=" flex flex-col container mx-auto text-center justify-center items-center">
        <h2 className="font-bold text-center text-[30px] lg:text-[36px]">
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

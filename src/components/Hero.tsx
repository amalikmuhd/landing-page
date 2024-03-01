import React from 'react';
import Button from './Button';
import Card from './Card';

const Hero = () => {
  return (
    <Card>
      <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left md:mx-auto lg:items-center min-h-screen w-full md:w-3/4">
        <div className="w-full lg:w-3/4 flex flex-col justify-between ">
          <div className="h-3/5 flex flex-col mt-[-100px]">
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
  );
};

export default Hero;
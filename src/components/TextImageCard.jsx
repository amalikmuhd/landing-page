/* eslint-disable react/prop-types */

const TextImageCard = ({
  list = [{}, {}, {}, {}],
  flexReverse = false,
  darkColor = false,
  image,
}) => {
  return (
    <div
      style={{ color: darkColor ? 'white' : 'black' }}
      className={
        flexReverse
          ? 'w-[90%] flex flex-wrap mx-auto my-[2rem] justify-between items-center lg:p-[20px] flex-row-reverse'
          : 'w-[90%] flex flex-wrap mx-auto my-[2rem] justify-between items-center lg:p-[20px]'
      }
    >
      <div className="lg:w-[40%] lg:p-[20px]">
        <h2 className="text-[18px] lg:text-[30px] font-medium tracking-[1px] leading-[1.2] lg:w-[80%]">
          Send Crypto, Receive Local Currency In Seconds
        </h2>
        {list.map((item, key) => (
          <div key={key} className="flex items-start my-[2rem]">
            <span className="py-[1px] px-[8px] bg-black shadow-lg shadow-white text-white rounded-[30px] mr-[1.5rem]">
              {key + 1}
            </span>
            <div>
              <h3 className="text-[20px] font-medium mb-[0.4rem]">
                Initiate Payment
              </h3>
              <p className="leading-[1.8] tracking-[0.4px]">
                Easily create a payment order through our API or by directly
                interacting with our Order smart contract. Specify recipient
                details and payment amount.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:w-[30%]">
        <img className="w-[90%] h-[500px]" src={image} alt="" />
      </div>
    </div>
  );
};

export default TextImageCard;

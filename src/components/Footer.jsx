import { FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import ListItems from './ListItems';
import FooterTopData from '../data/FooterTopData';
import { LogoWhite } from '../assets/assets';

const Footer = () => {
  return (
    <div
      className="bg-[#FFFFFF] py-10 lg:mt-16"
      data-aos="fade-up"
      // data-aos-anchor-placement="bottom-bottom"
    >
      {/* inner container */}
      <div className="lg:w-4/5 mx-auto">
        {/* top container */}
        <div className="flex px-8 justify-between flex-wrap">
          {/* logo container */}
          <div className="w-full my-4 lg:w-[15%]">
            <img src={LogoWhite} className={'w-[80%]'} alt="logo" />
            <div className="iconsContainer flex  mt-4">
              <span className="bg-[#5a71845d] p-[13px] rounded-[20px] mr-[0.8rem]">
                <FaTwitter fontSize={'16px'} />
              </span>
              <span className="bg-[#5a71845d] p-[13px] rounded-[20px]  mr-[0.8rem]">
                <FaInstagram fontSize={'16px'} />
              </span>
              <span className="bg-[#5a71845d] p-[13px] rounded-[20px] ">
                <FaLinkedin fontSize={'16px'} />
              </span>
            </div>
          </div>
          {FooterTopData.map((item, index) => (
            <ListItems
              key={index}
              listTitle={item?.title}
              listLinks={item?.listItems}
            />
          ))}
        </div>
        {/* top container ends here*/}

        {/* last layer */}
        <div className="flex flex-wrap px-8 justify-between items-center">
          <div className="w-[90%] lg:w-[50%]">
            <p className="text-[#2A2E33] text-sm">
              © 2024 Paycrest Inc, All Right Reserved.
            </p>
          </div>
        </div>
        {/* last layer ends here */}
      </div>
    </div>
  );
};

export default Footer;

import { BannerImage2, BrandLogos } from '../assets/assets';

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BannerImage2})`,
        marginTop: '-70px',
        marginBottom: '30px',
      }}
      className=" w-5/6 bg-cover py-10 bg-no-repeat container mx-auto flex flex-col gap-3 justify-center items-center rounded-md"
    >
      <h1 className="text-white text-center font-space-grotesk font-semibold text-lg lg:text-2xl">
        Multichain Support
      </h1>
      <img src={BrandLogos} />
    </div>
  );
};

export default Banner;

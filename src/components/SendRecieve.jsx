import { transactionImage } from '../assets/assets';
import TextImageCard from './TextImageCard';

const list = [{}, {}];
const SendRecieve = () => {
  return (
    <div
      style={{ backgroundImage: 'url(/Frame.png)' }}
      className="bg-center bg-cover bg-no-repeat lg:h-[700px] p-0"
    >
      <div className="bg-[#000000b9] lg:h-[700px] p-3 flex items-center">
        <TextImageCard
          image={transactionImage}
          darkColor={true}
          flexReverse={true}
          list={list}
        />
      </div>
    </div>
  );
};

export default SendRecieve;

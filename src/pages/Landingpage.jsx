import Card from '../components/Card';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

const Landingpage = () => {
  return (
    <>
      <NavBar />
      <Card>
        <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left md:mx-auto lg:items-center min-h-screen w-full md:w-3/4">
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
      <Footer />
    </>
  );
};

export default Landingpage;

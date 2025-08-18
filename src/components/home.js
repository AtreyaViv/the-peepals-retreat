import SlideShow from './slideShow';
import HotelInfoSection from './hotelInfoSection';
import Testimonial from './testimonial';
import ExecutiveRoom from './executiveRoom';
import BanquetLawn from './banquetLawn';

const Home = () => {
  return (
    <div>
      <SlideShow />
      <HotelInfoSection />

      {/* Testimonial + Rooms & Lawn Section */}
      <div className="flex flex-col lg:flex-row w-full gap-5 py-5 px-0 items-stretch">
        
        {/* Left Section - Testimonial */}
        <div className="lg:w-1/3 flex">
          <div className="flex-1 flex">
            <Testimonial className="flex-1 h-full" />
          </div>
        </div>

        {/* Right Section - Executive Room & Banquet Lawn */}
        <div className="lg:w-2/3 flex flex-col gap-5">
          <div className="flex-1 flex">
            <ExecutiveRoom className="flex-1 h-full" />
          </div>
          <div className="flex-1 flex">
            <BanquetLawn className="flex-1 h-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

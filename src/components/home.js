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
            <div className="flex flex-wrap w-full gap-5 py-5 px-0 items-stretch">
                {/* Left Section - Testimonial */}
                <div className="flex-1 min-w-[300px] max-w-[500px] flex">
                    <Testimonial />
                </div>

                {/* Right Section - Executive Room & Banquet Lawn */}
                <div className="flex-[2] min-w-[500px] flex flex-col justify-between gap-5">
                    <ExecutiveRoom />
                    <BanquetLawn />
                </div>
            </div>

        </div>
    );
};

export default Home;
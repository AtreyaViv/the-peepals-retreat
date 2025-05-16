import SlideShow from "./slideShow";
import HotelInfoSection from "./hotelInfoSection";
import Testimonial from "./testimonial";
import ExecutiveRoom from "./executiveRoom";
import BanquetLawn from "./banquetLawn";
import "./Home.css"; 

const Home = () => {
    return (
        <div>
            <SlideShow/>
            <HotelInfoSection />
            <div className="home-container">
                {/* Left section: Testimonials */}
                <div className="left-section">
                    <Testimonial />
                </div>
                
                {/* Right section: Executive Room & Banquet Lawn */}
                <div className="right-section">
                    <ExecutiveRoom />
                    <BanquetLawn />
                </div>
            </div>
        </div>
    )
};

export default Home;


import React from 'react';
import { Link } from 'react-router-dom';
import Room from '../assets/Rooms.png';
import Gallery from '../assets/Gallery.png';
import Amenities from '../assets/Amenities.PNG';
import BanquetLawn from '../assets/BanquetLawn.png';
import "./HotelInfoSection.css";

const HotelInfoSection = () => {
    return (
        <div className="hotel-info-wrapper">
            <div className="hotel-info-container">
                <h2 className="hotel-title">Welcome to The Peepal's Retreat Hotel & Banquet</h2>
                <p className="hotel-subtitle">Comfort | Serenity | Luxury | Greenery</p>
                <div className="hotel-description">
                    <p>T.P.R. is where luxury meets sophistication in the heart of Gomti Nagar Extension.</p>
                    <p>Our spacious banquet hall and beautifully landscaped lawn provide the perfect setting for weddings, corporate events, and special celebrations.</p>
                    <p>With world-class hospitality, modern amenities, and a serene ambiance, we promise an experience like no other.</p>
                    <p>Our staff is dedicated to offering warm, personalized service that makes every guest feel like royalty.</p>
                    <p>Whether you're here for a celebration, a retreat, or a peaceful getaway — we ensure memories that linger long after you leave.</p>
                    <p>Experience unmatched tranquility nestled amidst lush greenery and contemporary elegance.</p>
                    <p>Make your moments memorable with us!</p>
                </div>
            </div>
            <p></p>
            <div className="hotel-features">
                <div className="feature">
                    <img src={Room} alt="Rooms" />
                    <h3>Elegant Accommodations</h3>
                    <p>Enjoy comfort in well-designed rooms with modern lighting, wardrobes, hair dryers, and more.</p>
                    <Link to="/accommodation" className="view-more">VIEW MORE</Link>
                </div>
                <div className="feature">
                    <img src={Amenities} alt="Amenities" />
                    <h3>Amenities That Elevate Your Stay</h3>
                    <p>To ensure a perfect blend of comfort, luxury, and tranquility, we offer a wide range of thoughtfully curated amenities for our guests.
                    </p>
                    <Link to="/services" className="view-more">VIEW MORE</Link>
                </div>
                <div className="feature">
                    <img src={BanquetLawn} alt="Banquet" />
                    <h3>Banquets & Garden</h3>
                    <p>Celebrate in elegant banquet halls or under the open sky in our beautifully landscaped lawn.
                    </p>
                    <Link to="/marriage-package" className="view-more">VIEW MORE</Link>
                </div>
                <div className="feature">
                    <img src={Gallery} alt="Gallery" />
                    <h3>Gallery</h3>
                    <p>Explore our gallery to see the luxurious amenities and beautiful surroundings we offer.
                    </p>
                    <Link to="/gallery" className="view-more">VIEW MORE</Link>
                </div>
            </div>
        </div>
    );
};

export default HotelInfoSection;


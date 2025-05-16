import React from 'react';
import { Link } from 'react-router-dom';
import roomIndex from '../assets/room/roomIndex.jpeg';

const ExecutiveRoom = () => {
    return (
        <div className="executive-room">
            <div className="room-image">
                <img src={roomIndex} alt="Executive Room" />
            </div>
            <div className="room-info">
                <h2>EXECUTIVE ROOM</h2>
                <p>Experience luxury and comfort in our well-furnished executive rooms.</p>
                <Link to="/book-now" className="btn">Book Now</Link>
            </div>
        </div>
    );
};

export default ExecutiveRoom;


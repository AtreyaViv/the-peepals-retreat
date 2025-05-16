import React from "react";
import './RoomTnC.css';

const RoomBookingTnC = () => {
  return (
    <div className="tnc-container">
      {/* Terms & Conditions Section */}
      <h2 className="tnc-heading">TERMS & CONDITIONS</h2>
      <hr className="tnc-divider" />
      <ul className="tnc-list">
        <li>Arogya Setu app mandatory for check-in at the hotel.</li>
        <li>It is mandatory to follow the Covid-19 protocol.</li>
        <li>
          It is mandatory for guests to present valid photo identification at the time of check-in. Local photo ID
          would not be acceptable in any circumstances.
        </li>
        <li>The standard check-in time is 14:00 Hrs and the standard check-out time is 12:00 Hrs.</li>
        <li>Early check-in and late check-out is subject to availability.</li>
        <li>The hotel reserves the right of admission for local residents. Accommodation can be denied to guests residing in the same city.</li>
      </ul>

      {/* Refund & Cancellation Section */}
      <h2 className="tnc-heading">REFUND & CANCELLATION</h2>
      <hr className="tnc-divider" />
      <ul className="tnc-list">
        <li>
          Any cancellation received within 2 days prior (48 hours) to the arrival date will incur the first night charge.
          Failure to arrive at the hotel will be treated as a No-Show and will incur the first night charge.
        </li>
        <li>
          Any amendment or cancellations of group rooms more than five rooms need to be updated 15 days prior to check-in.
          Cancellation is not allowed within 15 days in group bookings. Amendments depend on availability.
        </li>
      </ul>

      {/* Privacy Policy Section */}
      <h2 className="tnc-heading">PRIVACY POLICY</h2>
      <hr className="tnc-divider" />
      <ul className="tnc-list">
        <li>At The Peepal’s Retreat, we endeavor to provide our guests outstanding services and experiences in our hotel.</li>
        <li>
          We recognize that privacy is important to our guests, and hence The Peepal’s Retreat Privacy Policy explains our practices
          regarding personal information we collect when you visit our hotels, restaurants, bars, our website, and when you fill up a form.
        </li>
        <li>
          If we possess your contact information, we may want to keep you posted about our products, services, and events,
          through e-mail. Should you prefer not to keep up to date with The Peepal’s Retreat news and latest information on services
          and receive such marketing materials, please send an e-mail to unsubscribe, to fom@THEPEEPALSRETREAT.COM.
        </li>
      </ul>
    </div>
  );
};

export default RoomBookingTnC;

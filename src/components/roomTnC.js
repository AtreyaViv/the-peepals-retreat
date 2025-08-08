import React from "react";

const RoomBookingTnC = () => {
  const sectionStyle = "mb-10";
  const headingStyle = "text-lg sm:text-xl font-bold mb-2";
  const dividerStyle = "w-full border border-gray-300 mb-4";
  const listItemStyle =
    "relative pl-5 mb-3 before:content-['▶'] before:absolute before:left-0 before:top-0.5 before:text-xs before:text-[#D7BC77]";

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-10 font-sans text-gray-800 leading-relaxed text-left text-sm sm:text-base">
      {/* Terms & Conditions Section */}
      <div className={sectionStyle}>
        <h2 className={headingStyle}>TERMS & CONDITIONS</h2>
        <hr className={dividerStyle} />
        <ul className="list-none pl-0">
          <li className={listItemStyle}>Arogya Setu app mandatory for check-in at the hotel.</li>
          <li className={listItemStyle}>It is mandatory to follow the Covid-19 protocol.</li>
          <li className={listItemStyle}>
            It is mandatory for guests to present valid photo identification at the time of check-in.
          </li>
          <li className={listItemStyle}>The standard check-in time is 11:00 Hrs and the standard check-out time is 11:00 Hrs.</li>
          <li className={listItemStyle}>
            Early check-in and late check-out are subject to availability and may incur additional charges.
          </li>
          <li className={listItemStyle}>
            The hotel reserves the right of admission for local residents. Accommodation can be denied to guests residing in the same
            city.
          </li>
        </ul>
      </div>

      {/* Refund & Cancellation Section */}
      <div className={sectionStyle}>
        <h2 className={headingStyle}>REFUND & CANCELLATION</h2>
        <hr className={dividerStyle} />
        <ul className="list-none pl-0">
          <li className={listItemStyle}>
            Any cancellation received within 2 days prior (48 hours) to the arrival date will incur the first night charge. Failure
            to arrive at the hotel will be treated as a No-Show and will incur the first night charge.
          </li>
        </ul>
      </div>

      {/* Privacy Policy Section */}
      <div className={sectionStyle}>
        <h2 className={headingStyle}>PRIVACY POLICY</h2>
        <hr className={dividerStyle} />
        <ul className="list-none pl-0">
          <li className={listItemStyle}>
            At The Peepal’s Retreat, we endeavor to provide our guests outstanding services and experiences in our hotel.
          </li>
          <li className={listItemStyle}>
            We recognize that privacy is important to our guests, and hence The Peepal’s Retreat Privacy Policy explains our
            practices regarding personal information we collect when you visit our hotels, restaurants, our website, and when
            you fill up a form.
          </li>
          <li className={listItemStyle}>
            If we possess your contact information, we may want to keep you posted about our products, services, and events,
            through e-mail. Should you prefer not to keep up to date with The Peepal’s Retreat news and latest information on
            services and receive such marketing materials, please send an e-mail to unsubscribe, to fom@THEPEEPALSRETREAT.COM.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RoomBookingTnC;

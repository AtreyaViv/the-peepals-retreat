import React from "react";

const MarriageTermsConditions = () => {
  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-10 font-sans text-[#2A4630] text-sm sm:text-base leading-relaxed">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 text-left">TERMS & CONDITIONS</h2>
      <hr className="border border-gray-300 mb-6" />
      <ul className="list-none pl-0 space-y-3">
        {[
          "30% token advance at the time of booking (non-refundable), next 40% 60 days and remaining 30% 30 days before the function is required.",
          "Starters will be served for 90 minutes only from the start of the function.",
          "Food will be served till 23:00 hours only.",
          "As per government regulations, music will be allowed till 22:00 hours only. All necessary licenses for entertainment (PPL/IPRS/NOVEX) to be obtained by guests only and submitted to the hotel 24 hours prior to the start of the function.",
          "We cater up to 10% above the minimum guaranteed persons. Any increase beyond would be charged additional @ 299+ taxes per person over the agreed minimum number of persons.",
          "Any change in the menu or number of guaranteed persons or number of rooms must be informed 15 days prior to the function in writing.",
          "Hall timing will be strictly monitored. INR 4500 per hour will be charged additionally for any delay in vacating the hall/space.",
          "Cancellation Policy: Advance will not be refunded on cancellation of booking.",
          "Packaged drinking water will be charged @MRP per person.",
          "All payment must be done only by Cheque/CC/DD. Cash payment will be accepted only with a valid PAN Card & ADHAAR Card. Cheque will be accepted 32 days before the function.",
          "All rates are exclusive of GST.",
          "Guest must ensure that no firearms are brought into the hotel by self or invitees.",
          "Fireworks of any kind will not be permitted in the hotel premises.",
          "For guests staying at the hotel, it is mandatory to present a valid photo identification for check-in.",
          "Hotel shall not be responsible or liable in any way for loss of any personal belongings.",
          "Right of admission reserved.",
          "Any litigations are subjected to Lucknow jurisdiction only.",
          "Evening Function will start after 7:30 PM only.",
          "For Lunch Function Hall / Venue timing is 11 AM to 4 PM & for Dinner Function Hall / Venue timing is 7:30 PM to 11:30 PM.",
          "For Marriage Function the Mandap / Venue timing is 11 PM to 4 AM only.",
        ].map((item, index) => (
          <li
            key={index}
            className="relative pl-6 before:content-['▶'] before:absolute before:left-0 before:top-0.5 before:text-[#D7BC77] before:text-xs"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarriageTermsConditions;

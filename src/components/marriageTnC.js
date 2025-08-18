import React, { useState } from "react";

const MarriageTermsConditions = () => {
  const [isHindi, setIsHindi] = useState(false);

  const heading = {
    en: "TERMS & CONDITIONS",
    hi: "नियम एवं शर्तें",
  };

  const terms = {
    en: [
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
    ],
    hi: [
      "बुकिंग के समय 30% टोकन एडवांस (नॉन-रिफंडेबल), अगले 40% 60 दिन पहले और शेष 30% 30 दिन पहले जमा करना आवश्यक है।",
      "स्टार्टर्स केवल कार्यक्रम शुरू होने के 90 मिनट तक परोसे जाएंगे।",
      "भोजन केवल रात 11:00 बजे तक परोसा जाएगा।",
      "सरकारी नियमों के अनुसार, संगीत केवल रात 10:00 बजे तक ही बजाया जा सकेगा। सभी आवश्यक मनोरंजन लाइसेंस (PPL/IPRS/NOVEX) मेहमान द्वारा ही प्राप्त कर होटल को कार्यक्रम से 24 घंटे पहले उपलब्ध कराना होगा।",
      "हम न्यूनतम गारंटीड व्यक्तियों से 10% अधिक तक के मेहमानों को सेवा देते हैं। इससे अधिक होने पर प्रति व्यक्ति ₹299 + टैक्स अतिरिक्त लिया जाएगा।",
      "मेन्यू, गारंटीड व्यक्तियों की संख्या या कमरों की संख्या में कोई भी बदलाव कार्यक्रम से 15 दिन पहले लिखित रूप में सूचित करना होगा।",
      "हॉल का समय सख्ती से मॉनिटर किया जाएगा। समय से अधिक होने पर प्रति घंटा ₹4500 अतिरिक्त शुल्क लिया जाएगा।",
      "रद्दीकरण नीति: एडवांस रिफंड नहीं किया जाएगा।",
      "पैकेज्ड ड्रिंकिंग वॉटर एमआरपी पर चार्ज किया जाएगा।",
      "सभी भुगतान केवल चेक/सीसी/डीडी द्वारा ही किए जाएंगे। नकद भुगतान केवल वैध पैन कार्ड और आधार कार्ड के साथ स्वीकार किया जाएगा। चेक कार्यक्रम से 32 दिन पहले ही स्वीकार किए जाएंगे।",
      "सभी दरें जीएसटी से अलग हैं।",
      "मेहमान यह सुनिश्चित करें कि स्वयं या आमंत्रित अतिथि कोई भी हथियार होटल में न लाएं।",
      "होटल परिसर में किसी भी प्रकार के पटाखे की अनुमति नहीं है।",
      "होटल में ठहरने वाले मेहमानों को चेक-इन के समय वैध फोटो पहचान पत्र प्रस्तुत करना अनिवार्य है।",
      "होटल किसी भी व्यक्तिगत सामान के नुकसान के लिए जिम्मेदार नहीं होगा।",
      "प्रवेश का अधिकार सुरक्षित है।",
      "सभी विवाद लखनऊ न्यायालय क्षेत्राधिकार में होंगे।",
      "संध्या कार्यक्रम केवल शाम 7:30 बजे के बाद ही प्रारंभ होंगे।",
      "दोपहर के कार्यक्रम का हॉल समय सुबह 11 बजे से दोपहर 4 बजे तक और रात के कार्यक्रम का हॉल समय शाम 7:30 बजे से रात 11:30 बजे तक है।",
      "विवाह कार्यक्रम के लिए मंडप/स्थल का समय रात 11 बजे से सुबह 4 बजे तक है।",
    ],
  };

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-10 font-sans text-[#2A4630] text-sm sm:text-base leading-relaxed">
      {/* Heading + Toggle */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl sm:text-2xl font-bold">{isHindi ? heading.hi : heading.en}</h2>

        {/* Language Toggle */}
        <div
          className="flex items-center bg-[#D7BC77] rounded-full px-1 py-1 cursor-pointer"
          onClick={() => setIsHindi((prev) => !prev)}
        >
          <span
            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
              !isHindi ? "bg-white text-[#2A4630]" : "text-white"
            }`}
          >
            ENGLISH
          </span>
          <span
            className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
              isHindi ? "bg-white text-[#2A4630]" : "text-white"
            }`}
          >
            हिन्दी
          </span>
        </div>
      </div>

      <hr className="border border-gray-300 mb-6" />

      <ul className="list-none pl-0 space-y-3">
        {(isHindi ? terms.hi : terms.en).map((item, index) => (
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

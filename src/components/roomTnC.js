import React, { useState } from "react";

const RoomBookingTnC = () => {
  const sectionStyle = "mb-10";
  const headingStyle = "text-lg sm:text-xl font-bold mb-2 flex items-center justify-between";
  const dividerStyle = "w-full border border-gray-300 mb-4";
  const listItemStyle =
    "relative pl-5 mb-3 before:content-['▶'] before:absolute before:left-0 before:top-0.5 before:text-xs before:text-[#D7BC77]";

  // Language states for each section
  const [langTerms, setLangTerms] = useState("en");
  const [langRefund, setLangRefund] = useState("en");
  const [langPrivacy, setLangPrivacy] = useState("en");

// Reusable slider toggle - Matching MarriageTnC style
const LangToggle = ({ lang, setLang }) => (
  <div
    className="flex items-center bg-[#D7BC77] rounded-full px-1 py-1 cursor-pointer"
    onClick={() => setLang(lang === "en" ? "hi" : "en")}
  >
    <span
      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
        lang === "en" ? "bg-white text-[#2A4630]" : "text-white"
      }`}
    >
      ENGLISH
    </span>
    <span
      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
        lang === "hi" ? "bg-white text-[#2A4630]" : "text-white"
      }`}
    >
      हिन्दी
    </span>
  </div>
);


  // English & Hindi data
  const termsData = {
    en: [
      "Arogya Setu app mandatory for check-in at the hotel.",
      "It is mandatory to follow the Covid-19 protocol.",
      "It is mandatory for guests to present valid photo identification at the time of check-in.",
      "The standard check-in time is 11:00 Hrs and the standard check-out time is 11:00 Hrs.",
      "Early check-in and late check-out are subject to availability and may incur additional charges.",
      "The hotel reserves the right of admission for local residents. Accommodation can be denied to guests residing in the same city.",
    ],
    hi: [
      "होटल में चेक-इन के लिए आरोग्य सेतु ऐप अनिवार्य है।",
      "कोविड-19 प्रोटोकॉल का पालन करना अनिवार्य है।",
      "चेक-इन के समय मेहमानों को वैध फोटो पहचान पत्र प्रस्तुत करना अनिवार्य है।",
      "मानक चेक-इन समय सुबह 11:00 बजे और मानक चेक-आउट समय सुबह 11:00 बजे है।",
      "अर्ली चेक-इन और लेट चेक-आउट उपलब्धता के आधार पर होंगे और अतिरिक्त शुल्क लग सकते हैं।",
      "होटल स्थानीय निवासियों के प्रवेश का अधिकार सुरक्षित रखता है। एक ही शहर में रहने वाले मेहमानों को ठहरने से मना किया जा सकता है।",
    ],
  };

  const refundData = {
    en: [
      "Any cancellation received within 2 days prior (48 hours) to the arrival date will incur the first night charge. Failure to arrive at the hotel will be treated as a No-Show and will incur the first night charge.",
    ],
    hi: [
      "आगमन तिथि से 2 दिन (48 घंटे) पहले की गई किसी भी रद्दीकरण पर पहले दिन का शुल्क लिया जाएगा। होटल में समय पर न पहुंचने की स्थिति में इसे नो-शो माना जाएगा और पहले दिन का शुल्क लिया जाएगा।",
    ],
  };

  const privacyData = {
    en: [
      "At The Peepal’s Retreat, we endeavor to provide our guests outstanding services and experiences in our hotel.",
      "We recognize that privacy is important to our guests, and hence The Peepal’s Retreat Privacy Policy explains our practices regarding personal information we collect when you visit our hotels, restaurants, our website, and when you fill up a form.",
      "If we possess your contact information, we may want to keep you posted about our products, services, and events, through e-mail. Should you prefer not to keep up to date with The Peepal’s Retreat news and latest information on services and receive such marketing materials, please send an e-mail to unsubscribe, to fom@THEPEEPALSRETREAT.COM.",
    ],
    hi: [
      "द पीपल्स रिट्रीट में, हम अपने मेहमानों को उत्कृष्ट सेवाएं और अनुभव प्रदान करने का प्रयास करते हैं।",
      "हम मानते हैं कि हमारे मेहमानों के लिए गोपनीयता महत्वपूर्ण है, इसलिए द पीपल्स रिट्रीट की गोपनीयता नीति यह बताती है कि जब आप हमारे होटल, रेस्टोरेंट, वेबसाइट पर आते हैं या कोई फॉर्म भरते हैं, तो हम आपकी व्यक्तिगत जानकारी के साथ कैसा व्यवहार करते हैं।",
      "यदि हमारे पास आपका संपर्क विवरण है, तो हम आपको अपने उत्पादों, सेवाओं और आयोजनों के बारे में ईमेल के माध्यम से सूचित करते रहना चाहेंगे। यदि आप द पीपल्स रिट्रीट की ताज़ा जानकारी और सेवाओं से संबंधित समाचार प्राप्त नहीं करना चाहते हैं, तो कृपया fom@THEPEEPALSRETREAT.COM पर अनसब्सक्राइब करने के लिए ईमेल भेजें।",
    ],
  };

  return (
    <div className="w-[90%] sm:w-[80%] mx-auto my-10 font-sans text-gray-800 leading-relaxed text-left text-sm sm:text-base">
      
      {/* Terms & Conditions */}
      <div className={sectionStyle}>
        <div className={headingStyle}>
          <span>TERMS & CONDITIONS</span>
          <LangToggle lang={langTerms} setLang={setLangTerms} />
        </div>
        <hr className={dividerStyle} />
        <ul className="list-none pl-0">
          {termsData[langTerms].map((item, i) => (
            <li key={i} className={listItemStyle}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Refund & Cancellation */}
      <div className={sectionStyle}>
        <div className={headingStyle}>
          <span>REFUND & CANCELLATION</span>
          <LangToggle lang={langRefund} setLang={setLangRefund} />
        </div>
        <hr className={dividerStyle} />
        <ul className="list-none pl-0">
          {refundData[langRefund].map((item, i) => (
            <li key={i} className={listItemStyle}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Privacy Policy */}
      <div className={sectionStyle}>
        <div className={headingStyle}>
          <span>PRIVACY POLICY</span>
          <LangToggle lang={langPrivacy} setLang={setLangPrivacy} />
        </div>
        <hr className={dividerStyle} />
        <ul className="list-none pl-0">
          {privacyData[langPrivacy].map((item, i) => (
            <li key={i} className={listItemStyle}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoomBookingTnC;

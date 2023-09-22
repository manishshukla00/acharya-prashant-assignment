import React from "react";
import { BiLogoFacebook, BiLogoTwitter } from "react-icons/bi";
import { FaYoutube, FaWikipediaW, } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import Img1 from '../assets/play.png'
import Img2 from '../assets/apple.png'

const Footer = () => {
  return (
    <>
      <div className="w-full h-auto flex flex-col bg-slate-900 p-4">
        <div className="w-full grid md:grid-cols-6 p-4 gap-4">
          <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold">LIVE EVENTS</h1>
            <span>Bhagvad Gita</span>
            <span>Sant Sarita</span>
            <span>Ashtavakra Samhita</span>
            <span>Bodh Pratyusha</span>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold">WISDOM CONTENT</h1>
            <span>Video Series</span>
            <span>AP Books</span>
            <span>AP Articles</span>
            <span>AP Circle</span>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold">MORE</h1>
            <span>About Acharya Prashant</span>
            <span>Invite Him</span>
            <span>Interview Him</span>
            <span>Ghar Ghar Upanishad</span>
            <span>Media and Public Interaction</span>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold">SOCIAL MEDIA</h1>
             <h2>For English</h2>
             <div className="text-2xl flex gap-2"><FaYoutube />
             <BiLogoTwitter />
             <BiLogoFacebook />
             <AiOutlineInstagram />
             <FaWikipediaW />
             </div>
             <h2>For Hindi</h2>
             <div className="text-2xl flex gap-2"><FaYoutube />
             <BiLogoTwitter />
             <BiLogoFacebook />
             <AiOutlineInstagram />
             <FaWikipediaW />
             </div>
            </div>
          <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold">DOWNLOAD ACHARYA PRASHANT APP</h1>
            <div className="flex items-center">
            <img src={Img1} alt="Get it on Google Play" className="w-[100px] h-[100px]" />
            <img src={Img2} alt="Get it on Google Play" className="w-[100px] h-[40px]" />
            </div>
          </div>
          <div className="text-white flex flex-col gap-2">
            <h1 className="font-bold">CONTACT US</h1>
            <span>support@advait.org.in</span>
            <span>+91 9650585100</span>
            <span>+91 9650585100</span>
            <button className="w-[50%] md:w-full border border-white rounded-lg py-1">Fill Form to Connect</button>
          </div>
        </div>
        <div className="w-[650px] h-auto flex flex-col md:flex-row md:items-center md:justify-center text-sm text-white m-auto mt-8 md:p-8 p-4 border-t border-slate-200 gap-8">
          <p>Copyright © 2022 PrashantAdvait Foundation</p>
          <p>Terms & Conditions | Privacy Policy</p>
        </div>
      </div>
    </>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'

const Faq= () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const[faq, setFaq] = useState([]);

  const toggleMenu = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const FaqData = async() => {
    await axios
    .get('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=english')
    .then((response) => {
      setFaq(response.data);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Axios error:", error);
    });
}

useEffect(() => {
  FaqData();
},[])

  return (
    <div className="w-full md:m-8 p-4 flex flex-col md:flex-row gap-8">
        <div className='w-[30%]'>
            <h2>FAQs</h2>
            <p>Can’t find the answer you’re looking for? Reach out to our <span className='text-orange-400'>support</span> team</p>
        </div>
        <div className='w-[70%] p-2'>
      {faq.map((item, index) => (
        <div key={index} className="border-t border-gray-300 py-2">
          <button
            onClick={() => toggleMenu(index)}
            className="flex justify-between items-center w-full p-2 focus:outline-none"
          >
            <span className="text-lg font-semibold">{item.question}</span>
            <span className={activeIndex === index ? 'rotate-0' : 'rotate-180'}>
            <MdOutlineKeyboardArrowUp size={20} />
            </span>
          </button>
          <div
            className={`${
              activeIndex === index ? 'max-h-40' : 'max-h-0 overflow-hidden'
            } transition-all duration-300 ease-in-out`}
          >
             <div className='h-[80px]  overflow-y-scroll md:overflow-hidden'>
            <p className="mt-2 mx-2">{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Faq;

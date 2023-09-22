import React, { useState } from "react";

const Videos = ({ courses }) => {
  console.log(courses);
  return (
    <>
      <h2 className="p-4 border-y">Video Series (8)</h2>
      <div className="w-full h-auto grid md:grid-cols-3 p-4 gap-4">
      {courses && courses.map((elem, i) => {
            return (
              <>
               <div key={elem.id} className="flex flex-col justify-center border-y hover:bg-slate-100 hover:cursor-pointer rounded-lg">
                <span className="w-[60px] my-2 py-1 text-white text-center bg-slate-400 border-l border-y rounded-lg">part { i+1 }</span>
                <h2>{elem.title}</h2>
                <h3>{elem.subtitle}</h3>
                <p>{elem.courseHours} hours</p>
                <span>Contriution: {elem.amount} <span className="line-through">{elem.originalAmount}</span></span>
                <span>hindi</span>
                <span className="text-orange-400 hover:text-orange-800">ADD TO CART | ENROL</span>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Videos;

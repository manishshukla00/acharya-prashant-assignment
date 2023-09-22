import React, { useState } from "react";

const Series = ({ content }) => {
  console.log(content);
  return (
    <>
      <h2 className="m-4">Other Helpfull Video Series</h2>
      <div className="w-full grid md:grid-cols-2 px-4">
          {
           content && content.map((elem, i) => {
            console.log(elem.thumbnail.id);
              return (
                <>
              <div className="flex gap-4 hover:bg-gray-100 rounded-lg">
              <img
                class="w-[200px] h-[121px] object-cover my-2"
                src={`${elem.thumbnail.domain}/images/${elem.thumbnail.id}/10/image.jpg`}
                alt="Thumbnail"
              />
              <div className="flex flex-col">
                <h2 className="my-2">{elem.title}</h2>
                <p>{elem.subtitle}</p>
                <span>{elem.coursesCount} video series</span>
              </div>
            </div>
            </>
            )})
          }
      </div>
    </>
  );
};

export default Series;

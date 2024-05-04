import React from "react";
import { discover, discoverActions } from "../../data";

const Discover = () => {
  return (
    <div className="sticky top-[6rem]">
      <div className="border-b border-gray-300 pb-7">
        <h2 className="font-semibold">Discover more of what matters to you</h2>

        <div className="my-2 flex items-center gap-3 flex-wrap">
          {discover.map((item, i) => (
            <button
              key={i}
              className="bg-gray-100 py-2 px-4 rounded-full text-sm"
            >
              {item}
            </button>
          ))}
        </div>

        <button className="text-sm text-green-800 py-3 hover:text-black1">
          See more topics
        </button>
      </div>

      <div className="flex items-center flex-wrap gap-5 leading-3 pt-8">
        {discoverActions.map((item, i) => (
          <button className="text-sm text-gray-600">{item}</button>
        ))}
      </div>
    </div>
  );
};

export default Discover;

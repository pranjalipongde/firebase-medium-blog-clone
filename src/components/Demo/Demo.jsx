import React from "react";
import Banner from "./Banner";
import Trending from "./Trending";
import Post from "../common/posts/Post";
import Discover from "./Discover";

const Demo = () => {
  return (
    <main>
      <Banner />
      <Trending />

      <div className="size py-7 flex flex-col-reverse md:flex-row gap-[7rem]">
        <div className="flex-[1.5]">
          <Post />
        </div>
        <div className="flex-[1] relative">
          <Discover />
        </div>
      </div>
    </main>
  );
};

export default Demo;

// import { useState } from "react";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <div className="mt-10 px-20">
      <h1 className="text-4xl font-bold text-center">My Stories</h1>
      {/* <div className="flex justify-center my-10">
        <input
          type="text"
          placeholder="Search Story"
          className="px-3 border-2 border-black rounded-md py-2 w-[400px]"
        />
      </div> */}
      <Stories />
    </div>
  );
};

export default Home;

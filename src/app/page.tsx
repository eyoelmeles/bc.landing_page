import Wrapper from "@/layout/wrapper";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-stretch gap-16">
      <Wrapper>
        <section className="flex flex-1 flex-col items-center gap-8 text-center">
          <h1 className="text-4xl">Manage Construction with breath</h1>
          <div className="w-8/12 h-64 bg-blue-50" />
        </section>
      </Wrapper>
      <section className="bg-gray-50 p-4 md:py-64 ">
        <Wrapper>
          <div className="flex flex-col gap-24">
            <div className="flex flex-1 flex-col md:flex-row items-start gap-4 md:gap-8 md:justify-between">
              <div className="w-full">
                <h1 className="text-3xl font-semibold">
                  Manage Construction with breath 1
                </h1>
                <p className="">
                  Manage Construction with breath, Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Neque facere error eius illum ut
                  quod modi perferendis. Aut, nemo facilis.
                </p>
              </div>
              <div className="w-full h-64 bg-red-200" />
            </div>
            <div className="flex flex-1 flex-col md:flex-row items-start gap-4 md:gap-8 md:justify-between">
              <div className="w-full">
                <h1 className="text-3xl font-semibold">
                  Manage Construction with breath
                </h1>
                <p className="">
                  Manage Construction with breath, Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Neque facere error eius illum ut
                  quod modi perferendis. Aut, nemo facilis.
                </p>
              </div>
              <div className="w-full md:order-last h-64 bg-red-200" />
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Home;

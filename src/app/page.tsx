import Wrapper from "@/layout/wrapper";
import { Button } from "@headlessui/react";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col items-stretch gap-16">
      <Wrapper>
        <section className="flex flex-1 flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold w-10/12 md:w-8/12 lg:w-6/12 m-auto">
            A Smart and Effective Way for Construction Time and Cost Management
          </h1>
          <div className="w-8/12 h-64 bg-blue-50" />
          <div className="text-white bg-black p-4 rounded-md">
            <p>Get Started</p>
          </div>
        </section>
      </Wrapper>
      <section>
        <div className="w-full h-32 bg-red-200 flex flex-1 justify-center p-2">
          <p className="text-black text-2xl font-bold">Trusted by</p>
        </div>
      </section>
      <section className="bg-gray-50 p-4 md:py-64 ">
        <Wrapper>
          <div className="flex flex-col gap-24">
            <div className="flex flex-1 flex-col md:flex-row items-start gap-4 md:gap-8 md:justify-between">
              <div className="w-full flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">About</h1>
                <p className="">
                  Manage Construction with breath, Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Neque facere error eius illum ut
                  quod modi perferendis. Aut, nemo facilis.
                </p>
              </div>
              <div className="w-full h-64 bg-red-200" />
            </div>
            <div className="flex flex-1 flex-col md:flex-row items-start gap-4 md:gap-8 md:justify-between">
              <div className="w-full flex flex-col gap-4">
                <h1 className="text-3xl font-semibold">
                  Manage Construction with breath
                </h1>
                <p className="">
                  Manage Construction with breath, Lorem, ipsum dolor sit amet
                  consectetur adipisicing elit. Neque facere error eius illum ut
                  quod modi perferendis. Aut, nemo facilis.
                </p>
              </div>
              <div className="w-full md:order-first h-64 bg-red-200" />
            </div>
          </div>
        </Wrapper>
      </section>
      <section className=" p-4 md:py-64">
        <Wrapper>
          <div className="flex flex-1 flex-col md:flex-row items-start gap-4 md:gap-8 md:justify-between">
            <div className="w-full flex flex-col gap-4">
              <p className="text-sm text-blue-900 font-semibold">
                Mobile Application
              </p>
              <p className="text-3xl font-semibold">
                Mobile Devices for On Site Operations
              </p>
              <p className="">
                Manage Construction with breath, Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Neque facere error eius illum ut
                quod modi perferendis. Aut, nemo facilis.
              </p>
              <ul className="">
                <li>* Daily Reports</li>
                <li>* Material and Equipment Managements</li>
                <li>* File Management</li>
              </ul>
            </div>
            <div className="w-full md:order-first h-64 bg-red-200" />
          </div>
        </Wrapper>
      </section>
      <section className="bg-gray-50 p-4 md:py-64">
        <Wrapper>
          <div className="flex flex-1 flex-col md:flex-row items-start gap-4 md:gap-8 md:justify-between">
            <div className="w-full flex flex-col gap-4">
              <p className="text-sm text-blue-900 font-semibold">
                Powerful Analysis
              </p>
              <p className="text-3xl font-semibold">Unleashing Data Power</p>
              <p className="">
                Manage Construction with breath, Lorem, ipsum dolor sit amet
                consectetur adipisicing elit. Neque facere error eius illum ut
                quod modi perferendis. Aut, nemo facilis.
              </p>
              <ul className="">
                <li>* Daily Reports</li>
                <li>* Material and Equipment Managements</li>
                <li>* File Management</li>
              </ul>
            </div>
            <div className="w-full md:order-last h-64 bg-red-200" />
          </div>
          <div>
            <div className="w-full flex justify-between py-16">
              <div>
                <p className="text-sm text-blue-900 font-semibold">
                  01. Powerful Analysis
                </p>
                <p className="text-md">Unleashing Data Power</p>
              </div>
              <div>
                <p className="text-sm text-blue-900 font-semibold">
                  02. Powerful Analysis
                </p>
                <p className="text-md">Unleashing Data Power</p>
              </div>
              <div>
                <p className="text-sm text-blue-900 font-semibold">
                  03. Powerful Analysis
                </p>
                <p className="text-md">Unleashing Data Power</p>
              </div>
              <div>
                <p className="text-sm text-blue-900 font-semibold">
                  0.4 Powerful Analysis
                </p>
                <p className="text-md">Unleashing Data Power</p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
      <section className="p4 md:py-64">
        <Wrapper>
          <div className="flex flex-1 flex-col md:flex-row items-center gap-4 md:gap-8 md:justify-evenly">
            <div className="w-full flex flex-col gap-4 md:w-6/12">
              <h1 className="text-4xl font-bold">
                Contact Us and Start Documenting Your Site in the most efficient
                way
              </h1>
              <p className="text-sm text-blue-900 font-semibold">
                0.4 Powerful Analysis
              </p>
            </div>
            <div className="text-white bg-black p-4 rounded-md">
              <p>Contact US</p>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Home;

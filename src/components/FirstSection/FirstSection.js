import React, { Fragment } from "react";
import { offerData } from "../../Data/data";

const FirstSection = () => {
  return (
    <Fragment>
      <section className="max-w-[1200px] mx-auto py-5 bg-gradient-to-r from-[#682381] to-[#2e1e4d]">
        <div className="flex items-center gap-x-5 py-10 pr-28 pl-14">
          <div className="text-white ">
            <h1 className="text-2xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
            <p className="text-xl pt-5 pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias fugiat eaque voluptatum.
            </p>

            <div className="border-dashed border-[1.8px] border-b-[1px] border-white max-w-md">
                <div class="relative rounded-md ">
                  <h2 class="absolute flex top-0 left-24 transform -translate-x-1/2 -translate-y-1/2">
                    <span class="bg-white text-red-400 font-semibold uppercase px-5 py-1">What we offer</span>
                  </h2>
                </div>
              <div className="py-5 pl-4">
                {offerData.map((offer) => (
                  <div key={offer.id} className="flex justify-start items-center space-x-3">
                    <div className="rounded-full flex p-2 justify-center items-center relative bg-white my-3">
                      <span className="text-2xl font-bold absolute"></span>
                    </div>
                    <h4 className="flex justify-center items-center">{offer.des}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>

          <div class="block p-6 py-16 rounded-lg shadow-lg bg-white max-w-sm">
              <form>
                <h1 className="font-semibold">Personal Details</h1>

                <div class="relative rounded-md">
                        <h2 class="absolute flex top-0 left-7 transform -translate-x-1/2 -translate-y-1/2">
                          <span class="bg-white px-1 text-[9px]">Name</span>
                        </h2>
                   </div>

                <div class="form-group mb-6">

                  <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-b-[1px] border-l-0 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#682381] focus:outline-none" id="exampleInput90" placeholder="Saniyo Joseph"/>

                </div>
           
                      <div class="relative rounded-md">
                        <h2 class="absolute flex top-0 left-12 transform -translate-x-1/2 -translate-y-1/2">
                          <span class="bg-white px-1 text-[9px]">Mobile Number</span>
                        </h2>
                   </div>

                <div class="form-group mb-6">
                  <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border-2 border-b-[1px] border-l-0 border-gray-400 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#682381] focus:outline-none" id="exampleInput91" placeholder="8277357248"/>
                </div>

                <div class="form-group mb-6">
                <div class="flex justify-center">
              <div class="mb-3 xl:w-96">
                <select class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#682381] focus:outline-none" aria-label="Default select example">
                    <option selected>Select City</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
              </div>
            </div>
                </div>

                <button type="submit" class="w-full px-6 py-2.5 bg-[#da2128] text-white font-mediumtext-xs leading-tight uppercase rounded shadow-md ">Continue</button>
              </form>
          </div>
          
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FirstSection;

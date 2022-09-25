import React, { Fragment } from 'react';
import { numberOfData } from '../../Data/data';

const ThirdSection = () => {

  return (
    <Fragment>
      <section className='bg-[#f4f7fd] max-w-[1200px] mx-auto pt-5 mb-20'>
            <h1 className='text-2xl text-center font-semibold'>Lorem ipsum dolor sit amet</h1>
            <h3 className='text-center py-7'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere temporibus totam suscipit</h3>

            <div className='grid  md:grid-cols-2 gap-8 pb-20'>
                  {
                    numberOfData.map(data => 
                    <div key={data.id}>
                          <div>
                            <div className='flex items-center justify-center  space-x-5' >


                              <div className='rounded-full flex p-7 justify-center items-center shadow-md relative bg-white'>
                              <span className='text-2xl font-bold absolute'>{data.number}</span>
                              </div>


                              <h1 className='text-xl font-semibold'>{data.des}</h1>
                            </div>
                            </div>
                    </div>)
                  }
            </div>
      </section>
    </Fragment>
  );
};

export default ThirdSection;
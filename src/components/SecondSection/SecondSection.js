import React, { Fragment } from 'react';
import scooterBike from '../../assets/image/scooterBike.png'

const SecondSection = () => {
  return (
    <Fragment>
      <section className="py-5 max-w-screen-lg mx-auto ">
      <div className="py-10">
        
          <div className="flex flex-col-reverse items-center xl:flex-row-reverse gap-x-16 pt-8">

            <div className="flex-1">
              <img
                className="object-cover h-full w-[500px] md:mx-auto lg:mx-0 rounded-2xl"
                src={scooterBike}
                alt="scooterBike"
              />
            </div>

            <div className="flex-1 flex flex-col items-center lg:items-start lg:text-left">
              <div className="flex flex-col">
                <h1 className='text-[15px] font-semibold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                <p className='pt-4 pb-12 text-[14px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque earum culpa voluptate, fugiat neque rem porro ad iusto</p>

                <h1 className='text-[15px] font-semibold'>Lorem Ipsum</h1>
                <p className='py-4 text-[12px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam saepe tempora veritatis laudantium optio impedit obcaecati asperiores, vel et, aliquid ea, temporibus natus ipsum recusandae in? Distinctio facere libero necessitatibus dolorum sunt doloremque dicta, nam magni itaque velit pari</p>

                <p className=' text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, excepturi eveniet minima ipsa quod omnis delectus minus quas beatae, facere iste velit enim. Amet commodi ratione ad doloribus eligendi autem, voluptas est in repudiandae tempora vel impedit natus incidunt </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default SecondSection;
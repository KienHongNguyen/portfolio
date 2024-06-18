import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

const Clients = () => {
  return (
    <div className='py-0' id='testimonials'>
      <h1 className='heading'>
        Kind words from <span className='text-purple'>satified clients</span>
      </h1>
      <div className='flex flex-col items-center my-10 p-4 md:my-20'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed='slow'
        />

        <div className='flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 mt-10'>
          {companies.map(({ id, img, name, nameImg }) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img src={img} alt={name} className='md:w-10 w-5' />
              <img src={nameImg} alt={name} className='md:w-24 w-20' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;

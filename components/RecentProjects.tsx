"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className='py-20' id='projects'>
      <h1 className='heading'>
        A small selection of{" "}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 md:gap-y-0 gap-y-4 mt-10 md:mt-0'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className='sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]'
          >
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hiddensm:h-[40vh] h-[30vh] mb-10'>
                <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-{#13162d]'>
                  <Image
                    src='/bg.png'
                    alt='bg-img'
                    width={0}
                    height={0}
                    className='w-full h-auto'
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  width={0}
                  height={0}
                  className='w-[70%] h-auto absolute bottom-0 z-10 '
                />
              </div>
              <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                {title}
              </h1>

              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>

              <div className='flex items-center justify-between mt-7 mb-3'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * index * 2} px)` }}
                    >
                      <div className='flex justify-center'>
                        <Image
                          src={icon}
                          alt={icon}
                          width={0}
                          height={0}
                          className='w-[80%] h-auto '
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-xs test-sm text-purple'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-3' color='#CBACF9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;

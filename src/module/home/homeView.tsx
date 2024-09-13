"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { IoIosArrowDown } from "react-icons/io";
import { GoDotFill } from "react-icons/go";
import { MdEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { Image } from "@nextui-org/image";

import HomeService from "./homeService";

// import Link from 'next/link'

const HomeView = () => {
  const { embla } = HomeService();

  const slides = [
    {
      img: "/images/images-home.png",
    },
    {
      img: "/images/images-home.png",
    },
    {
      img: "/images/images-home.png",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      {/*Information Header*/}
      <div
        className={`text-xl py-2 w-full bg-blueprimary flex justify-center items-center text-white
      `}
      >
        Selamat datang di Ceisa pusat bantuan untuk beacukai, untuk layanan
        lengkapnya klik <span className={`text-yellowprimary`}>disini</span>
      </div>
      {/*END Information Header*/}
      {/* Highlight Section */}
      <div className={`container flex justify-center items-center`}>
        <section className="embla">
          <div ref={embla} className="embla__viewport">
            <div className="embla__container">
              {slides.map((item: any, index: number) => (
                <div key={index} className="embla__slide">
                  <Image
                    alt={`Slide ${index}`}
                    className="w-full h-full rounded-none object-cover embla__slide__number"
                    sizes="100vw"
                    src={item.img}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Section Container 2 */}
      <div className="container">
        {/* Add margin-top to push content down */}
        <div
          className="relative bg-blueprimary w-full h-auto p-5"
          style={{
            backgroundImage: `url('images/images-section-1.png')`,
            backgroundSize: "cover", // Makes the image cover the entire div
            // backgroundPosition: "center", // Centers the image
            // backgroundRepeat: "no-repeat", // Prevents the image from repeating
          }}
        >
          {/* Text content on top of the background image */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-opacity-30 ">
            <div className="col-span-2 text-white px-10 py-5">
              <div className="text-2xl font-bold">
                Ceisa PT Incore & PT SISI
              </div>
              <div className="text-xl text-justify mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className={`mt-4`}>
                <Button
                  className={`bg-yellowprimary font-semibold`}
                  variant="shadow"
                >
                  Daftar Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Section Kurs*/}
      <div className={`container`}>
        <div className={`px-10 py-5`}>
          <div className={"text-2xl font-bold mt-5"}>Informasi Kurs Valuta</div>
          <div className={`grid grid-cols-1 md:grid-cols-6 gap-4 my-5`}>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
            <div
              className={`border-1 border-gray-300 shadow-2xl h-48 px-4 py-2 shadow-bottom`}
            >
              <div
                className={`flex justify-center items-center rounded-2xl bg-red-700 w-16 text-white px-2 py-1
              `}
              >
                -257
                <IoIosArrowDown size={20} />
              </div>
              <div
                className={`flex flex-col justify-center items-center mt-4 text-orangeprimary font-bold`}
              >
                <div className={`flex`}>
                  <Image
                    height={20}
                    radius={`none`}
                    src={`/images/us-flag.svg`}
                    width={20}
                  />
                  <div className={`mx-1`}>USD</div>
                </div>
                <div className={`mt-2`}>Amerika Serikat</div>
                <div className={`mt-2 text-3xl font-semibold`}>14800</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Section Kurs*/}

      {/* Section 3 */}
      <div
        className={`w-full flex justify-center items-center py-3 bg-blueprimary`}
      >
        <div className={`text-white text-2xl flex justify-center items-center`}>
          <div>Hubungi Kami</div>
          <GoDotFill className={`mx-2 text-yellowprimary`} />
          <div> Informasi</div>
        </div>
      </div>
      {/* End Section 3 */}

      {/* Section Footer */}
      <div className={`container py-10`}>
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 font-semibold`}>
          <div className={`col-span-1`}>
            <Image height={120} src={`/images/logo-ceisa.png`} width={254} />
          </div>
          <div className={`col-span-1 flex flex-col`}>
            <div className={`flex items-center`}>
              <MdEmail size={18} />
              <div className={`mx-1 text-lg`}>management@indonesiacore.com</div>
            </div>
            <div className={`flex items-center`}>
              <FaInstagram size={18} />
              <div className={`mx-1 text-lg`}>incoresystemssolutions</div>
            </div>
            <div className={`flex items-center`}>
              <FaPhoneAlt size={18} />

              <div className={`mx-1 text-lg`}>+622153668179</div>
            </div>
          </div>
          <div className={`col-span-2`}>
            <div className={`text-lg`}>
              Karindra building lt 3 no 9 Jl. Palmerah Sel. No.30A 2, RT.4/RW.2,
              Gelora, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus
              Ibukota Jakarta 10270
            </div>
          </div>
        </div>
      </div>
      {/* End Section Footer */}
    </div>
  );
};

export default HomeView;


import React from "react";
import bannerImg from "@/assets/hero_img.jpg";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

const Banner = () => {
  return (
    <div
      className={`${inter.className} mx-24 my-10 flex items-center justify-between gap-12 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-50 via-white to-green-100 px-16 py-24 shadow-xl shadow-emerald-100/50`}
    >
      {/* left side */}
      <div className="flex flex-col items-center">
        <h2 className="text-center text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
          Books to freshen up
          <br />
          <span className="text-emerald-600">your bookshelf</span>
        </h2>

        <button className="btn mt-8 rounded-full border-0 bg-emerald-600 px-8 text-base font-semibold text-white shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-700 hover:shadow-xl hover:shadow-emerald-600/40">
          View The List
        </button>
      </div>

      {/* right side */}
      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-emerald-200/30 blur-2xl"></div>

        <Image
          className="relative rounded-2xl object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
          src={bannerImg}
          alt="Books"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};

export default Banner;


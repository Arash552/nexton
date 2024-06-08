"use client";
import { ReactElement } from "react";
import RangeSlider from "./rangeSlider";
export default function SideBar() {
  return (
    <section className="min-w-60 hidden sm:flex flex-col gap-y-5 whitespace-nowrap px-4">
      <div className="pb-5 border-b-2 border-borderC">
        <h1 className="text-xl text-black font-semibold mb-5">Category</h1>
        <ul
          className="list-none flex flex-col gap-y-4"
          onClick={(e) => {
            const elem = e.target as HTMLElement;
            if (elem.tagName == "DIV") {
              if (elem.classList.contains("bg-blue")) {
                elem.classList.remove("bg-blue", "border-none");
              } else {
                elem.classList.add("bg-blue", "border-none");
              }
            }
          }}
        >
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-md border-2 border-halfBlack text-black"></div>
            <p>Men's fashion</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-md border-2 border-halfBlack cursor-pointer"></div>
            <p>Woman's fashion</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-md border-2 border-halfBlack cursor-pointer"></div>
            <p>Kids & Toys</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-md border-2 border-halfBlack cursor-pointer"></div>
            <p>Accessories</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-md border-2 border-halfBlack cursor-pointer"></div>
            <p>Cosmetics</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-md border-2 border-halfBlack cursor-pointer"></div>
            <p>Shoes</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-md border-2 border-halfBlack cursor-pointer"></div>
            <p>Sports</p>
          </li>
        </ul>
      </div>

      <div className="w-full pb-5 border-b-2 border-borderC">
        <h1 className="text-xl text-black font-semibold mb-10">Price range</h1>
        <RangeSlider></RangeSlider>
      </div>

      <div className="pb-5">
        <h1 className="text-xl text-black font-semibold mb-5">Sort Order</h1>
        <ul className="list-none flex flex-col gap-y-4" onClick={(e) => {
            const elem = e.target as HTMLElement;
            if (elem.tagName == "DIV") {
              if (elem.classList.contains("bg-blue")) {
                elem.classList.remove("bg-blue", "border-none");
              } else {
                elem.classList.add("bg-blue", "border-none");
              }
            }
          }}>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-full border-2 border-halfBlack cursor-pointer"></div>
            <p>Most Popular</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-full border-2 border-halfBlack cursor-pointer"></div>
            <p>Best Rating</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-full border-2 border-halfBlack cursor-pointer"></div>
            <p>Newest</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-full border-2 border-halfBlack cursor-pointer"></div>
            <p>Price Low-High</p>
          </li>
          <li className="flex gap-x-2 text-sm text-tGray">
            <div className="w-5 h-5 rounded-full border-2 border-halfBlack cursor-pointer"></div>
            <p>Price High-Low</p>
          </li>
        </ul>
      </div>
      <button className="w-full py-2 grid place-items-center text-white bg-blue rounded-2xl hover:opacity-80">
        Submit
      </button>
    </section>
  );
}

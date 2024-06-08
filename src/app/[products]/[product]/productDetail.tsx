"use client";
import { useEffect, useRef, useState } from "react";
import "./page.css";
export default function ProductDetail({
  Data,
}: {
  Data: {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string;
    price: number;
    rating: {
      rate: number;
      count: number;
    };
  };
}) {
  const currentData = Data;
  const [curretnSize, setcurrentSize] = useState<string>("S");
  const [numb, setNumb] = useState<number>(1);
  const btnRef = useRef<HTMLCollection | any>(null);
  useEffect(()=>{
    if(typeof document !== "undefined"){
      const btn = document.getElementsByClassName("sizeBtn");
      btnRef.current = btn;
    }
  },[])
  return (
    <div className="min-w-96 hidden lg:block">
      <div className="w-full flex-col p-4 gap-y-5 rounded-xl border-2 border-borderC md:flex">
        <div className="flex justify-between items-center">
          <div className="flex gap-x-1 text-sm text-tGray mb-6">
            <i className="bi-star-fill text-[#FBBF24]"></i>
            <p>{currentData.rating.rate}</p> .
            <p className="underline">{currentData.rating.count} reviews</p>
          </div>
          <div className="grid gap-y-1 items-end">
            <p className="text-black font-bold">${currentData.price}</p>
            <p className="text-sm text-tGray line-through">
              ${currentData.price}
            </p>
          </div>
        </div>
        <p className="text-black text-sm">Size: {curretnSize}</p>
        <div
          className="flex flex-wrap gap-2"
          onClick={(e) => {
            const elem = e.target as HTMLElement;
            if (elem.tagName == "BUTTON") {
              if (!elem.classList.contains("unawailableSize")) {
                for (let i = 0; i < btnRef.current.length; i++) {
                  const element = btnRef.current[i];
                  element.classList.remove("activeSize");
                }
                elem.classList.add("activeSize");
                setcurrentSize(elem.innerText);
              }
            }
          }}
        >
          <button className="activeSize sizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
            S
          </button>
          <button className="sizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
            M
          </button>
          <button className="sizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
            L
          </button>
          <button className="sizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
            XL
          </button>
          <button className="unawailableSize sizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
            2XL
          </button>
        </div>

        <div className="w-full flex justify-between items-center mb-5">
          <div className="flex gap-x-2 text-sm rounded-2xl text-black bg-graybg p-2">
            <button
              className="px-2 bg-white rounded-full grid place-items-center opacity-80 border-2 border-borderC"
              onClick={() => {
                if (numb != 0) {
                  setNumb((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
            <p className="p-1 grid place-items-center">{numb}</p>
            <button
              className="px-2 py-[1px] bg-white rounded-full grid place-items-center border-2 border-borderC"
              onClick={() => {
                setNumb((prev) => prev + 1);
              }}
            >
              +
            </button>
          </div>
          <button className="px-5 py-2 flex gap-x-2 items-center bg-black text-sm text-white rounded-2xl">
            <i className="bi-bag"></i>
            <p>Add to cart</p>
          </button>
        </div>
        <div className="flex flex-col gap-y-2 pb-5 border-b-2 border-borderC">
          <div className="flex justify-between items-center text-sm text-tGray">
            <p>
              ${currentData.price} X {numb}
            </p>
            <p>${Math.floor(currentData.price * numb)}</p>
          </div>
          <div className="flex justify-between items-center text-sm text-tGray">
            <p>tax estimate</p>
            <p>$0</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-black">
          <p>total</p>
          <p>${Math.floor(currentData.price * numb)}</p>
        </div>
      </div>
    </div>
  );
}

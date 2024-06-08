'use client'

import { useEffect, useRef, useState } from "react";

export default function PhonePD({
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
  }){
    const btnRef = useRef<HTMLCollection | any>(null)
    useEffect(()=>{
      if(typeof document !== "undefined"){
        const btn = document.getElementsByClassName("PSizeBtn");
        btnRef.current = btn
      }
    },[])
    const currentData = Data;
    const [curretnSize, setcurrentSize] = useState<string>("S");
    const [numb, setNumb] = useState<number>(1);
    return(
        <div className="grid gap-y-5 lg:hidden">
            <p className="text-black text-lg font-bold">{currentData.title}</p>
            <div className="grid gap-y-1">
              <p className="text-black font-bold">${currentData.price}</p>
              <p className="text-sm text-tGray line-through">
                ${currentData.price}
              </p>
            </div>
            <div className="flex gap-x-1 text-sm text-tGray">
              <i className="bi-star-fill text-[#FBBF24]"></i>
              <p>{currentData.rating.rate}</p>
              <p>({currentData.rating.count})</p>
            </div>
            <p className="text-black text-sm">Size: {curretnSize}</p>
            <div className="flex flex-wrap gap-2" onClick={(e) => {
            const elem = e.target as HTMLElement;
            const curretbtn = btnRef.current;
            if (elem.tagName == "BUTTON") {
              if (!elem.classList.contains("PUnawailableSize")) {
                for (let i = 0; i < curretbtn.length; i++) {
                  const element = curretbtn[i];
                  element.classList.remove("PActiveSize");
                }
                elem.classList.add("PActiveSize");
                setcurrentSize(elem.innerText);
              }
            }
          }}>
              <button className="PActiveSize PSizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
                S
              </button>
              <button className="PSizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
                M
              </button>
              <button className="PSizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
                L
              </button>
              <button className="PSizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
                XL
              </button>
              <button className="PUnawailableSize PSizeBtn px-8 py-2 text-sm text-black grid place-items-center border-2 border-borderC rounded-2xl">
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
          </div>
    )
}
"use client";

import { useState } from "react";

export default function Images({
  Data,
}: {
  Data: {
    image: string;
    title: string;
  };
}) {
  const currentData = Data;
  const [activePic, setActivePic] = useState<string>(currentData.image);
  return (
    <div className="w-full sm:flex sm:flex-row-reverse sm:gap-x-5">
      <div className="w-full rounded-2xl relative">
        <img
          src={activePic}
          alt={currentData.title}
          className="w-full md:w-3/4 rounded-2xl mb-10 mx-auto"
        />
        <div className="w-full flex justify-between items-center absolute top-2 p-2 pt-1">
          <div className="flex items-center gap-x-2 text-sm text-tGray bg-white px-2 py-1 rounded-2xl">
            <i className="bi-stars"></i>
            <p>New in</p>
          </div>
          <i className="bi-bag w-10 h-10 rounded-full bg-white grid place-items-center text-black"></i>
        </div>
      </div>

      <div
        className="h-40 sm:h-auto flex gap-4 overflow-scroll disableScroll sm:w-32 sm:flex-col sm:overflow-hidden"
        onClick={(e) => {
          const elem = e.target as HTMLElement;
          if (elem.tagName == "IMG") {
            const pic: any = elem.getAttribute("src");
            const children = elem.parentElement?.children as HTMLCollection
            setActivePic(pic);
            for (let i = 0; i < children.length; i++) {
                children[i].classList.remove("activeSubPic")
            }
            elem.classList.add("activeSubPic")
          }
        }}
      >
        <img
          src={currentData.image}
          alt=""
          className="activeSubPic object-contain md:w-full rounded-2xl cursor-pointer"
        />
        <img
          src="/product-27-2 1.png"
          alt=""
          className=" object-contain md:w-full rounded-2xl cursor-pointer"
        />
        <img
          src="/product-27-3 1.png"
          alt=""
          className=" object-contain md:w-full rounded-2xl cursor-pointer"
        />
        <img
          src="/product-27-4 1.png"
          alt=""
          className=" object-contain md:w-full rounded-2xl cursor-pointer"
        />
      </div>
    </div>
  );
}

"use client";
import { ReactElement, useEffect, useRef, useState } from "react";
export default function Dots({ Parent }: { Parent: string }) {
  const parentRef = useRef<HTMLElement | any>(null)
  const [dots, setDots] = useState<ReactElement[]>([]);

  useEffect(() => {
    if(typeof document !== "undefined"){
      const parent = document.getElementById(Parent) as HTMLElement;
      parentRef.current = parent;
      if (parentRef.current) {
        const newDots: ReactElement[] = [];
        const dotClass = Parent + "Dots";
        for (let i = 0; i < parent.children.length; i++) {
          var isActive;
          i == 0 ? isActive = "activeDot" : isActive = "";
          newDots.push(
            <li
              key={i}
              accessKey={i.toString()}
              className={`${dotClass} ${isActive} w-2 h-2 bg-halfBlack rounded-full cursor-pointer`}
            ></li>
          );
        }
        setDots(newDots);
      }
    }

  }, [Parent]);

  return (
    <ul
      className="flex items-center gap-x-1 list-none"
      onClick={(e) => {
        const elem = e.target as HTMLElement;
        if (e.target != e.currentTarget) {
          const group = document.getElementsByClassName(Parent + "Dots");
          for (let i = 0; i < group.length; i++) {
            const element = group[i];
            element.classList.remove("activeDot")
          }
          group[parseInt(elem.accessKey)].classList.add("activeDot")
          parentRef.current.scrollTo(
            parseInt(elem.accessKey) *
              parentRef.current.children[parseInt(elem.accessKey)].clientWidth,
            0
          );
        }
      }}
    >
      {dots}
    </ul>
  );
}

"use client";
import { useEffect, useState } from "react";
import Data from "../../../db.json"
export default function AddFavorite({ itemId , isFavo }: { itemId: string , isFavo : boolean }) {
  const data = Data.data;
  const [currentItem, setCurrentItem] = useState<any>();
  useEffect(() => {
    const item = data.find((item : any) => item.id == itemId);
    setCurrentItem(item);
    if(isFavo){
      setFill("-fill")
    }
  }, [data , itemId]);

  const [fill , setFill] = useState<string>("")

  async function addFav() {
    if (currentItem.id) {
      var bool : boolean;
      if(currentItem.isFavorite){
        bool = false;
        setFill("")
      }else{
        bool = true
        setFill("-fill")
      }
      await fetch(`http://localhost:5000/data/${currentItem.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...currentItem, isFavorite: bool }),
      });
    }
  }

  return (
    <i
      className={`bi-bag${fill} w-5 h-5 rounded-full bg-white grid place-items-center text-black absolute right-4 top-4 cursor-pointer`}
      onClick={addFav}
    ></i>
  );
}

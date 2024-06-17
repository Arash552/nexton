import "./page.css";
import Link from "next/link";
import AddFavorite from "../(components)/addFavorite";
import SideBar from "./sidebar";
interface dataProps {
  id: string;
  image: string;
  title: string;
  category: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
  isFavo : boolean;
}
export default async function Products() {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  return (
    <body>
      <header className="w-full h-16 py-2 px-5 flex items-center justify-between border-b-2 border-borderC mb-10 sm:mb-20">
        <p className="text-2xl text-black font-bold hidden sm:block">NEXTON</p>
        <img src="/favicon.ico" alt="" className="h-8 sm:hidden" />
        <div className="w-2/3 sm:w-2/5 h-full flex items-center px-2 gap-x-2 rounded-3xl bg-graybg text-sm">
          <i className="bi-search text-tGray whitespace-nowrap"></i>
          <input
            type="search"
            className="w-full h-full text-tGray bg-graybg outline-none border-none font-light"
            placeholder="search in products..."
          />
        </div>
        <div className="flex flex-col gap-y-1 sm:hidden">
          <div className="w-5 h-[2px] bg-tGray rounded-xl"></div>
          <div className="w-5 h-[2px] bg-tGray rounded-xl"></div>
          <div className="w-5 h-[2px] bg-tGray rounded-xl"></div>
        </div>
        <div className="gap-x-2 hidden sm:flex text-lg">
          <Link href={"/login"}>
            <i className="bi-person rounded-full text-tGray cursor-pointer"></i>
          </Link>
          <Link href={"/checkout"}>
            <i className="bi-cart rounded-full text-tGray relative cursor-pointer">
              <p className="w-5 h-5 bg-[#0EA5E9] grid place-items-center text-white text-xs rounded-full absolute bottom-3 left-3">
                3
              </p>
            </i>
          </Link>
        </div>
      </header>

      <main className="px-5 mb-10 sm:flex">
        <SideBar></SideBar>
        <section>
          <div className="flex justify-between items-center mb-10">
            <button className="px-5 py-2 flex gap-x-1 text-xs sm:text-sm text-tGray rounded-2xl border-2 border-borderC">
              <i className="bi-filter"></i>
              <p>Filter</p>
            </button>
            <button className="px-5 py-2 flex gap-x-1 text-xs sm:text-sm text-tGray rounded-2xl border-2 border-borderC">
              <p>Rows per page</p>
              <i className="bi-chevron-down"></i>
            </button>
          </div>
          <section className="flex flex-wrap justify-around gap-8 mb-10">
            {data.map((item: dataProps) => (
              <div className="w-full sm:w-64 relative grid border-2 border-borderC rounded-xl p-2">
                <AddFavorite
                  itemId={item.id}
                  isFavo={item.isFavo}
                ></AddFavorite>

                <Link
                  href={`/products/${item.id}`}
                  className="w-full h-56 overflow-hidden cursor-pointer mb-5"
                >
                  <img src={item.image} alt={item.title} className="w-full" />
                </Link>
                <div className="w-full flex items-center justify-between px-4 overflow-hidden mb-3">
                  <div className="grid gap-y-1">
                    <p className="text-black text-sm font-bold w-4/5 overflow-hidden">
                      {item.title}
                    </p>
                    <p className="text-xs text-tGray">{item.category}</p>
                  </div>
                  <div className="grid gap-y-1">
                    <p className="text-black text-sm font-bold">
                      ${item.price}
                    </p>
                    <p className="text-xs text-tGray line-through">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div className="flex gap-x-1 text-sm text-tGray px-4">
                  <i className="bi-star-fill text-[#FBBF24]"></i>
                  <p>{item.rating.rate}</p>
                  <p>({item.rating.count})</p>
                </div>
              </div>
            ))}
          </section>
          <div className="w-full grid place-items-center">
            <ul className="flex items-center gap-x-8 list-none">
              <li className="text-sm text-tGray ">
                <i className="bi-chevron-left"></i>
              </li>
              <li className="text-sm text-tGray ">1</li>
              <li className="text-sm text-tGray ">2</li>
              <li className="text-sm text-tGray ">3</li>
              <li className="text-sm text-tGray ">4</li>
              <li className="text-sm text-tGray ">5</li>
              <li className="text-sm text-tGray ">
                <i className="bi-chevron-right"></i>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <footer className="w-full p-5 border-t-2 border-solid border-borderC">
        <div className="w-full grid grid-rows-4 gap-y-14 mb-5 sm:grid-rows-none sm:grid-cols-4">
          <div className="w-full grid gap-y-5">
            <h1 className="text-2xl text-black font-bold">NEXTON</h1>
            <div className="grid gap-y-4">
              <div className="flex gap-x-2">
                <img src="/svg.png" alt="Facebook" className="w-4" />
                <p className="text-sm text-tGray">Facebook</p>
              </div>
              <div className="flex gap-x-2">
                <img src="/svg (1).png" alt="Youtube" className="w-4" />
                <p className="text-sm text-tGray">Youtube</p>
              </div>
              <div className="flex gap-x-2">
                <img src="/svg (2).png" alt="Telegram" className="w-4" />
                <p className="text-sm text-tGray">Telegram</p>
              </div>
              <div className="flex gap-x-2">
                <img src="/svg (3).png" alt="Twitter" className="w-4" />
                <p className="text-sm text-tGray">Twitter</p>
              </div>
            </div>
          </div>

          <div className="w-full grid gap-y-2">
            <h1 className="text-lg text-black font-bold">Get started</h1>
            <div className="grid gap-y-4">
              <p className="text-sm text-tGray">Release Note</p>
              <p className="text-sm text-tGray">Upgrading Guide</p>
              <p className="text-sm text-tGray">Browser Support</p>
              <p className="text-sm text-tGray">Dark Mode</p>
            </div>
          </div>

          <div className="w-full grid gap-y-2">
            <h1 className="text-lg text-black font-bold">Explore</h1>
            <div className="grid gap-y-4">
              <p className="text-sm text-tGray">Prorotyping</p>
              <p className="text-sm text-tGray">Design System</p>
              <p className="text-sm text-tGray">Pricing</p>
              <p className="text-sm text-tGray">Security</p>
            </div>
          </div>

          <div className="w-full grid gap-y-2">
            <h1 className="text-lg text-black font-bold">Community</h1>
            <div className="grid gap-y-4">
              <p className="text-sm text-tGray">Discution Forums</p>
              <p className="text-sm text-tGray">Code Of Cunduct</p>
              <p className="text-sm text-tGray">Contributing</p>
              <p className="text-sm text-tGray">API Refrences</p>
            </div>
          </div>
        </div>

        <div className="w-full text-center py-5 text-sm text-tGray border-t-2 border-borderC">
          Nexton eCommerce. @ 2024
        </div>
      </footer>
    </body>
  );
}

import Link from "next/link";
import "./page.css";
import Dots from "./(components)/dots";
import AddFavorite from "./(components)/addFavorite";
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
  isFavo: boolean;
}
export default async function Home() {
  const data = await fetch("https://fakestoreapi.com/products?limit=10").then(
    (res) => res.json()
  );
  return (
    <body>
      <header className="w-full h-16 py-2 px-5 flex items-center justify-between border-b-2 border-borderC">
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
      <section className="w-full h-96 bg-graybg relative mb-20 ">
        <div
          className="w-full h-full flex overflow-x-scroll overflow-y-hidden disableScroll"
          id="heroSlider"
        >
          <Link
            href={"/products"}
            className="min-w-full grid place-items-center sm:flex sm:justify-between px-10"
          >
            <div className="w-full">
              <p className="text-sm text-tGray mb-2">starting from : 49.99</p>
              <p className="text-2xl text-black mb-5">
                Exclusive Collection For Everyone
              </p>
              <button className="px-5 py-2 text-white text-sm flex items-center gap-x-2 bg-black rounded-2xl">
                Explore Now <i className="bi-search"></i>
              </button>
            </div>
            <img
              src="/hero-bg.png"
              alt="human"
              className="w-1/2 relative right-0 hidden sm:block"
            />
          </Link>
          <Link
            href={"/products"}
            className="min-w-full grid place-items-center sm:flex sm:justify-between px-10"
          >
            <div className="w-full">
              <p className="text-sm text-tGray mb-2">starting from : 49.99</p>
              <p className="text-2xl text-black mb-5">
                Exclusive Collection For Everyone
              </p>
              <button className="px-5 py-2 text-white text-sm flex items-center gap-x-2 bg-black rounded-2xl">
                Explore Now <i className="bi-search"></i>
              </button>
            </div>
            <img
              src="/woman.png"
              alt="human"
              className="w-1/2 relative right-0 hidden sm:block"
            />
          </Link>
          <Link
            href={"/products"}
            className="min-w-full grid place-items-center sm:flex sm:justify-between px-10"
          >
            <div>
              <p className="text-sm text-tGray mb-2">starting from : 49.99</p>
              <p className="text-2xl text-black mb-5">
                Exclusive Collection For Everyone
              </p>
              <button className="px-5 py-2 text-white text-sm flex items-center gap-x-2 bg-black rounded-2xl">
                Explore Now <i className="bi-search"></i>
              </button>
            </div>
            <img
              src="/woman.png"
              alt="human"
              className="w-1/2 relative right-0 hidden sm:block"
            />
          </Link>
        </div>
        <div className="absolute left-4 bottom-4">
          <Dots Parent="heroSlider"></Dots>
        </div>
      </section>
      <main className="w-full px-5">
        <section className="w-full py-4 px-5 flex-col lg:flex-row items-center justify-between gap-y-5 border-2 border-borderC rounded-2xl hidden sm:flex mb-20">
          <div className="flex w-full">
            <div className="flex gap-x-4 w-full border-r-2 border-borderC items-center justify-center">
              <img src="/svg2.png" alt="" className="w-6 h-6 my-auto" />
              <div className="w-48">
                <p className="text text-black">Free shipping</p>
                <p className="text-xs text-tGray">On orders over %50.00</p>
              </div>
            </div>
            <div className="flex gap-x-4 w-full border-none sm:border-r-2 border-borderC items-center justify-center">
              <img src="/svg2 (1).png" alt="" className="w-6 h-6 my-auto" />
              <div className="w-48">
                <p className="text text-black">very easy to return</p>
                <p className="text-xs text-tGray">Just phone number</p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex gap-x-4 w-full border-r-2 border-borderC items-center justify-center">
              <img src="/svg2 (2).png" alt="" className="w-6 h-6 my-auto" />
              <div className="w-48">
                <p className="text text-black">Worldwide delivery</p>
                <p className="text-xs text-tGray">Fast delivery worldwide</p>
              </div>
            </div>
            <div className="flex gap-x-4 w-full items-center justify-center">
              <img src="/svg2 (3).png" alt="" className="w-6 h-6 my-auto" />
              <div className="w-48">
                <p className="text text-black">Refund policy</p>
                <p className="text-xs text-tGray">
                  60 days return for any reason
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full grid gap-y-8 mb-20">
          <div className="flex items-center">
            <h1 className="text-xl text-black font-semibold mr-2">
              Start Exploring.
            </h1>
            <h1 className="text-xl text-tGray font-semibold hidden sm:block">
              Good things are waiting for you
            </h1>
          </div>
          <section
            className="w-full flex items-center overflow-scroll gap-x-5 relative"
            id="exploSlider"
          >
            <Link
              href="/For Men"
              className="min-w-full sm:min-w-80 p-4 flex items-center justify-between bg-graybg rounded-xl"
            >
              <div>
                <p className="text-lg text-black mb-2 font-semibold">
                  For Men's
                </p>
                <p className="text-xs text-tGray">starting at $24</p>
              </div>
              <button className="px-5 py-2 border-l-4 border-solid border-borderC flex items-center justify-center text-sm text-tGray">
                <p className="mr-2">SHOP NOW</p>
                <i className="bi-arrow-right"></i>
              </button>
            </Link>
            <Link
              href="/For Men"
              className="min-w-full sm:min-w-80 p-4 flex items-center justify-between bg-graybg rounded-xl"
            >
              <div>
                <p className="text-lg text-black mb-2 font-semibold">
                  For Men's
                </p>
                <p className="text-xs text-tGray">starting at $24</p>
              </div>
              <button className="px-5 py-2 border-l-4 border-solid border-borderC flex items-center justify-center text-sm text-tGray">
                <p className="mr-2">SHOP NOW</p>
                <i className="bi-arrow-right"></i>
              </button>
            </Link>
            <Link
              href="/For Men"
              className="min-w-full sm:min-w-80 p-4 flex items-center justify-between bg-graybg rounded-xl"
            >
              <div>
                <p className="text-lg text-black mb-2 font-semibold">
                  For Men's
                </p>
                <p className="text-xs text-tGray">starting at $24</p>
              </div>
              <button className="px-5 py-2 border-l-4 border-solid border-borderC flex items-center justify-center text-sm text-tGray">
                <p className="mr-2">SHOP NOW</p>
                <i className="bi-arrow-right"></i>
              </button>
            </Link>
            <Link
              href="/For Men"
              className="min-w-full sm:min-w-80 p-4 flex items-center justify-between bg-graybg rounded-xl"
            >
              <div>
                <p className="text-lg text-black mb-2 font-semibold">
                  For Men's
                </p>
                <p className="text-xs text-tGray">starting at $24</p>
              </div>
              <button className="px-5 py-2 border-l-4 border-solid border-borderC flex items-center justify-center text-sm text-tGray">
                <p className="mr-2">SHOP NOW</p>
                <i className="bi-arrow-right"></i>
              </button>
            </Link>
          </section>
          <div className="mx-auto">
            <Dots Parent="exploSlider"></Dots>
          </div>
        </section>

        <section className="grid gap-y-10 mb-20">
          <div className="flex items-center">
            <h1 className="text-xl text-black font-semibold mr-2">
              Reccomendation.
            </h1>
            <h1 className="text-xl text-tGray font-semibold hidden sm:block">
              Best matching products for you
            </h1>
          </div>
          <div className="w-full overflow-hidden">
            <section
              className="w-full overflow-x-scroll disableScroll flex items-center gap-x-5 whitespace-nowrap"
              id="reccoSlider"
            >
              {data.map((item: dataProps) => (
                <div className="min-w-full sm:min-w-64 relative grid border-2 border-borderC rounded-xl p-2">
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
          </div>
          <div className="mx-auto">
            <Dots Parent="reccoSlider"></Dots>
          </div>
        </section>

        <section className="grid gap-y-10 mb-20">
          <div className="flex items-center">
            <h1 className="text-xl text-black font-semibold mr-2">
              Best Sellers.
            </h1>
            <h1 className="text-xl text-tGray font-semibold hidden sm:block">
              Best Selling Of The Month
            </h1>
          </div>
          <div className="w-full overflow-hidden">
            <section
              className="w-full overflow-x-scroll disableScroll flex items-center gap-x-5 whitespace-nowrap"
              id="sellerSlider"
            >
              {data.map((item: dataProps) => (
                <div className="min-w-full sm:min-w-64 relative grid border-2 border-borderC rounded-xl p-2">
                  <AddFavorite
                    itemId={item.id}
                    isFavo={item.isFavo}
                  ></AddFavorite>

                  <Link
                    href={"/1/2"}
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
          </div>
          <div className="mx-auto">
            <Dots Parent="sellerSlider"></Dots>
          </div>
        </section>

        <Link
          href="/products"
          className="w-full hidden px-10 sm:flex sm:justify-between bg-graybg relative mb-20 overflow-hidden"
        >
          <div className="my-auto">
            <p className="text-sm text-tGray mb-2">100% Original Products</p>
            <p className="text-2xl text-black mb-5">
              Exclusive Collection For Everyone
            </p>
            <p className="text-sm text-tGray mb-2">starting from : 59.99</p>
            <button className="px-5 py-2 text-white text-sm flex items-center gap-x-2 bg-black rounded-2xl">
              Shop Now
            </button>
          </div>
          <img
            src="/bg-image.png"
            alt="human"
            className="w-1/2 relative right-0 hidden sm:block"
          />
        </Link>
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

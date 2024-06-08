import Link from "next/link";
import { redirect } from "next/navigation";
import ProductDetail from "./productDetail";
import AddFavorite from "@/app/(components)/addFavorite";
import Dots from "@/app/(components)/dots";
import PhonePD from "./phonePD";
import Images from "./images";

interface dataProps {
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
  isFavo: boolean;
}

export default async function Product({
  params,
}: {
  params: {
    product: number;
  };
}) {
  const data = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );
  const currentData = await data.find(
    (item: dataProps) => item.id == params.product
  );
  if (!currentData) {
    redirect("/404");
  }

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
      <main className="w-full px-5 sm:px-10">
        <section className="w-ful mb-10">
          <div className="w-full sm:flex flex-row-reverse justify-between sm:gap-x-4 mb-10">
            <ProductDetail Data={currentData}></ProductDetail>
            <Images Data={currentData}></Images>
          </div>

          <PhonePD Data={currentData}></PhonePD>

          <div className="grid gap-y-10 mb-5">
            <div>
              <p className="text-black text-xl font-semibold mb-2 hidden lg:block">
                {currentData.title}
              </p>
              <p className="text-black text-xl font-semibold mb-2 lg:hidden">
                About this product
              </p>
              <p className="text-sm text-tGray">{currentData.description}</p>
            </div>
            <div>
              <p className="text-black text-xl font-semibold mb-2">
                Fabric + Care
              </p>
              <p className="text-sm text-tGray">Material: Soft wool blend</p>
              <p className="text-sm text-tGray">Color: Various</p>
            </div>
            <div>
              <p className="text-black text-xl font-semibold mb-2">
                Sale performance
              </p>
              <p className="text-sm text-tGray">Sales: 0</p>
              <p className="text-sm text-tGray">Review Count: -</p>
              <p className="text-sm text-tGray">Review Average: -</p>
            </div>
          </div>
          <div>
            <p className="text-black text-xl font-semibold mb-4">Keywords</p>
            <div className="flex flex-wrap gap-2">
              <div className="flex px-3 py-1 items-center gap-x-2 rounded-2xl border-2 border-borderC text-sm text-tGray">
                <i className="bi-stars"></i>
                <p>men's fashion</p>
              </div>
              <div className="flex px-3 py-1 items-center gap-x-2 rounded-2xl border-2 border-borderC text-sm text-tGray">
                <i className="bi-stars"></i>
                <p>winter hat</p>
              </div>
              <div className="flex px-3 py-1 items-center gap-x-2 rounded-2xl border-2 border-borderC text-sm text-tGray">
                <i className="bi-stars"></i>
                <p>colorful accessory</p>
              </div>
              <div className="flex px-3 py-1 items-center gap-x-2 rounded-2xl border-2 border-borderC text-sm text-tGray">
                <i className="bi-stars"></i>
                <p>warm headwear</p>
              </div>
            </div>
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
              id="productCardSlider"
            >
              {data.map((item: dataProps) => (
                <div className="min-w-full sm:min-w-64 relative grid border-2 border-borderC rounded-xl p-2">
                  <AddFavorite
                    itemId={item.id.toString()}
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
            <Dots Parent={"productCardSlider"}></Dots>
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

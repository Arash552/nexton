import Link from "next/link";
import "./page.css";
export default function Checkout() {
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
      <main className="px-5 mb-10 md:px-10">
        <div className="gap-y-2 hidden md:grid mb-5">
          <h1 className="text-2xl text-black font-bold">Checkout</h1>
          <p className="text-sm text-tGray">Home page / Checkout</p>
        </div>
        <div className="flex flex-col md:flex-row-reverse md:gap-x-10">
          <section className="w-full pt-5 border-t-2 md:border-none border-borderC mb-10">
            <p className="text-lg text-black font-semibold mb-5">
              Order summery
            </p>
            <div className="w-full flex gap-x-5 items-center pb-5 mb-5 border-b-2 border-borderC">
              <img src="/image.png" alt="Watch" className="w-1/3 rounded-2xl" />
              <div className="flex flex-col justify-between gap-y-5">
                <div className="grid gap-y-2">
                  <p className="text-black text-xl">Black Automatic Watch</p>
                  <div className="flex items-center gap-x-2 text-sm text-tGray">
                    <i className="bi-arrows-angle-expand"></i>
                    <p>One size</p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="grid gap-y-2">
                    <p className="text-black text-xl">$68.00</p>
                    <p className="text-sm text-tGray line-through">$78.00</p>
                  </div>
                  <div className="flex gap-x-2 text-sm rounded-2xl text-black bg-graybg p-2">
                    <p className="px-2 bg-white rounded-full grid place-items-center opacity-80 border-2 border-borderC">
                      -
                    </p>
                    <p className="p-1 grid place-items-center">1</p>
                    <p className="px-2 py-[1px] bg-white rounded-full grid place-items-center border-2 border-borderC">
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex gap-x-5 items-center pb-5 mb-5 border-b-2 border-borderC">
              <img src="/image.png" alt="Watch" className="w-1/3 rounded-2xl" />
              <div className="flex flex-col justify-between gap-y-5">
                <div className="grid gap-y-2">
                  <p className="text-black text-xl">Black Automatic Watch</p>
                  <div className="flex items-center gap-x-2 text-sm text-tGray">
                    <i className="bi-arrows-angle-expand"></i>
                    <p>One size</p>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center">
                  <div className="grid gap-y-2">
                    <p className="text-black text-xl">$68.00</p>
                    <p className="text-sm text-tGray line-through">$78.00</p>
                  </div>
                  <div className="flex gap-x-2 text-sm rounded-2xl text-black bg-graybg p-2">
                    <p className="px-2 bg-white rounded-full grid place-items-center opacity-80 border-2 border-borderC">
                      -
                    </p>
                    <p className="p-1 grid place-items-center">1</p>
                    <p className="px-2 py-[1px] bg-white rounded-full grid place-items-center border-2 border-borderC">
                      +
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <section className="hidden gap-y-5 md:grid">
              <div className="grid gap-y-4 ">
                <div className="grid gap-y-2">
                  <div className="w-full flex justify-between text-sm text-tGray">
                    <p>subtotal</p>
                    <p>$169.99</p>
                  </div>
                  <div className="w-full flex justify-between text-sm text-tGray">
                    <p>Shipping estimate</p>
                    <p>$5.00</p>
                  </div>
                  <div className="w-full flex justify-between text-sm text-tGray">
                    <p>Tax estimate</p>
                    <p>$24.90</p>
                  </div>
                </div>
                <div className="w-full flex justify-between text-black font-bold">
                  <p>Order total</p>
                  <p>$199.89</p>
                </div>
              </div>
              <button className="w-full py-2 text-white grid place-items-center bg-black rounded-2xl">
                Confirm Order
              </button>
            </section>
          </section>
          <section className="w-full grid gap-y-5 mb-10">
            <p className="textlg text-black font-semibold mb-5 md:hidden">
              Shipping details
            </p>
            <div className="border-2 border-borderC rounded-xl">
              <div className="flex items-center gap-x-2 text-sm text-tGray p-4 border-b-2 border-borderC">
                <i className="bi-person"></i>
                <p>CONTACT INFO</p>
              </div>
              <div className="grid gap-y-5 p-4">
                <div className="w-full grid gap-y-2">
                  <p className="text-black text-sm font-semibold">
                    Your phone number
                  </p>
                  <input
                    type="number"
                    className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                  />
                </div>
                <div className="w-full grid gap-y-2">
                  <p className="text-black text-sm font-semibold">
                    Email Address
                  </p>
                  <input
                    type="email"
                    className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="border-2 border-borderC rounded-xl">
              <div className="flex items-center gap-x-2 text-sm text-tGray p-4 border-b-2 border-borderC">
                <img src="path.png" alt="path" className="w-5" />
                <p>SHIPPING ADDRESS</p>
              </div>
              <div className="grid gap-y-5 p-4">
                <div className="w-full flex items-center gap-x-2">
                  <div className="w-1/2 grid gap-y-2">
                    <p className="text-black text-sm font-semibold">
                      First Name
                    </p>
                    <input
                      type="text"
                      className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                    />
                  </div>
                  <div className="w-1/2 grid gap-y-2">
                    <p className="text-black text-sm font-semibold">
                      Last Name
                    </p>
                    <input
                      type="text"
                      className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                    />
                  </div>
                </div>
                <div className="w-full grid gap-y-2">
                  <p className="text-black text-sm font-semibold">
                    Address line
                  </p>
                  <input
                    type="text"
                    className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                  />
                </div>
                <div className="w-full grid gap-y-2">
                  <p className="text-black text-sm font-semibold">Apt, Suite</p>
                  <input
                    type="text"
                    className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                  />
                </div>
                <div className="w-full flex items-center gap-x-2">
                  <div className="w-1/2 grid gap-y-2">
                    <p className="text-black text-sm font-semibold">
                      State/Province
                    </p>
                    <input
                      type="text"
                      className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                    />
                  </div>
                  <div className="w-1/2 grid gap-y-2">
                    <p className="text-black text-sm font-semibold">
                      Postal code
                    </p>
                    <input
                      type="text"
                      className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="border-2 border-borderC rounded-xl">
              <div className="flex items-center gap-x-2 text-sm text-tGray p-4 border-b-2 border-borderC">
                <i className="bi-credit-card"></i>
                <p>PAYMENT</p>
              </div>
              <div className="grid gap-y-5 p-4">
                <div className="w-full grid gap-y-2">
                  <p className="text-black text-sm font-semibold">
                    Card Number
                  </p>
                  <input
                    type="text"
                    className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                  />
                </div>
                <div className="w-full grid gap-y-2">
                  <p className="text-black text-sm font-semibold">
                    Name on the card
                  </p>
                  <input
                    type="text"
                    className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                  />
                </div>
                <div className="w-full flex items-center gap-x-2">
                  <div className="w-3/5 grid gap-y-2">
                    <p className="text-black text-sm font-semibold">
                      Expiration date
                    </p>
                    <input
                      type="text"
                      className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                    />
                  </div>
                  <div className="w-2/5 grid gap-y-2">
                    <p className="text-black text-sm font-semibold">CVC</p>
                    <input
                      type="text"
                      className="w-full h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="grid gap-y-5 md:hidden">
          <p className="text-xl font-semibold text-black">Confirm your order</p>
          <div className="grid gap-y-4">
            <div className="grid gap-y-2">
              <div className="w-full flex justify-between text-sm text-tGray">
                <p>subtotal</p>
                <p>$169.99</p>
              </div>
              <div className="w-full flex justify-between text-sm text-tGray">
                <p>Shipping estimate</p>
                <p>$5.00</p>
              </div>
              <div className="w-full flex justify-between text-sm text-tGray">
                <p>Tax estimate</p>
                <p>$24.90</p>
              </div>
            </div>
            <div className="w-full flex justify-between text-black font-bold">
              <p>Order total</p>
              <p>$199.89</p>
            </div>
          </div>
          <button className="w-full py-2 text-white grid place-items-center bg-black rounded-2xl">
            Confirm Order
          </button>
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

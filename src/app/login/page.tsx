import "./page.css";
import Link from "next/link";
export default function Login() {
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
      <main className="sm:w-96 px-5 mb-10 mx-auto">
        <div className="w-full flex flex-col gap-y-5">
          <p className="text-xl text-black font-bold mx-auto">Login</p>
          <div className="w-full grid gap-y-2">
            <p className="text-black text-sm font-semibold">Email</p>
            <input
              type="email"
              className="w-full text-sm h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
              placeholder="Example@example.com"
            />
          </div>
          <div className="w-full grid gap-y-2">
            <p className="text-black text-sm font-semibold">Password</p>
            <input
              type="password"
              className="w-full text-sm h-12 border-2 border-borderC bg-none outline-none p-2 rounded-2xl"
            />
          </div>
          <button className="w-full text-sm py-2 text-white grid place-items-center bg-black rounded-2xl">
            Continue
          </button>
          <p className="text-sm text-black mx-auto">or</p>
          <div className="flex gap-x-1 mx-auto">
            <p className="text-sm text-tGray">new user?</p>
            <Link href="/register" className="text-sm text-blue no-underline">
              Create an account
            </Link>
          </div>
        </div>
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

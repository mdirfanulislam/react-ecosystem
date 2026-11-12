import { lazy, Suspense } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

const OfferCard = lazy(() => import("./components/OfferCard/OfferCard.tsx"));
const Recharts = lazy(() => import("./components/Recharts/Recharts"));
const Axios = lazy(() => import("./components/Axios/Axios.tsx"));

function CardSkeleton() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 m-10">
      <div className="bg-white p-6 shadow-2xl rounded-4xl font-semibold flex flex-col gap-4 animate-pulse">
        <div className="flex justify-between gap-2">
          <span className="bg-gray-200 h-10 w-24 rounded-3xl"></span>
          <span className="bg-gray-200 h-10 w-32 rounded-3xl"></span>
        </div>
        <h3 className="h-10 bg-gray-200 rounded-lg w-3/4"></h3>
        <p className="h-6 bg-gray-200 rounded-lg w-1/2"></p>
        <h2 className="h-12 bg-gray-200 rounded-lg w-2/3"></h2>
        <ul className="flex flex-1 flex-col gap-4 bg-rose-200 p-4 rounded-2xl">
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
        </ul>
        <button className="mt-2 h-12 bg-gray-300 w-full rounded-3xl"></button>
      </div>

      <div className="bg-white p-6 shadow-2xl rounded-4xl font-semibold flex flex-col gap-4 animate-pulse">
        <div className="flex justify-between gap-2">
          <span className="bg-gray-200 h-10 w-24 rounded-3xl"></span>
          <span className="bg-gray-200 h-10 w-32 rounded-3xl"></span>
        </div>
        <h3 className="h-10 bg-gray-200 rounded-lg w-3/4"></h3>
        <p className="h-6 bg-gray-200 rounded-lg w-1/2"></p>
        <h2 className="h-12 bg-gray-200 rounded-lg w-2/3"></h2>
        <ul className="flex flex-1 flex-col gap-4 bg-rose-200 p-4 rounded-2xl">
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
        </ul>
        <button className="mt-2 h-12 bg-gray-300 w-full rounded-3xl"></button>
      </div>

      <div className="bg-white p-6 shadow-2xl rounded-4xl font-semibold flex flex-col gap-4 animate-pulse">
        <div className="flex justify-between gap-2">
          <span className="bg-gray-200 h-10 w-24 rounded-3xl"></span>
          <span className="bg-gray-200 h-10 w-32 rounded-3xl"></span>
        </div>
        <h3 className="h-10 bg-gray-200 rounded-lg w-3/4"></h3>
        <p className="h-6 bg-gray-200 rounded-lg w-1/2"></p>
        <h2 className="h-12 bg-gray-200 rounded-lg w-2/3"></h2>
        <ul className="flex flex-1 flex-col gap-4 bg-rose-200 p-4 rounded-2xl">
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
          <li className="h-6 bg-rose-300 rounded-lg w-full"></li>
        </ul>
        <button className="mt-2 h-12 bg-gray-300 w-full rounded-3xl"></button>
      </div>
    </section>
  );
}

function App() {
  return (
    <section className="bg-gray-50 min-h-screen" id="home">
      <header>
        <NavBar />
      </header>
      <main className="pt-20">
        <Suspense fallback={<CardSkeleton />}>
          <section id="recharts" className="scroll-mt-25 mb-10">
            <Recharts />
          </section>
          <hr className="border-t-2 border-rose-300 w-3/4 mx-auto my-5" />
          <section className="scroll-mt-25 mb-20" id="pricing">
            <OfferCard />
          </section>
          <hr className="border-t-2 border-rose-300 w-3/4 mx-auto my-5" />
          <section className="scroll-mt-25 pb-20" id="axios">
            <Axios />
          </section>
        </Suspense>
      </main>
      <footer></footer>
    </section>
  );
}

export default App;

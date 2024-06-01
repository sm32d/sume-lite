import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className={`${nunito.className} min-h-svh`}>
      <main
        className={`flex flex-col items-left justify-center min-h-[90svh] px-10 md:px-32 lg:px-52 py-20`}
      >
        <h1 className="text-4xl text-stone-700">Hello! Dominik here.</h1>
        <p className="py-2 text-3xl md:text-4xl text-stone-600 leading-snug">
          I'm a Software Engineer based in Singapore. Currently with Ufinity -
          working to make lives easier.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

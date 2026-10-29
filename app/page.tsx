
import Header from "./components/common/Header";
import Banner from "./components/common/Banner";
import Services from "./components/common/Services";
import About from "./components/common/About";
import Portfolio from "./components/portfolio";
import Contact from "./components/common/Contact";
import Footer from "./components/common/Footer";
import ScrollTop from "./components/common/ScrollTop";
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main>
        <Banner />
        <Services />
        <About />
        <Portfolio />
        <Contact />  
      </main>
      <Footer />
      <ScrollTop/>
    </div>
  );
}

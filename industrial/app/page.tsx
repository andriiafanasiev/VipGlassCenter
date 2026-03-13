import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Advantages from "./components/Advantages";
import Cases from "./components/Cases";
import Clients from "./components/Clients";
import About from "./components/About";
import Quality from "./components/Quality";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 64 }}>
        <Hero />
        <Services />
        <Industries />
        <Advantages />
        <Cases />
        <Clients />
        <About />
        <Quality />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}

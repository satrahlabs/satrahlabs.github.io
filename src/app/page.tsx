import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ProductShowcase from "@/components/ProductShowcase";
import About from "@/components/About";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ProductShowcase />
        <About />
        <ComingSoon />
      </main>
      <Footer />
    </>
  );
}

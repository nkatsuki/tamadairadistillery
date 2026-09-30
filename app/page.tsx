import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Concept from '@/components/Concept';
import DistilleryBarShop from '@/components/DistilleryBarShop';
import ProductPreview from '@/components/ProductPreview';
import News from '@/components/News';
import Register from '@/components/Register';
import Access from '@/components/Access';
import Footer from '@/components/Footer';
import AgeGate from '@/components/makoto/AgeGate';

export default function Home() {
  return (
    <>
      <AgeGate variant="distillery" />
      <div className="grain" aria-hidden="true"></div>
      <Nav />
      <Hero />
      <main>
        <Concept />
        <DistilleryBarShop />
        <ProductPreview />
        <News />
        <Register />
        <Access />
      </main>
      <Footer />
    </>
  );
}

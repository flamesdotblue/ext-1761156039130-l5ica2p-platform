import React from "react";
import Hero from "./components/Hero";
import ProductShowcase from "./components/ProductShowcase";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-950 via-emerald-900 to-black text-white">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-emerald-950/60 border-b border-emerald-800/30">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-500/30">
              <span className="text-2xl">🌱</span>
            </span>
            <div>
              <p className="font-semibold tracking-tight">Mythic Grass Co.</p>
              <p className="text-xs text-emerald-300/70">Luxury Photosynthesis</p>
            </div>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#features" className="text-emerald-100/80 hover:text-white">Features</a>
            <a href="#reviews" className="text-emerald-100/80 hover:text-white">Reviews</a>
            <a href="#buy" className="inline-flex items-center gap-2 rounded-md bg-emerald-500 px-4 py-2 font-medium text-black hover:bg-emerald-400 transition">
              Buy Now
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <ProductShowcase />
        <Reviews />
      </main>

      <Footer />
    </div>
  );
}

export default App;

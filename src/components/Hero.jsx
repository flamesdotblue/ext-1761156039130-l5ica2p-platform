import React from "react";
import { motion } from "framer-motion";
import { Rocket, Crown, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-30" aria-hidden>
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-500 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-lime-400 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-800/30 px-3 py-1 text-xs text-emerald-200/90">
            <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
            Limited Edition • Grown under three suns
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black tracking-tight sm:text-6xl">
            The Last Blade of Grass You'll Ever Need
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-emerald-100/80 text-lg">
            Hand-cultivated, metaphysically optimized, and cosmically manicured. Our Signature Supreme Grass redefines luxury landscaping.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              id="buy"
              href="#buy"
              onClick={(e) => {
                e.preventDefault();
                alert("Transaction initialized: $10,000,000 for 1 sq ft of Mythic Grass. Concierge will contact you telepathically.");
              }}
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-2px] hover:bg-emerald-400"
            >
              <Rocket className="h-5 w-5" /> Buy for $10,000,000
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-lg bg-white/5 px-6 py-3 font-semibold text-emerald-100 ring-1 ring-white/10 transition hover:bg-white/10"
            >
              <Crown className="h-5 w-5 text-emerald-300" /> Explore Features
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { Leaf, Crown, Shield, Sparkles } from "lucide-react";

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.4 }}
    className="rounded-xl border border-emerald-700/30 bg-emerald-900/30 p-5"
  >
    <div className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/10 ring-1 ring-emerald-500/30">
        <Icon className="h-5 w-5 text-emerald-300" />
      </span>
      <h3 className="font-semibold">{title}</h3>
    </div>
    <p className="mt-2 text-sm text-emerald-100/80">{desc}</p>
  </motion.div>
);

const ProductShowcase = () => {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl border border-emerald-700/30 bg-gradient-to-br from-emerald-800/50 to-emerald-900/50 p-8"
          >
            <div className="absolute right-[-30%] top-[-30%] h-[400px] w-[400px] rounded-full bg-emerald-500/20 blur-3xl" />
            <div className="absolute left-[-20%] bottom-[-20%] h-[300px] w-[300px] rounded-full bg-lime-400/20 blur-3xl" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs ring-1 ring-white/10">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" /> Signature Supreme Grass
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Engineered by Nature. Perfected by Legends.</h2>
              <p className="mt-3 text-emerald-100/80">
                Each blade is serenaded by concert violinists at dawn and calibrated to the golden ratio. Hydrated with glacier dew and starlight.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Feature
                  icon={Leaf}
                  title="Evergreen Immortality"
                  desc="Self-healing chlorophyll matrix. Remains vivid emerald in any climate, any season, any dimension."
                />
                <Feature
                  icon={Crown}
                  title="Monarch Grade Turf"
                  desc="Each square foot is individually crowned and audited by our Royal Groundskeepers Guild."
                />
                <Feature
                  icon={Shield}
                  title="Lifetime Sovereign Warranty"
                  desc="If a blade bends the wrong way, we dispatch a botanist and a poet within 24 hours."
                />
                <Feature
                  icon={Sparkles}
                  title="Self-Mowing Luminescence"
                  desc="Photosynthetic rhythm that trims itself at a flawless 2.5 cm while glowing faintly beneath moonlight."
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between rounded-2xl border border-emerald-700/30 bg-emerald-900/30 p-8"
          >
            <div>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-semibold">Price</h3>
                <span className="text-sm text-emerald-200/80">Per square foot</span>
              </div>
              <p className="mt-2 text-5xl font-black tracking-tight">$10,000,000</p>
              <p className="mt-2 text-sm text-emerald-200/80">Includes white-glove astrophysical installation and lifetime celestial maintenance.</p>

              <ul className="mt-6 space-y-3 text-sm text-emerald-100/90">
                <li className="flex items-start gap-2">
                  <span className="mt-1">✨</span>
                  Bespoke soil tuned to your horoscope and humidity.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">🪄</span>
                  Whisper-automation: grass compliments your footsteps.
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1">🛡️</span>
                  Anti-dandelion diplomatic treaty, signed and notarized.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="#buy"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Purchase request received. Our concierge botanists will arrive via zeppelin within the hour.");
                }}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-4 font-semibold text-black shadow-lg shadow-emerald-500/20 transition hover:translate-y-[-2px] hover:bg-emerald-400"
              >
                Secure Checkout — $10,000,000
              </a>
              <p className="mt-3 text-center text-xs text-emerald-200/70">Encrypted. Insured. Admired from space.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

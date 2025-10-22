import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const StarRow = () => (
  <div className="flex items-center gap-1 text-amber-300">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-amber-300 text-amber-300" />
    ))}
  </div>
);

const ReviewCard = ({ name, title, text }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    transition={{ duration: 0.4 }}
    className="h-full rounded-xl border border-emerald-700/30 bg-emerald-900/30 p-5"
  >
    <StarRow />
    <h4 className="mt-2 font-semibold">{title}</h4>
    <p className="mt-2 text-sm text-emerald-100/80">{text}</p>
    <p className="mt-4 text-xs text-emerald-200/70">— {name}</p>
  </motion.div>
);

const Reviews = () => {
  return (
    <section id="reviews" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-black tracking-tight">Customer Rapture</h3>
          <div className="flex items-center gap-2 text-sm text-emerald-200/80">
            <StarRow />
            <span>5.0 • 9,999 reviews</span>
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ReviewCard
            name="Ariana M., Planetary Architect"
            title="My lawn now hums in F major"
            text="Neighbors weep. Birds harmonize. Even my shadow looks richer. Worth every astronomical penny."
          />
          <ReviewCard
            name="Sir Basil III"
            title="Knighthood for my backyard"
            text="Upon installation, a tiny coronation ceremony occurred. Trumpets. Doves. Flawless blades."
          />
          <ReviewCard
            name="Dr. Nova Green, Botanist"
            title="Scientifically impossible and yet here it is"
            text="Chlorophyll signatures off the chart. Self-mowing photonic cycle verified. I am both baffled and in love."
          />
          <ReviewCard
            name="Lumi O., Composer"
            title="Grass that writes symphonies"
            text="Every dusk, a soft melody drifts across the yard. I've released three albums featuring my lawn."
          />
          <ReviewCard
            name="Atlas V., Voyager"
            title="Visible from orbit"
            text="Astronaut colleagues confirmed: a radiant emerald square on the night side of Earth. That's me."
          />
          <ReviewCard
            name="Mina Q., Minimalist"
            title="It sparked joy and photosynthesis"
            text="I sold everything else. All I need is this grass and a cup of dew. Enlightenment achieved."
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;

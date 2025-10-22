import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-emerald-800/30">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-emerald-200/70">© {new Date().getFullYear()} Mythic Grass Co. All natural, all mythical.</p>
          <div className="flex items-center gap-6 text-sm text-emerald-200/80">
            <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-white">Warranty</a>
            <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-white">Care Guide</a>
            <a href="#" onClick={(e)=>e.preventDefault()} className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

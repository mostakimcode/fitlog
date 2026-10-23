import logo from "@/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] py-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-4 text-sm text-white/50 sm:flex-row">
        <div className="flex items-center gap-2 text-white">
          <Image src={logo} alt="FitLog Logo" className="h-5 w-5" />
          <span className="font-bold tracking-wide">FITLOG</span>
        </div>

        <p>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
      </div>
    </footer>
  );
};

export default Footer;

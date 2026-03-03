import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="pointer-events-none absolute -top-16 -left-16 h-72 w-72 rounded-full bg-[#FA5B3B]/24 blur-3xl"></div>
      <div className="pointer-events-none absolute -top-14 right-10 h-64 w-64 rounded-full bg-[#FFCC00]/24 blur-3xl"></div>
      <div className="pointer-events-none absolute bottom-8 right-16 h-72 w-72 rounded-full bg-[#34C759]/22 blur-3xl"></div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[420px] w-[420px] md:h-[540px] md:w-[540px] rounded-full bg-white/28 blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto py-10">
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img 
            src="/logo.svg" 
            alt="Finderis logo" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg"
          />
        </div>
        
        {/* Pavadinimas su logotipo spalvomis */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 brand-title-gradient animate-fade-in">
          Finderis
        </h1>
        
        <p className="text-xl md:text-2xl text-[#1f3d52] mb-6 animate-fade-in font-semibold">
          Susipažink su lietuviais visame pasaulyje
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-2 animate-fade-in">
          <span className="rounded-full border border-[#FA5B3B]/35 bg-[#FA5B3B]/18 px-3 py-1 text-sm font-semibold text-[#8c3422]">
            Meilė
          </span>
          <span className="rounded-full border border-[#34C759]/35 bg-[#34C759]/18 px-3 py-1 text-sm font-semibold text-[#1d7c38]">
            Draugystė
          </span>
          <span className="rounded-full border border-[#FFCC00]/40 bg-[#FFCC00]/20 px-3 py-1 text-sm font-semibold text-[#6f5700]">
            Bendraminčiai
          </span>
        </div>
        
        <p className="text-lg md:text-xl text-[#24465e] mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Finderis skirtas lietuviams visame pasaulyje susipažinti, bendrauti ir kurti tikrus ryšius.
          Rask meilę, draugų ir bendraminčių saugiu, paprastu ir veiksmingu būdu.
        </p>
        
        {/* Mygtukai su atnaujintomis spalvomis */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#FA5B3B] via-[#FFCC00] to-[#34C759] hover:brightness-95 text-[#17384d] px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/60"
            asChild
          >
            <a 
              href="https://play.google.com/store/apps/details?id=com.pinderis.online" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Play className="mr-3 h-6 w-6" />
              Google Play
            </a>
          </Button>
        </div>
        
        {/* Papildomas dekoratyvinis elementas */}
        <div className="mt-16 flex justify-center space-x-3">
          <div className="w-3 h-3 bg-[#2D526B] rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-[#FA5B3B] rounded-full animate-pulse animation-delay-200"></div>
          <div className="w-3 h-3 bg-[#34C759] rounded-full animate-pulse animation-delay-400"></div>
          <div className="w-3 h-3 bg-[#FFCC00] rounded-full animate-pulse animation-delay-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

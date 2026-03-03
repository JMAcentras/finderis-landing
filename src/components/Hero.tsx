import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Atnaujintas fonas su logotipo spalvomis */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 via-orange-50/30 to-green-50/40"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-teal-200/25 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-green-200/30 rounded-full blur-2xl"></div>
      <div className="absolute top-1/3 right-1/4 w-28 h-28 bg-teal-300/20 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src="/logo.svg" 
            alt="Finderis logo" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg"
          />
        </div>
        
        {/* Pavadinimas su logotipo spalvomis */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-teal-600 via-orange-500 to-green-600 bg-clip-text text-transparent animate-fade-in">
          Finderis
        </h1>
        
        <p className="text-xl md:text-2xl text-teal-700 mb-4 animate-fade-in font-light">
          Rask savo tikrąją meilę
        </p>
        
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in">
          Išmanus pažinčių taikomoji programa, kuri jungia širdis ir kuria tikrus ryšius. 
          Saugus, paprastas ir veiksmingus būdas rasti savo gyvenimo žmogų.
        </p>
        
        {/* Mygtukai su atnaujintomis spalvomis */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
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
          <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse animation-delay-200"></div>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse animation-delay-400"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

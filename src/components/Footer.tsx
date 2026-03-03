import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-gradient-to-r from-[#1d3c51] via-[#2D526B] to-[#1f465d] text-white py-12 px-4 border-t border-[#24465e]/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8">
          <div className="lg:max-w-md">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.svg" 
                alt="Finderis logo" 
                className="w-8 h-8 mr-3"
              />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-[#FA5B3B] via-[#FFCC00] to-[#34C759] bg-clip-text text-transparent">
                Finderis
              </h3>
            </div>
            <p className="text-[#d7e8f2] mb-6">
              {t('footerDescription')}
            </p>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#d7e8f2]">{t('followUs')}:</span>
              <a 
                href="https://instagram.com/finderis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d7e8f2] hover:text-[#FA5B3B] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/finderis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#d7e8f2] hover:text-[#34C759] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          {/* Legal Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm">
            <Link 
              to="/" 
              className="text-[#d7e8f2] hover:text-[#FFCC00] transition-colors font-medium"
            >
              {t('home')}
            </Link>
            <Link 
              to="/privacy" 
              className="text-[#d7e8f2] hover:text-[#FA5B3B] transition-colors font-medium"
            >
              {t('privacy')}
            </Link>
            <Link 
              to="/terms" 
              className="text-[#d7e8f2] hover:text-[#34C759] transition-colors font-medium"
            >
              {t('terms')}
            </Link>
            <Link 
              to="/delete-account" 
              className="text-[#d7e8f2] hover:text-[#FA5B3B] transition-colors font-medium"
            >
              {t('deleteAccount')}
            </Link>
            <Link 
              to="/child-safety" 
              className="text-[#d7e8f2] hover:text-[#FFCC00] transition-colors font-medium"
            >
              {t('childSafety')}
            </Link>
            <Link 
              to="/community-guidelines" 
              className="text-[#d7e8f2] hover:text-[#34C759] transition-colors font-medium"
            >
              {t('communityGuidelines')}
            </Link>
            <Link 
              to="/content-moderation" 
              className="text-[#d7e8f2] hover:text-[#FFCC00] transition-colors font-medium"
            >
              {t('contentModeration')}
            </Link>
            <Link 
              to="/support" 
              className="text-[#d7e8f2] hover:text-[#FA5B3B] transition-colors font-medium"
            >
              {t('support')}
            </Link>
          </div>
        </div>
        
        <div className="border-t border-[#4c6d84] mt-8 pt-8 text-center text-[#d7e8f2]">
          <p>&copy; 2025 Finderis. {t('allRightsReserved')}</p>
          
          {/* Dekoratyvinis elementas su logotipo spalvomis */}
          <div className="mt-4 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-[#FA5B3B] rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-[#FFCC00] rounded-full opacity-80"></div>
            <div className="w-2 h-2 bg-[#34C759] rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

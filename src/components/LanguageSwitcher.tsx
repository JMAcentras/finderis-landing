import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2 brand-panel rounded-lg px-2 py-1">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage('lt')}
        className={`min-w-[50px] font-semibold ${language === 'lt' ? 'bg-[#2D526B] text-white border-[#2D526B] hover:bg-[#24465e] hover:text-white' : 'bg-white/70 text-[#1f3d52] border-[#2D526B]/30 hover:bg-white hover:text-[#1f3d52]'}`}
      >
        LT
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setLanguage('en')}
        className={`min-w-[50px] font-semibold ${language === 'en' ? 'bg-[#2D526B] text-white border-[#2D526B] hover:bg-[#24465e] hover:text-white' : 'bg-white/70 text-[#1f3d52] border-[#2D526B]/30 hover:bg-white hover:text-[#1f3d52]'}`}
      >
        EN
      </Button>
    </div>
  );
};

export default LanguageSwitcher;

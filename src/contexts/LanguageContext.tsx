import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'lt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  lt: {
    // Navigation
    home: 'Pagrindinis',
    privacy: 'Privatumo politika',
    terms: 'Naudojimo taisyklės',
    deleteAccount: 'Ištrinti paskyrą',
    childSafety: 'Vaikų saugumas',
    communityGuidelines: 'Bendruomenės taisyklės',
    contentModeration: 'Turinio moderavimas',
    support: 'Pagalba ir kontaktai',
    
    // Footer
    footerDescription: 'Finderis skirtas lietuviams visame pasaulyje - čia galite rasti meilę, draugų ir bendraminčių bei kurti tikrus ryšius.',
    allRightsReserved: 'Visos teisės saugomos.',
    followUs: 'Sekite mus',
    
    // Common
    backToHome: 'Grįžti į pagrindinį',
    lastUpdated: 'Paskutinį kartą atnaujinta',
    contactUs: 'Susisiekite su mumis',
    email: 'El. paštas',
    
    // Specific page titles
    privacyPolicyTitle: 'Privatumo politika',
    termsOfServiceTitle: 'Naudojimo taisyklės',
    deleteAccountTitle: 'Paskyros ištrynimo prašymas',
    childSafetyTitle: 'Vaikų saugumo politika',
    communityGuidelinesTitle: 'Bendruomenės taisyklės',
    contentModerationTitle: 'Turinio moderavimo atskleidimas',
    supportTitle: 'Pagalba ir kontaktai'
  },
  en: {
    // Navigation
    home: 'Home',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    deleteAccount: 'Delete Account',
    childSafety: 'Child Safety',
    communityGuidelines: 'Community Guidelines',
    contentModeration: 'Content Moderation',
    support: 'Support & Contact',
    
    // Footer
    footerDescription: 'Finderis is built for Lithuanians worldwide to find love, friends, and like-minded people, and to build genuine relationships.',
    allRightsReserved: 'All rights reserved.',
    followUs: 'Follow us',
    
    // Common
    backToHome: 'Back to Home',
    lastUpdated: 'Last updated',
    contactUs: 'Contact us',
    email: 'Email',
    
    // Specific page titles
    privacyPolicyTitle: 'Privacy Policy',
    termsOfServiceTitle: 'Terms of Service',
    deleteAccountTitle: 'Delete Account Request',
    childSafetyTitle: 'Child Safety Policy',
    communityGuidelinesTitle: 'Community Guidelines',
    contentModerationTitle: 'Content Moderation Disclosure',
    supportTitle: 'Support & Contact'
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('lt');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['lt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

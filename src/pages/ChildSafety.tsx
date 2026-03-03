import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const ChildSafety = () => {
  const { t, language } = useLanguage();

  const content = {
    lt: {
      sections: [
        {
          title: "1. Amžiaus reikalavimai",
          content: `Finderis skirta tik suaugusiems žmonėms. Mūsų paslauga nėra skirta asmenims iki 18 metų. Mes griežtai draudžiame nepilnamečiams registruotis mūsų platformoje.

Jei sužinome, kad nepilnametis sukūrė paskyrą, ji bus nedelsiant ištrinta, o duomenys - pašalinti iš mūsų sistemų.`
        },
        {
          title: "2. Amžiaus patvirtinimo procedūros",
          content: `Registracijos metu visi naudotojai turi patvirtinti, kad yra sulaukę 18 metų.

Mes pasiliekame teisę prašyti papildomų amžiaus patvirtinimo dokumentų bet kuriuo metu.

Naudojame automatizuotas sistemas amžiaus tikrinimui ir nepilnamečių aptikimui.`
        },
        {
          title: "3. Pranešimas apie nepilnamečius",
          content: `Jei pastebite, kad platformoje yra nepilnametis naudotojas, nedelsiant praneškite mums:
          
• El. paštu: surask@antrapuse.lt
• Naudodami pranešimo funkciją programėlėje
• Skambindami pagalbos tarnybai

Visi pranešimai bus išnagrinėti per 24 valandas.`
        },
        {
          title: "4. Tėvų ir globėjų informacija",
          content: `Jei esate tėvas ar globėjas ir sužinote, kad jūsų vaikas naudoja Finderis, kreipkitės į mus nedelsiant.

Suteikiame informaciją ir išteklius tėvams apie interneto saugumą ir pažinčių programėlių rizikas.

Bendradarbiaujame su tėvais siekdami apsaugoti nepilnamečius.`
        },
        {
          title: "5. Saugos priemonės",
          content: `• Automatizuotas amžiaus tikrinimas
• Profilių stebėjimas ir analizė
• Greitas reagavimas į pranešimus
• Bendradarbiavimas su teisėsaugos institucijomis
• Nuolatinis darbuotojų mokymas vaikų saugos klausimais`
        }
      ]
    },
    en: {
      sections: [
        {
          title: "1. Age Requirements",
          content: `Finderis is exclusively for adults. Our service is not intended for individuals under 18 years of age. We strictly prohibit minors from registering on our platform.

If we discover that a minor has created an account, it will be immediately deleted and their data removed from our systems.`
        },
        {
          title: "2. Age Verification Procedures",
          content: `During registration, all users must confirm they are 18 years or older.

We reserve the right to request additional age verification documents at any time.

We use automated systems for age verification and minor detection.`
        },
        {
          title: "3. Reporting Minors",
          content: `If you notice a minor user on the platform, report it to us immediately:
          
• Email: surask@antrapuse.lt
• Using the in-app reporting feature
• Calling our support hotline

All reports will be investigated within 24 hours.`
        },
        {
          title: "4. Information for Parents and Guardians",
          content: `If you are a parent or guardian and discover your child is using Finderis, contact us immediately.

We provide information and resources for parents about internet safety and dating app risks.

We collaborate with parents to protect minors.`
        },
        {
          title: "5. Safety Measures",
          content: `• Automated age verification
• Profile monitoring and analysis
• Rapid response to reports
• Cooperation with law enforcement
• Ongoing staff training on child safety issues`
        }
      ]
    }
  };

  return (
    <div className="brand-legal-page">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center brand-back-link font-semibold"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 brand-title-gradient">{t('childSafetyTitle')}</h1>
          <p className="text-[#24465e]/85 font-medium">{t('lastUpdated')}: 2025 m. sausio 1 d.</p>
        </div>
        
        <div className="brand-legal-card p-8 md:p-12 space-y-8">
          {content[language].sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold brand-section-title mb-4">{section.title}</h2>
              <div className="text-[#24465e] leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}
          
          <section className="brand-alert-callout p-6">
            <h2 className="text-2xl font-bold brand-alert-text mb-4">
              {language === 'lt' ? 'Skubūs pranešimai' : 'Emergency Reports'}
            </h2>
            <p className="brand-alert-text leading-relaxed">
              {language === 'lt' 
                ? 'Jei manote, kad vaikas yra pavojuje, nedelsiant kreipkitės į vietines skubios pagalbos ir policijos tarnybas. Mūsų komanda taip pat prieinama 24/7 adresu surask@antrapuse.lt ir telefonu +37069977779.'
                : 'If you believe a child is in immediate danger, contact local emergency services or police immediately. Our team is also available 24/7 at surask@antrapuse.lt and phone +37069977779'
              }
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ChildSafety;

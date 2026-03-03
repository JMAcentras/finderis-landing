
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Privacy = () => {
  const { t, language } = useLanguage();

  const content = {
    lt: {
      sections: [
        {
          title: "1. Informacijos rinkimas",
          content: `Finderis renka informaciją, kurią pateikiate registruodamiesi ir naudodamiesi mūsų paslauga:

• Profilio informacija (vardas, amžius, nuotraukos, aprašymas)
• Kontaktinė informacija (el. paštas, telefono numeris)
• Vietovės duomenys (su jūsų sutikimu)
• Bendravimo duomenys programėlėje`
        },
        {
          title: "2. Informacijos naudojimas",
          content: `Jūsų duomenis naudojame šiems tikslams:

• Pateikti ir tobulinti mūsų paslaugas
• Rodyti tinkamus partnerius pagal jūsų pomėgius
• Užtikrinti saugumą ir apsaugą nuo sukčiavimo
• Komunikuoti su jumis dėl paskyros ir paslaugų`
        },
        {
          title: "3. Informacijos apsauga",
          content: `Naudojame industrijoje pripažintus saugumo standartus jūsų duomenų apsaugai. Jūsų asmeninė informacija yra šifruojama ir saugoma saugiose duomenų bazėse. Prieigą prie duomenų turi tik įgalioti darbuotojai.`
        },
        {
          title: "4. Duomenų dalijimasis",
          content: `Mes neparduodame ir neperduodame jūsų asmeninių duomenų trečiosioms šalims be jūsų aiškaus sutikimo, išskyrus teisės aktų reikalavimus ar saugumo tikslus.`
        },
        {
          title: "5. Jūsų teisės",
          content: `Jūs turite teisę:

• Peržiūrėti savo duomenis
• Prašyti duomenų taisymo
• Ištrinti savo paskyrą ir duomenis
• Atšaukti sutikimą duomenų tvarkymui`
        },
        {
          title: "6. Kontaktai",
          content: `Dėl klausimų apie privatumo politiką kreipkitės: surask@antrapuse.lt`
        }
      ]
    },
    en: {
      sections: [
        {
          title: "1. Information Collection",
          content: `Finderis collects information you provide when registering and using our service:

• Profile information (name, age, photos, description)
• Contact information (email, phone number)
• Location data (with your consent)
• Communication data within the app`
        },
        {
          title: "2. Use of Information",
          content: `We use your data for these purposes:

• Provide and improve our services
• Show suitable partners based on your preferences
• Ensure security and fraud protection
• Communicate with you about your account and services`
        },
        {
          title: "3. Information Protection",
          content: `We use industry-recognized security standards to protect your data. Your personal information is encrypted and stored in secure databases. Only authorized employees have access to the data.`
        },
        {
          title: "4. Data Sharing",
          content: `We do not sell or transfer your personal data to third parties without your explicit consent, except as required by law or for security purposes.`
        },
        {
          title: "5. Your Rights",
          content: `You have the right to:

• Review your data
• Request data correction
• Delete your account and data
• Withdraw consent for data processing`
        },
        {
          title: "6. Contact",
          content: `For questions about our privacy policy, contact: surask@antrapuse.lt`
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
          <h1 className="text-4xl font-bold mb-4 brand-title-gradient">{t('privacyPolicyTitle')}</h1>
          <p className="text-[#24465e]/85 font-medium">{t('lastUpdated')}: 2026 m. sausio 1 d.</p>
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
        </div>
      </div>
    </div>
  );
};

export default Privacy;

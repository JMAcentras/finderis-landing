import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const ContentModeration = () => {
  const { t, language } = useLanguage();

  const content = {
    lt: {
      sections: [
        {
          title: "1. Automatizuotas turinio tikrinimas",
          content: `Mes naudojame pažangias technologijas turinio moderavimui:

• Dirbtinio intelekto algoritmai nuotraukų analizei
• Automatinis teksto tikrinimas dėl netinkamo turinio
• Realaus laiko pranešimų apdorojimas
• Šablonų atpažinimas sukčiavimo aptikimui`
        },
        {
          title: "2. Žmogaus moderatoriai",
          content: `Mūsų profesionalių moderatorių komanda:

• Dirba 24/7 režimu
• Išnagrinėja sudėtingesnius atvejus
• Priima galutinį sprendimą dėl paskyros blokavimo
• Nuolat tobulina moderavimo procesus
• Gauna specializuotą mokymą vaikų saugos klausimais`
        },
        {
          title: "3. Pranešimų apdorojimo procesas",
          content: `Kai gaunamas pranešimas:

1. Automatinis pradinės informacijos surinkimas (< 1 min)
2. Skubių atvejų identifikavimas ir prioritizavimas (< 5 min)
3. Detalus moderatoriaus tyrimas (< 24 val.)
4. Sprendimo priėmimas ir vykdymas
5. Pranešimo autoriaus informavimas apie veiksmus`
        },
        {
          title: "4. Moderavimo kriterijai",
          content: `Turinys šalinamas, jei:

• Pažeidžia mūsų bendruomenės taisykles
• Yra seksualaus pobūdžio (nuogybės, pornografija)
• Skatina smurtą ar patyčias
• Yra sukčiavimo ar spam pobūdžio
• Pažeidžia autorių teises
• Yra rasistinio ar diskriminacinio pobūdžio`
        },
        {
          title: "5. Apeliacijų procesas",
          content: `Jei manote, kad jūsų turinys buvo pašalintas klaidingai:

• Pateikite apeliaciją per programėlę arba el. paštu
• Nurodykite konkrečius argumentus
• Pridėkite papildomą kontekstą, jei reikia
• Apeliacija bus išnagrinėta per 72 valandas
• Gausite išsamų atsakymą su sprendimo priežastimis`
        },
        {
          title: "6. Duomenų saugojimas",
          content: `• Pašalinto turinio kopijos saugomos 90 dienų (tyrimo tikslais)
• Pranešimų istorija saugoma 2 metus
• Moderavimo sprendimai dokumentuojami
• Visa informacija šifruojama ir saugoma saugiose sistemose`
        }
      ]
    },
    en: {
      sections: [
        {
          title: "1. Automated Content Screening",
          content: `We use advanced technologies for content moderation:

• AI algorithms for photo analysis
• Automatic text screening for inappropriate content
• Real-time report processing
• Pattern recognition for fraud detection`
        },
        {
          title: "2. Human Moderators",
          content: `Our professional moderation team:

• Works 24/7
• Reviews complex cases
• Makes final decisions on account suspensions
• Continuously improves moderation processes
• Receives specialized training on child safety issues`
        },
        {
          title: "3. Report Processing Procedure",
          content: `When a report is received:

1. Automatic initial information gathering (< 1 min)
2. Urgent case identification and prioritization (< 5 min)
3. Detailed moderator investigation (< 24 hours)
4. Decision making and implementation
5. Notifying the reporter about actions taken`
        },
        {
          title: "4. Moderation Criteria",
          content: `Content is removed if it:

• Violates our community guidelines
• Is sexual in nature (nudity, pornography)
• Promotes violence or bullying
• Is fraudulent or spam
• Violates copyright
• Is racist or discriminatory`
        },
        {
          title: "5. Appeals Process",
          content: `If you believe your content was wrongly removed:

• Submit an appeal through the app or email
• Provide specific arguments
• Include additional context if needed
• Appeals are reviewed within 72 hours
• You'll receive a detailed response with reasoning`
        },
        {
          title: "6. Data Retention",
          content: `• Copies of removed content are stored for 90 days (investigation purposes)
• Report history is kept for 2 years
• Moderation decisions are documented
• All information is encrypted and stored in secure systems`
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('contentModerationTitle')}</h1>
          <p className="text-gray-600">{t('lastUpdated')}: 2025 m. sausio 1 d.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-yellow-800 leading-relaxed">
              {language === 'lt' 
                ? 'Mes įsipareigojame užtikrinti saugią ir malonią aplinką visiems Finderis naudotojams. Šis dokumentas atskleidžia, kaip moderuojame turinį mūsų platformoje.'
                : 'We are committed to ensuring a safe and enjoyable environment for all Finderis users. This document discloses how we moderate content on our platform.'
              }
            </p>
          </div>

          {content[language].sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
              <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                {section.content}
              </div>
            </section>
          ))}

          <section className="bg-orange-50 border border-orange-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">
              {language === 'lt' ? 'Kontaktai' : 'Contact'}
            </h2>
            <p className="text-orange-700 leading-relaxed">
              {language === 'lt' 
                ? 'Dėl klausimų apie turinio moderavimą: surask@antrapuse.lt'
                : 'For questions about content moderation: surask@antrapuse.lt'
              }
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ContentModeration;

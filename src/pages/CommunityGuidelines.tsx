import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const CommunityGuidelines = () => {
  const { t, language } = useLanguage();

  const content = {
    lt: {
      sections: [
        {
          title: "1. Pagarba ir mandagumas",
          content: `• Elgkitės su visais naudotojais pagarbiai ir mandagiai
• Nepriimtinas bet koks diskriminavimas dėl rasės, lyties, amžiaus, religijos ar kitų savybių
• Draudžiamas patyčių, grasinimų ar šmeižto turinys
• Gerbkite kitų nuomonę ir pasirinkimus`
        },
        {
          title: "2. Profilio taisyklės",
          content: `• Naudokite tik savo tikras nuotraukas
• Pateikite teisingą informaciją apie save
• Draudžiamos nuogos arba seksualiai provokuojančios nuotraukos
• Nekelkite reklaminio ar komercinių tikslų turinys
• Draudžiamos kitų asmenų nuotraukos be jų sutikimo`
        },
        {
          title: "3. Bendravimo taisyklės",
          content: `• Neklauskite asmeninės finansinės informacijos
• Nepprašykite pinigų ar dovanų
• Gerbkite kitų privatumą
• Nedalinkitės kitų asmeninės informacijos
• Draudžiamas seksualinis turinys ar pasiūlymai pirmųjų žinučių metu`
        },
        {
          title: "4. Draudžiami veiksmai",
          content: `• Sukčiavimas ar apgaudinėjimas
• Apsimetimas kitu asmeniu
• Spamų siuntimas
• Komercinės veiklos vykdymas
• Narkotikų ar kitų nelegaliųjų medžiagų reklamavimas
• Patyčių ar grasinimų turinys`
        },
        {
          title: "5. Pranešimas apie pažeidimus",
          content: `Jei pastebite taisyklių pažeidimą:
• Naudokite pranešimo funkciją programėlėje
• Rašykite mums adresu: surask@antrapuse.lt
• Pateikite kuo daugiau informacijos apie problemą

Visi pranešimai bus išnagrinėti per 24 valandas.`
        },
        {
          title: "6. Pasekmės už pažeidimus",
          content: `• Pirmas pažeidimas: Perspėjimas
• Kartotiniai pažeidimai: Laikinas blokavimas
• Sunkūs pažeidimai: Nuolatinis paskyros šalinimas
• Neteisėta veikla: Pranešimas teisėsaugos institucijoms`
        }
      ]
    },
    en: {
      sections: [
        {
          title: "1. Respect and Courtesy",
          content: `• Treat all users with respect and courtesy
• Any discrimination based on race, gender, age, religion, or other characteristics is unacceptable
• Bullying, threats, or defamatory content is prohibited
• Respect others' opinions and choices`
        },
        {
          title: "2. Profile Guidelines",
          content: `• Use only your real photos
• Provide accurate information about yourself
• Nude or sexually provocative photos are prohibited
• Do not post advertising or commercial content
• Using others' photos without consent is prohibited`
        },
        {
          title: "3. Communication Rules",
          content: `• Do not ask for personal financial information
• Do not request money or gifts
• Respect others' privacy
• Do not share others' personal information
• Sexual content or propositions in initial messages are prohibited`
        },
        {
          title: "4. Prohibited Actions",
          content: `• Fraud or deception
• Impersonating another person
• Sending spam
• Conducting commercial activities
• Advertising drugs or other illegal substances
• Bullying or threatening content`
        },
        {
          title: "5. Reporting Violations",
          content: `If you notice a rule violation:
• Use the in-app reporting feature
• Email us at: surask@antrapuse.lt
• Provide as much information about the issue as possible

All reports will be investigated within 24 hours.`
        },
        {
          title: "6. Consequences for Violations",
          content: `• First violation: Warning
• Repeated violations: Temporary suspension
• Serious violations: Permanent account removal
• Illegal activity: Report to law enforcement`
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
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t('communityGuidelinesTitle')}</h1>
          <p className="text-gray-600">{t('lastUpdated')}: 2025 m. sausio 1 d.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <p className="text-blue-800 leading-relaxed">
              {language === 'lt' 
                ? 'Šios taisyklės padeda mums išlaikyti saugią, pagarbią ir malonią bendruomenę visiems Finderis naudotojams. Prašome jas atidžiai perskaityti ir laikytis.'
                : 'These guidelines help us maintain a safe, respectful, and enjoyable community for all Finderis users. Please read them carefully and follow them.'
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
        </div>
      </div>
    </div>
  );
};

export default CommunityGuidelines;

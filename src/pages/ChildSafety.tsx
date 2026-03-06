import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const ChildSafety = () => {
  const { t, language } = useLanguage();

  const updatedDates = {
    en: "February 3, 2026",
    lt: "2026 m. vasario 3 d.",
  };

  const pageTitles = {
    en: "Child Safety and Protection Policy for Finderis",
    lt: "Finderis vaikų saugumo ir apsaugos politika",
  };

  const policies = {
    en: {
      sections: [
        {
          title: "Introduction",
          content: `At Finderis, the safety and wellbeing of all users - especially minors - is a top priority. This Child Safety and Protection Policy explains how our application actively prohibits child sexual abuse and exploitation (CSAE), describes our reporting mechanisms, and provides contact information for child safety concerns.

This policy applies specifically to the Finderis application as published on Google Play.`,
        },
        {
          title: "1. Prohibition of Child Sexual Abuse and Exploitation (CSAE)",
          content: `Finderis strictly and unequivocally prohibits any form of child sexual abuse, exploitation, or sexual content involving minors.
This includes, but is not limited to:

• Any sexual activity involving individuals under the age of 18.
• Posting, sharing, or distributing sexualized content involving minors.
• Soliciting, facilitating, or supporting exploitative behavior toward minors.

Any violation of this policy will result in immediate action, including suspension or termination of accounts and reporting to appropriate authorities.`,
        },
        {
          title: "2. Report Abuse and Safety Mechanisms (In-App)",
          content: `• Users can report a profile, message, or content via the "Report" button.
• We aim to review reports within 24 hours; confirmed violations result in content removal, account suspension/termination, and escalation where required by law.
• Users can also block other users to immediately end contact.`,
        },
        {
          title: "2A. Handling CSAM (Child Sexual Abuse Material)",
          content: `Finderis enforces zero tolerance for CSAM. Upon actual knowledge (e.g., user report, moderation detection, or other credible signal), we take immediate action: (1) remove content or disable access, (2) suspend or terminate related accounts, (3) preserve necessary information for investigation where lawful, and (4) report to appropriate authorities as required by law.`,
        },
        {
          title: "Reporting to Authorities",
          content: `When CSAM is confirmed, we report to the responsible authority based on jurisdiction (e.g., in the U.S., the National Center for Missing & Exploited Children (NCMEC); elsewhere, the competent regional or national authority). We also cooperate with law enforcement when required by law.`,
        },
        {
          title: "2B. Preventing Minors (18+)",
          content: `Finderis is strictly for adults 18+. We use safeguards to reduce underage access, including an age‑gate at registration, active report review, and account actions when underage use is suspected. We also use AI-based age estimation/detection to flag potential minors. If we suspect a user is underage, we may temporarily suspend the account and request additional age verification; if not confirmed, the account is terminated.`,
        },
        {
          title: "3. Dedicated Child Safety Contact",
          content: `If you have questions, concerns, or need to report a child safety issue outside the in-app reporting system, please contact our child safety point of contact:

Email: child-safety@paiir.net
(Subject line: Child Safety Concern)

We aim to respond to credible reports within 24 hours. Please include: (1) profile ID/link, (2) screenshots, (3) brief description, (4) date/time and (if known) country.`,
        },
        {
          title: "4. Legal Compliance",
          content: `Finderis complies with all applicable international, national, and local laws and regulations related to child safety and protection.
This includes, but is not limited to:

• Laws against child sexual abuse and exploitation.
• Requirements for reporting illegal content to authorities.
• Any applicable data protection and privacy regulations involving minors.

Where specific laws apply, they are followed in accordance with legal requirements.`,
        },
        {
          title: "5. Scope and Applicability",
          content: `This policy:

• Applies to all users of Finderis (18+ per app rules).
• Is accessible publicly on our website: https://finderis.paiir.net/child-safety
• May be updated from time to time to reflect changes in legal requirements or platform standards.`,
        },
        {
          title: "6. Commitment to a Safe Platform",
          content: `At Finderis, we are committed to maintaining a platform that is safe, respectful, and free from exploitation. We expect all users to comply with these standards and to help us maintain a safe environment for everyone.

If you see something concerning, please report it immediately using the in-app tools or via email.`,
        },
      ],
    },
    lt: {
      sections: [
        {
          title: "Įvadas",
          content: `Finderis visų naudotojų - ypač nepilnamečių - saugumas ir gerovė yra prioritetas. Ši Vaikų saugumo ir apsaugos politika paaiškina, kaip mūsų programėlė aktyviai draudžia vaikų seksualinę prievartą ir išnaudojimą (CSAE), aprašo pranešimo mechanizmus ir pateikia kontaktinę informaciją su vaikų sauga susijusiems klausimams.

Ši politika taikoma konkrečiai Finderis programėlei, skelbiamai Google Play.`,
        },
        {
          title: "1. Nulinė tolerancija vaikų seksualinei prievartai ir išnaudojimui (CSAE)",
          content: `Finderis griežtai ir nedviprasmiškai draudžia bet kokią vaikų seksualinės prievartos, išnaudojimo ar seksualinio turinio su nepilnamečiais formą.
Tai apima, bet neapsiriboja:

• Bet kokia seksualinė veikla, kurioje dalyvauja asmenys iki 18 metų.
• Seksualizuoto turinio su nepilnamečiais skelbimas, dalijimasis ar platinimas.
• Nepilnamečių išnaudojimą skatinantis, palengvinantis ar palaikantis elgesys.

Bet koks šios politikos pažeidimas lems neatidėliotinus veiksmus, įskaitant paskyrų sustabdymą ar nutraukimą ir pranešimą atitinkamoms institucijoms.`,
        },
        {
          title: "2. Pranešimų ir saugos mechanizmai (programėlėje)",
          content: `• Naudotojai gali pranešti apie profilį, žinutę ar turinį per mygtuką „Pranešti".
• Pranešimus siekiame peržiūrėti per 24 valandas; patvirtinus pažeidimą taikomas turinio pašalinimas, paskyrų sustabdymas / nutraukimas ir eskalavimas, kai to reikalauja įstatymai.
• Naudotojai taip pat gali blokuoti kitus naudotojus, kad iš karto nutrauktų kontaktą.`,
        },
        {
          title: "2A. CSAM (vaikų seksualinės prievartos medžiagos) tvarkymas",
          content: `Finderis taiko nulinę toleranciją CSAM. Gavę faktinį sužinojimą (pvz., naudotojo pranešimą, moderavimo metu aptiktą turinį ar kitą patikimą signalą), nedelsdami imamės veiksmų: (1) pašaliname turinį arba apribojame prieigą, (2) sustabdome ar nutraukiame susijusias paskyras, (3) išsaugome reikalingą informaciją tyrimui (kai tai leidžia teisė), (4) pranešame atitinkamoms institucijoms pagal taikomą teisę.`,
        },
        {
          title: "Pranešimas institucijoms",
          content: `Patvirtinus CSAM, pranešame atsakingai institucijai pagal jurisdikciją (pvz., JAV – National Center for Missing & Exploited Children (NCMEC), kitais atvejais – kompetentingai regioninei / nacionalinei institucijai). Taip pat bendradarbiaujame su teisėsauga, kai to reikalauja įstatymai.`,
        },
        {
          title: "2B. Nepilnamečių prevencija (18+)",
          content: `Finderis skirta tik 18+ asmenims. Registracijos ir naudojimo metu taikome priemones, skirtas mažinti nepilnamečių patekimą: amžiaus patvirtinimo ekranas (age-gate), aktyvus pranešimų nagrinėjimas ir paskyrų veiksmų taikymas įtarus nepilnametystę. Taip pat naudojame AI priemones automatiniam amžiaus nustatymui / įvertinimui. Jei įtariame, kad naudotojas yra nepilnametis, galime laikinai sustabdyti paskyrą ir paprašyti papildomos informacijos amžiui patvirtinti; nepatvirtinus – paskyra nutraukiama.`,
        },
        {
          title: "3. Vaikų saugos kontaktas",
          content: `Jei turite klausimų, susirūpinimų arba norite pranešti apie vaiko saugumo problemą ne per programėlės pranešimų sistemą, susisiekite su mūsų vaikų saugos kontaktu:

El. paštas: child-safety@paiir.net
(Tema: Child Safety Concern)

Į patikimus pranešimus siekiame atsakyti per 24 valandas. Prašome pateikti: (1) profilio ID / nuorodą, (2) ekrano nuotraukas, (3) trumpą aprašymą, (4) datą / laiką ir (jei žinoma) šalį.`,
        },
        {
          title: "4. Teisinė atitiktis",
          content: `Finderis laikosi visų taikomų tarptautinių, nacionalinių ir vietos įstatymų bei reglamentų, susijusių su vaikų sauga ir apsauga.
Tai apima, bet neapsiriboja:

• Įstatymai prieš vaikų seksualinę prievartą ir išnaudojimą.
• Reikalavimai pranešti apie neteisėtą turinį valdžios institucijoms.
• Bet kokie taikomi nepilnamečių duomenų apsaugos ir privatumo reikalavimai.

Kai taikomi konkretūs įstatymai, jų laikomasi pagal teisės aktų reikalavimus.`,
        },
        {
          title: "5. Taikymo sritis",
          content: `Ši politika:

• Taikoma visiems Finderis naudotojams (18+ pagal programėlės taisykles).
• Viešai prieinama mūsų svetainėje: https://finderis.paiir.net/child-safety
• Gali būti atnaujinama, atsižvelgiant į teisinių reikalavimų ar platformų standartų pokyčius.`,
        },
        {
          title: "6. Įsipareigojimas saugiai platformai",
          content: `Finderis siekia užtikrinti saugią, pagarbią ir nuo išnaudojimo laisvą platformą. Tikimės, kad visi naudotojai laikysis šių standartų ir padės mums palaikyti saugią aplinką visiems.

Jei pastebite ką nors įtartino, nedelsdami praneškite per programėlės įrankius arba el. paštu.`,
        },
      ],
    },
  };

  const policy = policies[language];

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
          <h1 className="text-4xl font-bold mb-4 brand-title-gradient">{pageTitles[language]}</h1>
          <p className="text-[#24465e]/85 font-medium">{t('lastUpdated')}: {updatedDates[language]}</p>
        </div>

        <div className="brand-legal-card p-8 md:p-12 space-y-8">
          {policy.sections.map((section, index) => (
            <section key={`${language}-${index}`}>
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

export default ChildSafety;

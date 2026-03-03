
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
  return (
    <div className="brand-legal-page">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center brand-back-link font-semibold mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Grįžti į pagrindinį
          </Link>
          <h1 className="text-4xl font-bold mb-4 brand-title-gradient">Naudojimo taisyklės</h1>
          <p className="text-[#24465e]/85 font-medium">Paskutinį kartą atnaujinta: 2025 m. sausio 1 d.</p>
        </div>
        
        <div className="brand-legal-card p-8 md:p-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">1. Paslaugos aprašymas</h2>
            <p className="text-[#24465e] leading-relaxed">
              Finderis yra pažinčių mobilioji programėlė, skirta padėti žmonėms rasti prasmingus ryšius. 
              Mūsų platforma naudoja išmaniuosius algoritmus, kad suderinti vartotojus pagal jų pomėgius, 
              vertybes ir vietovę.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">2. Registracija ir paskyra</h2>
            <div className="space-y-4 text-[#24465e]">
              <p>Naudodamiesi Finderis, jūs sutinkate:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pateikti teisingą ir tikslų informaciją apie save</li>
                <li>Palaikyti savo profilio duomenų aktualumą</li>
                <li>Neleisti kitiems naudotis jūsų paskyra</li>
                <li>Nedelsiant pranešti apie bet kokį pažeidimą ar nesankcionuotą naudojimą</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">3. Leidžiama veikla</h2>
            <p className="text-[#24465e] leading-relaxed mb-4">
              Finderis skirtas suaugusiems žmonėms (18+ metų), ieškantiems prasmingų santykių. 
              Galite:
            </p>
            <ul className="list-disc list-inside text-[#24465e] space-y-2 ml-4">
              <li>Kurti tikrą ir švarų profilio turinį</li>
              <li>Gerbti bendrauti su kitais vartotojais</li>
              <li>Naudoti funkcijas pagal paskirtį</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">4. Draudžiama veikla</h2>
            <p className="text-[#24465e] leading-relaxed mb-4">
              Griežtai draudžiama:
            </p>
            <ul className="list-disc list-inside text-[#24465e] space-y-2 ml-4">
              <li>Kurti fiktyvius ar melagingus profilius</li>
              <li>Priekabiauti, gąsdinti ar šantažuoti kitus vartotojus</li>
              <li>Siųsti nepageidaujamą turinį ar reklamą</li>
              <li>Dalintis nuogomis ar seksualinio turinio nuotraukomis</li>
              <li>Bandyti gauti pinigų ar vertybių iš kitų vartotojų</li>
              <li>Naudoti programėlę komerciniams tikslams</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">5. Turinio nuosavybė</h2>
            <p className="text-[#24465e] leading-relaxed">
              Jūs išlaikote visas teises į savo profilio turinį. Tačiau, naudodamiesi Finderis, 
              suteikiate mums ribotą licenciją naudoti, rodyti ir platinti jūsų turinį programėlės viduje 
              paslaugų teikimo tikslais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">6. Atsakomybės apribojimas</h2>
            <p className="text-[#24465e] leading-relaxed">
              Finderis nėra atsakinga už vartotojų tarpusavio bendravimą, susitikimus ar santykius, 
              susiklosčiusius naudojantis mūsų platforma. Rekomenduojame visada elgtis atsargiai 
              susitinkant su nepažįstamais žmonėmis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">7. Paslaugų nutraukimas</h2>
            <p className="text-[#24465e] leading-relaxed">
              Pasilieka teisę nutraukti ar sustabdyti jūsų prieigą prie paslaugų be įspėjimo, 
              jei pažeisite šias taisykles arba elgsitės netinkamai.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold brand-section-title mb-4">8. Kontaktai</h2>
            <p className="text-[#24465e] leading-relaxed">
              Dėl klausimų apie naudojimo taisykles kreipkitės: 
              <span className="font-semibold text-[#2D526B]"> surask@antrapuse.lt</span>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;

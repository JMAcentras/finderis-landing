
import { Heart, MapPin, Shield, Sparkles } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Bendri interesai",
      description: "Atraskite lietuvius visame pasaulyje, su kuriais jus sieja panašūs pomėgiai, vertybės ir gyvenimo tempas.",
      iconBgClass: "bg-gradient-to-br from-[#2D526B]/20 to-[#FA5B3B]/24"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Vietinis radimas",
      description: "Nesvarbu, kur gyvenate - raskite lietuvius savo aplinkoje. Susitikite kavinėje, parke ar jūsų mėgstamoje vietoje.",
      iconBgClass: "bg-gradient-to-br from-[#34C759]/24 to-[#93B9D2]/28"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Profilio saugumas",
      description: "Jūsų saugumas mums svarbiausias. Tikrinami profiliai, patikimi ryšiai ir apsauga nuo sukčiavimo.",
      iconBgClass: "bg-gradient-to-br from-[#FFCC00]/26 to-[#FA5B3B]/24"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Tikri ryšiai",
      description: "Ne tik paviršutiniški susitikimai - mes padedame rasti ilgalaikius, prasmingus santykius.",
      iconBgClass: "bg-gradient-to-br from-[#FA5B3B]/22 to-[#34C759]/24"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-title-gradient">
            Kodėl pasirinkti Finderį?
          </h2>
          <p className="text-xl text-[#24465e] max-w-2xl mx-auto">
            Sukūrėme programėlę lietuviams visame pasaulyje, kuri padės rasti meilę, draugų ir bendraminčių
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 brand-panel rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`mb-6 p-4 rounded-xl w-fit group-hover:scale-110 transition-transform duration-300 ${feature.iconBgClass}`}>
                <div className="text-[#1f3d52]">
                  {feature.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-[#1f3d52] group-hover:text-[#163246] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-[#33566e] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

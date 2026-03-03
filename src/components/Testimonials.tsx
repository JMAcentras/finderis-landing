
const Testimonials = () => {
  const avatarGradients = [
    "bg-gradient-to-br from-[#2D526B] to-[#FA5B3B]",
    "bg-gradient-to-br from-[#2D526B] to-[#34C759]",
    "bg-gradient-to-br from-[#FA5B3B] to-[#2D526B]"
  ];

  const testimonials = [
    {
      name: "Aušra M.",
      age: 28,
      text: "Per Finderis sutikau savo gyvenimo meilę! Po 3 mėnesių bendravimo mes persikėlėme gyventi kartu. Ačiū už šią nuostabią programėlę!",
      location: "Vilnius"
    },
    {
      name: "Tomas K.",
      age: 32,
      text: "Iš pradžių ieškojau tik naujų pažinčių, o galiausiai susiradau puikių draugų ir bendraminčių aktyviam laisvalaikiui.",
      location: "Kaunas"
    },
    {
      name: "Gabija L.",
      age: 25,
      text: "Finderis tikrai veikia! Puikus algoritmas ir saugus bendravimas. Čia sutikau žmonių, su kuriais mus jungia tie patys pomėgiai ir vertybės.",
      location: "Klaipėda"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 brand-title-gradient">
            Mūsų sėkmės istorijos
          </h2>
          <p className="text-xl text-[#24465e] max-w-2xl mx-auto">
            Tūkstančiai žmonių jau rado savo laimę su Finderiu
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group brand-panel p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${avatarGradients[index % avatarGradients.length]} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-[#1f3d52]">{testimonial.name}</h4>
                    <p className="text-sm text-[#33566e]">{testimonial.age} m., {testimonial.location}</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-[#2a4b61] leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="mt-6 flex text-[#FA5B3B]">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

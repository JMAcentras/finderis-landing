
const Testimonials = () => {
  const testimonials = [
    {
      name: "Aušra M.",
      age: 28,
      text: "Per Finderis sutikau savo gyvenimo meilę! Po 3 mėnesių bendravio mes persikėlėme gyventi kartu. Ačiū už šią nuostabią programėlę!",
      location: "Vilnius"
    },
    {
      name: "Tomas K.",
      age: 32,
      text: "Niekada netikėjau pažinčių programėlėmis, bet Finderis mane pakeisė. Čia sutikau savo žmoną, su kuria dabar auginame dukrytę.",
      location: "Kaunas"
    },
    {
      name: "Gabija L.",
      age: 25,
      text: "Finderis tikrai veikia! Puikus algoritmas ir saugus bendravimas. Po dviejų savaičių jau turėjau pirmą pasimatymą su dabar mano vaikinu.",
      location: "Klaipėda"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-slate-600 bg-clip-text text-transparent">
            Mūsų sėkmės istorijos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tūkstančiai žmonių jau rado savo laimę su Finderis
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-slate-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.age} m., {testimonial.location}</p>
                  </div>
                </div>
              </div>
              
              <blockquote className="text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="mt-6 flex text-orange-400">
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

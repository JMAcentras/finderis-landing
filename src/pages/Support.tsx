import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MessageCircle, Clock, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Support = () => {
  const { t, language } = useLanguage();

  const content = {
    lt: {
      title: "Pagalba ir kontaktai",
      description: "Turime klausimų? Esame čia, kad padėtume! Pasirinkite tinkamiausią būdą susisiekti su mumis.",
      methods: [
        {
          icon: <Mail className="w-6 h-6" />,
          title: "El. paštas",
          description: "Parašykite mums ir atsakysime per 24 valandas",
          contact: "surask@antrapuse.lt",
          action: "Rašyti laišką"
        },
        {
          icon: <Phone className="w-6 h-6" />,
          title: "Pagalbos linija",
          description: "Skambinkite dėl skubių klausimų",
          contact: "+370 699 77779",
          action: "Skambinti"
        }
      ],
      hours: {
        title: "Darbo laikas",
        weekdays: "Pirmadieniai - Penktadieniai: 9:00 - 18:00",
        weekends: "Savaitgaliais: 10:00 - 16:00",
        note: "Skubūs saugumo klausimai sprendžiami 24/7"
      },
      faq: {
        title: "Dažnai užduodami klausimai",
        items: [
          {
            question: "Kaip ištrinti paskyrą?",
            answer: "Eikite į nustatymus > Paskyra > Ištrinti paskyrą arba rašykite mums."
          },
          {
            question: "Kaip pranešti apie netinkamą elgesį?",
            answer: "Naudokite pranešimo mygtuką profilio puslapyje arba rašykite surask@antrapuse.lt."
          },
          {
            question: "Kaip keisti profilio informaciją?",
            answer: "Profilio redagavimas prieinamas nustatymų skiltyje."
          }
        ]
      }
    },
    en: {
      title: "Support & Contact",
      description: "Have questions? We're here to help! Choose the best way to reach us.",
      methods: [
        {
          icon: <Mail className="w-6 h-6" />,
          title: "Email",
          description: "Write to us and we'll respond within 24 hours",
          contact: "surask@antrapuse.lt",
          action: "Send Email"
        },
        {
          icon: <Phone className="w-6 h-6" />,
          title: "Support Hotline",
          description: "Call for urgent matters",
          contact: "+370 699 77779",
          action: "Call Now"
        }
      ],
      hours: {
        title: "Business Hours",
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        weekends: "Weekends: 10:00 AM - 4:00 PM",
        note: "Urgent safety matters are handled 24/7"
      },
      faq: {
        title: "Frequently Asked Questions",
        items: [
          {
            question: "How to delete my account?",
            answer: "Go to Settings > Account > Delete Account or write to us."
          },
          {
            question: "How to report inappropriate behavior?",
            answer: "Use the report button on the profile page or write to surask@antrapuse.lt."
          },
          {
            question: "How to change profile information?",
            answer: "Profile editing is available in the settings section."
          }
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t('backToHome')}
          </Link>
          <LanguageSwitcher />
        </div>
        
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{currentContent.title}</h1>
          <p className="text-gray-600 text-lg">{currentContent.description}</p>
        </div>
        
        <div className="space-y-8">
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-6">
            {currentContent.methods.map((method, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4">
                  <div className="text-green-600">
                    {method.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="font-medium text-green-600 mb-4">{method.contact}</p>
                <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
                  {method.action}
                </button>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Clock className="w-6 h-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">{currentContent.hours.title}</h2>
            </div>
            <div className="space-y-2 text-gray-700">
              <p>{currentContent.hours.weekdays}</p>
              <p>{currentContent.hours.weekends}</p>
              <p className="text-green-600 font-medium mt-4">{currentContent.hours.note}</p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{currentContent.faq.title}</h2>
            <div className="space-y-6">
              {currentContent.faq.items.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
            <h2 className="text-2xl font-bold text-red-800 mb-4">
              {language === 'lt' ? 'Skubūs atvejai' : 'Emergency Cases'}
            </h2>
            <p className="text-red-700 leading-relaxed">
              {language === 'lt' 
                ? 'Saugumo klausimais arba pranešimams apie nepilnamečius: surask@antrapuse.lt arba +370 699 77779 (skubūs atvejai)'
                : 'For safety issues or reports about minors: surask@antrapuse.lt or +370 699 77779 (emergency cases)'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;

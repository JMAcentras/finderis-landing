
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const DeleteAccount = () => {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast({
        title: "Klaida",
        description: "Prašome įvesti el. pašto adresą",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Užklausa pateikta",
      description: "Jūsų prašymas ištrinti paskyrą buvo sėkmingai pateiktas. Su jumis susisieksime per 24-48 valandas.",
    });
    
    setEmail("");
    setReason("");
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium mb-4"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Grįžti į pagrindinį
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Paskyros ištrynimas</h1>
          <p className="text-gray-600">Prašymas ištrinti Finderis paskyrą</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
          <div className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-200">
            <Trash2 className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-red-800 mb-2">Svarbi informacija</h3>
              <p className="text-red-700 leading-relaxed">
                Paskyros ištrynimas yra negrįžtamas veiksmas. Bus ištrinti visi jūsų duomenys, 
                įskaitant profilio informaciją, nuotraukas, pokalbius ir susitikimus. 
                Šis veiksmas negali būti atšauktas.
              </p>
            </div>
          </div>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Prašymo pateikimas</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Norėdami ištrinti savo Finderis paskyrą, užpildykite žemiau esančią formą. 
              Su jumis susisieksime per 24-48 valandas ir patvirtinsime paskyros ištrynimą.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  El. pašto adresas (susietas su paskyra) *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jusu.el.pastas@example.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                  Ištrynimo priežastis (neprivaloma)
                </label>
                <Textarea
                  id="reason"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                  placeholder="Papasakokite, kodėl norite ištrinti paskyrą. Jūsų atsiliepimas padės mums tobulėti."
                  rows={4}
                  className="w-full"
                />
              </div>
              
              <Button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 font-semibold rounded-lg transition-colors"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                Pateikti prašymą ištrinti paskyrą
              </Button>
            </form>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Alternatyvūs kontaktai</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-600" />
                <div>
                  <p className="font-medium text-gray-900">El. paštas</p>
                  <p className="text-gray-600">surask@antrapuse.lt</p>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-4">
                * Paštu rašydami nurodykite temą "Paskyros ištrynimas" ir savo registracijos el. pašto adresą.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;

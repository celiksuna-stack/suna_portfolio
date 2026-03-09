'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, Database, Languages, Handshake, Cog, BookOpenCheck, PackageSearch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  technical: [
    { 
      name: 'Dış Ticaret Teşvikleri', 
      icon: <BookOpenCheck className="h-6 w-6 text-pink-500" />,
      description: 'Üretim planına ve kapasite raporuna göre Dış Ticaret Teşviklerinin çıkarılması için (D1&D3), Bakanlık nezdinde başvurularının yapılması, alınmasını takiben, projeye bağlı olarak kullanımı ve proje tamamlandığında kapatılması'
    },
    { 
      name: 'İthal hammadde tedariği planlaması', 
      icon: <PackageSearch className="h-6 w-6 text-pink-500" />,
      description: 'Yerli hammadde alternatif ithal malzeme tedariği için dış ticaret maliyet çalışmalarının yapılması ve optimum maliyet içeren hammaddelerin tespiti'
    },
    { 
      name: 'YYS Danışmanı (Yetkilendirilmiş Yükümlü Statüsü)', 
      icon: <Handshake className="h-6 w-6 text-pink-500" />,
      description: 'Uluslar arası pasaport niteliğindeki YYS/AEO belgesinin alımı için tüm fabrika genelinde proje liderliği görevinin ve gerekliliklerinin yerine getirilmesi'
    },
    { 
      name: 'SAP Programı', 
      icon: <Database className="h-6 w-6 text-pink-500" />,
      description: 'SAP kurulumu aşamasında MM /SS ve PP modülleri üzerinde oluşum projelerinin yürütülmesi'
    },
    {
      name: 'İhracat pazar araştırmaları',
      icon: <Cog className="h-6 w-6 text-pink-500" />,
      description: 'Ürünlerin yurt dışı müşteri taleplerini değerlendirerek yeni müşteriler kazandırmak ve ihracat işlemlerini gerçekleştirmek'
    }
  ],
  languages: [
    { name: 'İngilizce (İleri Düzey)', icon: <Languages className="h-6 w-6 text-pink-500" /> },
    { name: 'İtalyanca (Başlangıç Seviyesi)', icon: <Languages className="h-6 w-6 text-pink-500" /> }
  ]
};

const seminars = [
    "ISO 14000 ÇEVRE YÖNETİM SİSTEMİ",
    "TEMEL BELGE PAYLAŞIM VE GÜVENLİK EĞİTİMİ",
    "OUTLOOK EĞİTİMİ",
    "İNSAN KAYNAKLARINDA YENİ NESİL :Y KUŞAĞI",
    "YENİ TÜRK TİCARET KANUNU"
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-pink-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-pink-100 text-pink-800 px-3 py-1 text-sm font-semibold">Yetenek & Uzmanlık</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-pink-900">Yetenekler ve Seminerler</h2>
            <p className="max-w-[900px] text-pink-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kariyerim boyunca edindiğim teknik beceriler, dil yetkinliklerim ve katıldığım profesyonel gelişim seminerleri.
            </p>
          </div>
        </div>
        <div className="grid gap-12 mt-12 md:grid-cols-2">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6 text-center text-gray-800">Teknik Beceriler ve Diller</h3>
                <Accordion type="single" collapsible className="w-full">
                  {skillsData.technical.map((skill, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="font-semibold text-lg hover:no-underline text-left">
                        <div className="flex items-start gap-4">
                          <span className="flex-shrink-0">{skill.icon}</span>
                          <span className="flex-1">{skill.name}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-gray-600 pl-10">
                        {skill.description}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {skillsData.languages.map((lang, index) => (
                         <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center justify-center p-4 bg-white">
                            <CardHeader className="p-2">
                                {lang.icon}
                            </CardHeader>
                            <CardContent className="p-2">
                                <p className="font-semibold text-lg text-gray-700">{lang.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6 text-center text-gray-800">Katıldığım Seminerler</h3>
                <div className="grid gap-6 sm:grid-cols-1">
                    {seminars.map((seminar, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                           <CardContent className="flex items-center gap-4 p-6">
                             <Award className="h-8 w-8 text-pink-500 flex-shrink-0" />
                             <p className="font-medium text-md text-gray-700">{seminar}</p>
                           </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

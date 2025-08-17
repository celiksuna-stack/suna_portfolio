import { Badge } from '@/components/ui/badge';
import { Award, Code, Database, Languages, Handshake, Cog } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = {
  technical: [
    { name: 'Windows İşletim Sistemleri', icon: <Cog className="h-6 w-6 text-primary" /> },
    { name: 'MS Office Araçları', icon: <Cog className="h-6 w-6 text-primary" /> },
    { name: 'SAP Programı', icon: <Database className="h-6 w-6 text-primary" /> },
    { name: 'YYS Danışmanı (Yetkilendirilmiş Yükümlü Statüsü)', icon: <Handshake className="h-6 w-6 text-primary" /> }
  ],
  languages: [
    { name: 'Türkçe (Anadil)', icon: <Languages className="h-6 w-6 text-primary" /> },
    { name: 'İngilizce (İleri Düzey)', icon: <Languages className="h-6 w-6 text-primary" /> },
    { name: 'İtalyanca (Başlangıç Seviyesi)', icon: <Languages className="h-6 w-6 text-primary" /> }
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
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">Yetenek & Uzmanlık</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent-foreground">Yetenekler ve Seminerler</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kariyerim boyunca edindiğim teknik beceriler, dil yetkinliklerim ve katıldığım profesyonel gelişim seminerleri.
            </p>
          </div>
        </div>
        <div className="grid gap-12 mt-12">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6 text-center">Teknik Beceriler ve Diller</h3>
                 <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {skillsData.technical.map((skill, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center justify-center p-4">
                            <CardHeader className="p-2">
                                {skill.icon}
                            </CardHeader>
                            <CardContent className="p-2">
                                <p className="font-semibold text-lg">{skill.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                    {skillsData.languages.map((lang, index) => (
                         <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center justify-center p-4">
                            <CardHeader className="p-2">
                                {lang.icon}
                            </CardHeader>
                            <CardContent className="p-2">
                                <p className="font-semibold text-lg">{lang.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <div>
                <h3 className="text-2xl md:text-3xl font-bold font-headline mb-6 text-center">Katıldığı Seminerler</h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {seminars.map((seminar, index) => (
                        <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                           <CardContent className="flex items-center gap-4 p-6">
                             <Award className="h-8 w-8 text-primary flex-shrink-0" />
                             <p className="font-medium text-md">{seminar}</p>
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